import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import {
	useIsDVCInitialized,
	withDVCProvider,
} from '@devcycle/devcycle-react-sdk';
import { ClerkProvider, SignIn, SignUp, useUser } from '@clerk/clerk-react';
import { Layout } from './components/_layout';
import { HomePage } from './components/home';
import { DashboardLayout } from './components/dashboard/_dashboard-layout';
import { DashboardHome } from './components/dashboard/dashboard-home';
import { DashboardWaffles } from './components/dashboard/dashboard-waffles';
import { DashboardProgress } from './components/dashboard/dashboard-progress';

import './styles/main.css';

/*
 * DevCycle needs access to the Clerk context, so we need to split out the
 * component again.
 */
const MainApp = () => {
	const { isLoaded, user } = useUser();

	// this little maneuver saves us from having yet another split out component
	const MainAppWithFeatureFlags = withDVCProvider({
		sdkKey: 'dvc_client_8a1fee11_93de_428d_b654_20b16ddddc0e_5d1cef5',
		user: {
			user_id: user?.id,
			name: user?.firstName ?? '',
			email: user?.emailAddresses[0].emailAddress,
		},
	})(() => {
		const dvcReady = useIsDVCInitialized();

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
						<Route path="progress" element={<DashboardProgress />} />
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
