import useSWR from "swr";
import Diamond from "../../components/Diamonds";
import styles from "../../styles/productGrid.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index({ diamond }) {
	const { data, error } = useSWR("/api/diamonds", fetcher);

	if (error) return <div>Diamonds data failed to load</div>;
	if (!data) return <div>Loading diamonds data...</div>;

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
						{data.map((d, i) => (
							<Diamond key={i} diamond={d} />
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
