import { useVariableValue } from '@devcycle/devcycle-react-sdk';
import { Link } from 'react-router-dom';
import waffles from '../../data/waffles.json';
import styles from './_dashboard-layout.module.css';

export const DashboardHome = () => {
	const showWaffFulfillment = useVariableValue('waff-fulfillment', false);

	return (
		<>
			{showWaffFulfillment ? (
				<section className="box">
					<div className="boxTopper">
						<h2>NEW! Your Journey Toward Waff-fulfillment</h2>
						<div className={styles.boxControls}>
							<Link to="/dashboard/progress" className={styles.button}>
								check it out &rarr;
							</Link>
						</div>
					</div>
				</section>
			) : null}
			<section className="box">
				<div className="boxTopper">
					<h2>Popular Waffles</h2>
				</div>
				<ul className={styles.waffleList}>
					{waffles.trending.map((waffle) => {
						return (
							<li className={styles.waffle} key={waffle.id}>
								<a href={waffle.link} target="_blank" rel="noopener">
									<img
										src={waffle.image.src}
										alt={waffle.image.alt}
										className={styles.image}
									/>
								</a>
								<h3>
									<a href={waffle.link} target="_blank" rel="noopener">
										{waffle.title}
									</a>
								</h3>
								<p>
									posted by {waffle.author} on {waffle.network}
								</p>
							</li>
						);
					})}
				</ul>
			</section>
			<section className="box">
				<div className="boxTopper">
					<h2>Your Recent Waffles</h2>
					<div className={styles.boxControls}>
						<button className={styles.button}>+ post new</button>
					</div>
				</div>
				<ul className={styles.waffleList}>
					{waffles.yours.map((waffle) => {
						return (
							<li className={styles.waffle} key={waffle.id}>
								<a href={waffle.link} target="_blank" rel="noopener">
									<img
										src={waffle.image.src}
										alt={waffle.image.alt}
										className={styles.image}
									/>
								</a>
								<h3>
									<a href={waffle.link} target="_blank" rel="noopener">
										{waffle.title}
									</a>
								</h3>
								<p>
									posted by {waffle.author} on {waffle.network}
								</p>
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
};
