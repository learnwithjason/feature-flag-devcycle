import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { ClerkProvider, SignIn, SignUp, useUser } from '@clerk/clerk-react';
import { Layout } from './components/_layout';
import { HomePage } from './components/home';
import { DashboardLayout } from './components/dashboard/_dashboard-layout';
import { DashboardHome } from './components/dashboard/dashboard-home';
import { DashboardWaffles } from './components/dashboard/dashboard-waffles';
import { DashboardProgress } from './components/dashboard/dashboard-progress';

import './styles/main.css';

const MainApp = () => {
	const { isLoaded } = useUser();

	if (!isLoaded) {
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
