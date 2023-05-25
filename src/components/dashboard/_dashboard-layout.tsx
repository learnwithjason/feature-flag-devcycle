import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './_dashboard-layout.module.css';

export const DashboardLayout = () => {
	return (
		<>
			<SignedIn>
				<div className={styles.dashboard}>
					<nav className={styles.nav}>
						<NavLink
							to="/dashboard"
							className={({ isActive }) => (isActive ? styles.active : '')}
							end
						>
							Dashboard
						</NavLink>
						<NavLink
							to="/dashboard/waffles"
							className={({ isActive }) => (isActive ? styles.active : '')}
						>
							Your Waffles
						</NavLink>
						<NavLink
							to="/dashboard/progress"
							className={({ isActive }) => (isActive ? styles.active : '')}
						>
							Waff-fulfillment
						</NavLink>
					</nav>
					<section className={styles.content}>
						<Outlet />
					</section>
				</div>
			</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</>
	);
};
