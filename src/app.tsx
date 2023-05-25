import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { ClerkProvider, SignIn, SignUp, useUser } from '@clerk/clerk-react';
import {
	useIsDVCInitialized,
	useVariableValue,
	withDVCProvider,
} from '@devcycle/devcycle-react-sdk';
import { Layout } from './components/_layout';
import { HomePage } from './components/home';
import { DashboardLayout } from './components/dashboard/_dashboard-layout';
import { DashboardHome } from './components/dashboard/dashboard-home';
import { DashboardWaffles } from './components/dashboard/dashboard-waffles';
import { DashboardProgress } from './components/dashboard/dashboard-progress';

import './styles/main.css';

const MainApp = () => {
	const { isLoaded, user } = useUser();

	// this little maneuver saves us from having yet another split out component
	const MainAppWithFeatureFlags = withDVCProvider({
		sdkKey: import.meta.env.VITE_DEVCYCLE_CLIENT_KEY,
		user: {
			user_id: user?.id,
			name: user?.firstName ?? '',
			email: user?.emailAddresses[0].emailAddress,
		},
	})(() => {
		const dvcReady = useIsDVCInitialized();
		const showWaffFulfillment = useVariableValue('waff-fulfillment', false);

		if (!dvcReady || !isLoaded) {
			return (
				<div className="loading">
					<p>loading...</p>
				</div>
			);
		}

		return (
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/login/*"
						element={<SignIn routing="path" path="/login" />}
					/>
					<Route
						path="/register/*"
						element={<SignUp routing="path" path="/register" />}
					/>
					<Route path="/dashboard" element={<DashboardLayout />}>
						<Route index element={<DashboardHome />} />
						<Route path="waffles" element={<DashboardWaffles />} />
						{showWaffFulfillment ? (
							<Route path="progress" element={<DashboardProgress />} />
						) : null}
					</Route>
				</Route>
			</Routes>
		);
	});

	return <MainAppWithFeatureFlags />;
};

/*
 * Clerk needs access to the React Router context, so we need to split out the
 * component to allow for that.
 */
const ClerkProviderWithRoutes = () => {
	const navigate = useNavigate();

	return (
		<ClerkProvider
			publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
			navigate={(to) => navigate(to)}
		>
			<MainApp />
		</ClerkProvider>
	);
};

export const App = () => {
	return (
		<BrowserRouter>
			<ClerkProviderWithRoutes />
		</BrowserRouter>
	);
};
