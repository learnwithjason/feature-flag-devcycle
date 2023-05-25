import styles from './dashboard-progress.module.css';

export const DashboardProgress = () => {
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
						<p className={styles.status}>1 / 2</p>
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
