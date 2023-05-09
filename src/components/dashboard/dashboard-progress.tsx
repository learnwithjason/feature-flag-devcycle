import { useVariableValue } from '@devcycle/devcycle-react-sdk';
import { redirect, useNavigate } from 'react-router-dom';
import styles from './dashboard-progress.module.css';
import { useEffect } from 'react';

export const DashboardProgress = () => {
	const navigate = useNavigate();
	const showWaffFulfillment = useVariableValue('waff-fulfillment', false);

	useEffect(() => {
		if (!showWaffFulfillment) {
			navigate('/dashboard');
		}
	}, [showWaffFulfillment]);

	if (!showWaffFulfillment) {
		return null;
	}

	return (
		<>
			<section className="box">
				<div className="boxTopper">
					<h2>Your Journey Towards Waff-fulfillment</h2>
				</div>
				<ul className={styles.progressList}>
					<li className={styles.quest}>
						<div className={styles.details}>
							<h3 className={styles.name}>Sweet tooth</h3>
							<p className={styles.description}>
								Regular waffles are sweet, but we can go deeper. Try waffling
								some candy!
							</p>
						</div>
						<p className={styles.status}>0 / 1</p>
					</li>
					<li className={styles.quest}>
						<div className={styles.details}>
							<h3 className={styles.name}>
								Solve the mysteries of the (food) pyramid
							</h3>
							<p className={styles.description}>
								Can you waffle your way through the entire food pyramid?
							</p>
						</div>
						<p className={styles.status}>2 / 6</p>
					</li>
					<li className={styles.quest}>
						<div className={styles.details}>
							<h3 className={styles.name}>Surf and turf</h3>
							<p className={styles.description}>
								Can you waffle a steak? What about a lobster tail? Do you like
								expensive experiments? There’s only one way to find out!
							</p>
						</div>
						<p className={styles.status}>2 / 6</p>
					</li>
				</ul>
			</section>
			<p className={styles.disclaimer}>
				Waff-fulfillment is an experimental feature. Like it? Hate it?{' '}
				<button onClick={() => alert('TODO implement feedback form')}>
					send us feedback!
				</button>
			</p>
		</>
	);
};
