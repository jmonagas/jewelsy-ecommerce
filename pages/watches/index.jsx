import useSWR from "swr";
import Watch from "../../components/Watches";
import styles from "../../styles/productGrid.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index({ watch }) {
	const { data, error } = useSWR("/api/watches", fetcher);

	if (error) return <div>Watches data failed to load</div>;
	if (!data) return <div>Loading watches data...</div>;

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.h1}>Collections</h1>
				<div className={styles.flexGrid}>
					<p>
						Based on our 174 year&apos;s experience, we know firsthand that
						choosing the right jewel for each client is a matter of taste and
						precision,
						<br />
						with so many variables to be considered. That is why&nbsp;
						<b>Jewelsy&reg;</b>&nbsp;does not mass produce jewelry
					</p>
				</div>
				<div className={styles.flexGrid}>
					<ul className={styles.ul}>
						{data.map((w, i) => (
							<Watch key={i} watch={w} />
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
