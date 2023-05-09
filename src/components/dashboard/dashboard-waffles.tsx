import waffles from '../../data/waffles.json';
import styles from './_dashboard-layout.module.css';

export const DashboardWaffles = () => {
	function handleClick(event: { preventDefault: () => void }) {
		event.preventDefault();

		window.alert('TODO: make the controls work');
	}

	return (
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

							<div className={styles.controls}>
								<button className={styles.button} onClick={handleClick}>
									edit
								</button>
								<button className={styles.button} onClick={handleClick}>
									delete
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
