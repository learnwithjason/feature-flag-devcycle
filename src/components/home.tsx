import { SignUpButton, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

export const HomePage = () => {
	return (
		<>
			<section className={styles.hero}>
				<h1 className={styles.heading}>You Can Waffle That!</h1>
				<div className={styles.introText}></div>
				<img
					src="https://images.unsplash.com/photo-1646794427905-f35e155f3487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80&crop=focalpoint&fp-y=0.45"
					alt="a person holding several waffles in front of their face fanned out like playing cards"
					className={styles.image}
				/>
			</section>
			<section className={styles.block}>
				<div className="box">
					<h2 className={styles.subheading}>
						Anything can be a waffle if you believe!
					</h2>
					<p>
						Join a community of dedicated waffle iron enthusiasts who refuse to
						accept that there are things you shouldn’t put into a waffle iron.
					</p>

					<SignedIn>
						<Link to="/dashboard" className={styles.cta}>
							Go To Your Dashboard
						</Link>
					</SignedIn>
					<SignedOut>
						<SignUpButton mode="modal">
							<button className={styles.cta}>Join the Movement</button>
						</SignUpButton>
					</SignedOut>
				</div>
			</section>
		</>
	);
};
