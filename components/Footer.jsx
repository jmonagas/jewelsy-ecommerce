import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<a
					href="https://web-development-jmonagas.ml/"
					target="_blank"
					rel="noopener noreferrer"
					title="Created by Web Development By J. Monagas"
				>
					Janusz&trade;
					<span>
						<Image
							src={"/img/jewelsy_logo.png"}
							alt="Jewelsy Logo"
							title="Jewelsy Logo"
							objectFit="cover"
							width={30}
							height={30}
						/>
					</span>
					Jewelsy&reg;
				</a>
			</footer>
			<footer className={styles.footer2}>
				<div className={styles.footerDiv}>
					<a
						href="https://www.google.com/maps/place/Z%C3%BCrich,+Switzerland/@47.3773697,8.3966319,11z/data=!3m1!4b1!4m5!3m4!1s0x47900b9749bea219:0xe66e8df1e71fdc03!8m2!3d47.3768866!4d8.541694"
						target="_blank"
						rel="noopener noreferrer"
						title="Zurich, Switzerland"
					>
						Bahnhofplatz
						<br />
						8001 Zurich
						<br />
						<b>Schweiz</b>
					</a>
				</div>
				<div className={styles.footerDiv}>
					<a
						href="https://www.google.com/maps/place/Vienna,+Austria/@48.2203445,16.09988,10z/data=!3m1!4b1!4m5!3m4!1s0x476d079e5136ca9f:0xfdc2e58a51a25b46!8m2!3d48.2081743!4d16.3738189"
						target="_blank"
						rel="noopener noreferrer"
						title="Vienna, Austria"
					>
						Karntnerstra
						<br />
						1010 Vienna
						<br />
						Austria
					</a>
				</div>
				<div className={styles.footerDiv}>
					<a
						href="https://www.google.com/maps/place/New+York,+NY,+USA/@40.6976701,-74.2598758,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728"
						target="_blank"
						rel="noopener noreferrer"
						title="New York, U.S.A"
					>
						Trinity Plaz
						<br />
						1006 NY City
						<br />
						U.S.A.
					</a>
				</div>
				<div className={styles.footerDiv}>
					<a
						href="https://www.google.com/maps/place/Calgary,+AB/@51.0277202,-114.3680226,10z/data=!3m1!4b1!4m5!3m4!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!3d51.0447331!4d-114.0718831"
						target="_blank"
						rel="noopener noreferrer"
						title="Calgary, Canada"
					>
						Maine Avenue
						<br />
						1331 Calgary
						<br />
						Canada
					</a>
				</div>
			</footer>
			<footer className={styles.footer3}>
				<a
					href="https://web-development-jmonagas.ml/"
					target="_blank"
					rel="noopener noreferrer"
					title="Created by Web Development By J. Monagas"
				>
					<p>Copyright&nbsp;&copy;&nbsp;Jewelsy&reg;</p>
				</a>
			</footer>
		</>
	);
};

export default Footer;
