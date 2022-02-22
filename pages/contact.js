import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Slider from "../components/Slider";

export default function Contact() {
	return (
		<>
			<Head>
				<title>
					Contact Us | Jewelsy | Fine Jewelry | Exclusive Collections
				</title>
				<meta
					name="description"
					content="Since 1848, Janusz Jewelsy is a genuine Swiss artisan and master craftsman who designs, creates and sells fine jewelry and exclusive collections at best prices"
					key="description"
				/>
				<meta
					name="keywords"
					content="jewelry, bracelets, rings, earrings, pendants, watches, necklaces, pearls, diamonds, cufflinks"
					key="keywords"
				/>
			</Head>
			<div className={styles.container}>
				<Slider />
				<main className={styles.main}>
					<h1 className={styles.h1}>Contact Us</h1>
					<p className={styles.textJustified}>
						Since 1848, Janusz <b>Jewelsy</b> is a genuine Swiss artisan and
						master craftsman who designs, creates and sells fine jewelry. Based
						on our 174 year&apos;s experience, we know first-hand that choosing
						the right jewel for each client is a matter of taste and precision,
						with so many variables to be considered. Honesty and transparency
						are the very core of our business. More importantly, we are the the
						sole manufacturer and seller, so we make it simple and unconditional
						by giving a lifetime guarantee: if our product does not pass our
						highest quality standards, it will be repaired or replaced at no
						cost to the buyer.
					</p>
					<div className={styles.wrapper}>
						<div className={styles.card}>
							<a
								href="https://www.google.com/maps/place/Z%C3%BCrich,+Switzerland/@47.3773697,8.3966319,11z/data=!3m1!4b1!4m5!3m4!1s0x47900b9749bea219:0xe66e8df1e71fdc03!8m2!3d47.3768866!4d8.541694"
								target="_blank"
								rel="noopener noreferrer"
								title="Zurich, Switzerland"
							>
								Corporate Headquarters
								<br />
								Bahnhofplatz
								<br />
								8001 Zurich
								<br />
								+41 (44) 210-1010
								<h2>Schweiz</h2>
							</a>
						</div>
					</div>
					<div className={styles.wrapper}>
						<div className={styles.card}>
							<a
								href="https://www.google.com/maps/place/Vienna,+Austria/@48.2203445,16.09988,10z/data=!3m1!4b1!4m5!3m4!1s0x476d079e5136ca9f:0xfdc2e58a51a25b46!8m2!3d48.2081743!4d16.3738189"
								target="_blank"
								rel="noopener noreferrer"
								title="Vienna, Austria"
							>
								Manufacturing Centre
								<br />
								Karntnerstra
								<br />
								1010 Vienna
								<br />
								+43 (1) 210-1010
								<h2>Austria</h2>
							</a>
						</div>
					</div>
					<div className={styles.wrapper}>
						<div className={styles.card}>
							<a
								href="https://www.google.com/maps/place/New+York,+NY,+USA/@40.6976701,-74.2598758,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728"
								target="_blank"
								rel="noopener noreferrer"
								title="New York, U.S.A"
							>
								Distribution Centre
								<br />
								Trinity Plaz
								<br />
								1006 NY City
								<br />
								+1 (212) 210-1010
								<h2>U.S.A.</h2>
							</a>
						</div>
					</div>
					<div className={styles.wrapper}>
						<div className={styles.card}>
							<a
								href="https://www.google.com/maps/place/Calgary,+AB/@51.0277202,-114.3680226,10z/data=!3m1!4b1!4m5!3m4!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!3d51.0447331!4d-114.0718831"
								target="_blank"
								rel="noopener noreferrer"
								title="Calgary, Canada"
							>
								Distribution Centre
								<br />
								Maine Avenue
								<br />
								1331 Calgary
								<br />
								+1 (403) 210-1010
								<h2>Canada</h2>
							</a>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
