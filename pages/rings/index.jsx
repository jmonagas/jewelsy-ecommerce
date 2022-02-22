import useSWR from "swr";
import Ring from "../../components/Rings";
import styles from "../../styles/productGrid.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index({ ring }) {
	const { data, error } = useSWR("/api/rings", fetcher);

	if (error) return <div>Rings data failed to load</div>;
	if (!data) return <div>Loading rings data...</div>;

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.h1}>Collections</h1>
				<div className={styles.flexGrid}>
					<span>
						Based on our 174 year&apos;s experience, we know first-hand that
						choosing the right jewel for each client is a matter of taste and
						precision,
						<br />
						with so many variables to be considered. That is why&nbsp;
						<b>Jewelsy&reg;</b>&nbsp;does not mass produce jewelry
					</span>
				</div>
				<div className={styles.flexGrid}>
					<ul className={styles.ul}>
						{data.map((r, i) => (
							<Ring key={i} ring={r} />
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
