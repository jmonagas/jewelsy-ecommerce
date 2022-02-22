import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Slider from "../components/Slider";

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Jewelsy | Fine Jewelry | Exclusive Collections | Best Prices
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
					<h1 className={styles.h1}>
						Welcome to&nbsp;
						<span className={styles.highlights}>Jewelsy&reg;</span>
					</h1>
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
					<p className={styles.textCentered}>
						Get started by browsing our <b>exclusive</b> collections
					</p>
					<div className={styles.grid}>
						<Link passHref href={"/bracelets"}>
							<a className={styles.card} title="Bracelets Collection">
								<Image
									className={styles.photos}
									src={"/img/bracelets.jpg"}
									width={222}
									height={222}
									objectFit="cover"
									alt="Bracelets Collection"
									title="Bracelets Collection"
								/>
								<h2 className={styles.h2}>Bracelets</h2>
								<p>See Details and Features</p>
							</a>
						</Link>

						<Link passHref href={"/cufflinks"}>
							<a className={styles.card} title="Cufflinks Collection">
								<Image
									className={styles.photos}
									src={"/img/cufflinks.jpg"}
									width={222}
									height={222}
									objectFit="cover"
									alt="Cufflinks Collection"
									title="Cufflinks Collection"
								/>
								<h2 className={styles.h2}>Cufflinks</h2>
								<p>See Details and Features</p>
							</a>
						</Link>

						<Link passHref href={"/diamonds"}>
							<a className={styles.card} title="Diamonds Collection">
								<Image
									className={styles.photos}
									src={"/img/diamonds.jpg"}
									width={222}
									height={222}
									objectFit="cover"
									alt="Diamonds Collection"
									title="Diamonds Collection"
								/>
								<h2 className={styles.h2}>Diamonds</h2>
								<p>See Details and Features</p>
							</a>
						</Link>

						<Link passHref href={"/earrings"}>
							<a className={styles.card} title="Earrings Collection">
								<Image
									className={styles.photos}
									src={"/img/earrings.jpg"}
									width={222}
									height={222}
									objectFit="cover"
									alt="Earrings Collection"
									title="Earrings Collection"
								/>
								<h2 className={styles.h2}>Earrings</h2>
								<p>See Details and Features</p>
							</a>
						</Link>

						<Link passHref href={"/necklaces"}>
							<a className={styles.card} title="Necklaces Collection">
								<Image
									className={styles.photos}
									src={"/img/necklaces.jpg"}
									width={222}
									height={222}
									objectFit="cover"
									alt="Necklaces Collection"
									title="Necklaces Collection"
								/>
								<h2 className={styles.h2}>Necklaces</h2>
								<p>See Details and Features</p>
							</a>
						</Link>

						<Link passHref href={"/pearls"}>
							<a className={styles.card} title="Pearls Collection">
								<Image
									className={styles.photos}
									src={"/img/pearls.jpg"}
									width={222}
									height={222}
									objectFit="cover"
									alt="Pearls Collection"
									title="Pearls Collection"
								/>
								<h2 className={styles.h2}>Pearls</h2>
								<p>See Details and Features</p>
							</a>
						</Link>

						<Link passHref href={"/pendants"}>
							<a className={styles.card} title="Pendants Collection">
								<Image
									className={styles.photos}
									src={"/img/pendants.jpg"}
									width={222}
									height={222}
									objectFit="cover"
									alt="Pendants Collection"
									title="Pendants Collection"
								/>
								<h2 className={styles.h2}>Pendants</h2>
								<p>See Details and Features</p>
							</a>
						</Link>

						<Link passHref href={"/rings"}>
							<a className={styles.card} title="Rings Collection">
								<Image
									className={styles.photos}
									src={"/img/rings.jpg"}
									width={222}
									height={222}
									objectFit="cover"
									alt="Rings Collection"
									title="Rings Collection"
								/>
								<h2 className={styles.h2}>Rings</h2>
								<p>See Details and Features</p>
							</a>
						</Link>

						<Link passHref href={"/watches"}>
							<a className={styles.card} title="Watches Collection">
								<Image
									className={styles.photos}
									src={"/img/watches.jpg"}
									width={222}
									height={222}
									objectFit="cover"
									alt="Watches Collection"
									title="Watches Collection"
								/>
								<h2 className={styles.h2}>Watches</h2>
								<p>See Details and Features</p>
							</a>
						</Link>
					</div>
					<p className={styles.textJustified}>
						Janusz&trade;&nbsp;Jewelsy&reg;&nbsp;sells fine jewelry only.
						Therefore, our clients are required by law to make any and all
						monetary arrangements or payments in person, so that we can comply
						with stringent laws, rules, and regulations in effect in
						Switzerland, as well as with all applicable laws in the host country
						where the transaction is taking place.
					</p>
				</main>
			</div>
		</>
	);
}
