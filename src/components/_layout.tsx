import {
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/clerk-react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './_layout.module.css';

export const Layout = () => {
	return (
		<>
			<header className={styles.header}>
				<Link to="/" rel="home">
					You Can Waffle That!
				</Link>

				<nav className={styles.nav}>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? styles.active : '')}
						end
					>
						home
					</NavLink>
					<SignedIn>
						<NavLink
							to="/dashboard"
							className={({ isActive }) => (isActive ? styles.active : '')}
						>
							dashboard
						</NavLink>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<SignInButton mode="modal">
							<button className={styles.signIn}>Log In</button>
						</SignInButton>
					</SignedOut>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
			<footer className={styles.footer}>
				<p>
					<a href="https://jason.af/links">Jason made this</a> (sorry)
				</p>
				<nav className={styles.footerNav}>
					<a href="https://devcycle.com/">feature flagged using DevCycle</a>
					<a href="#TODO">learn how to build this</a>
					<a href="https://github.com/learnwithjason/feature-flag-devcycle">
						source code
					</a>
				</nav>
			</footer>
		</>
	);
};
