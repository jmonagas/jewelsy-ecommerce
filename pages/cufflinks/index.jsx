import useSWR from "swr";
import Cufflink from "../../components/Cufflinks";
import styles from "../../styles/productGrid.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index({ cufflink }) {
	const { data, error } = useSWR("/api/cufflinks", fetcher);

	if (error) return <div>Cufflinks data failed to load</div>;
	if (!data) return <div>Loading cufflinks data...</div>;

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
						{data.map((c, i) => (
							<Cufflink key={i} cufflink={c} />
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
