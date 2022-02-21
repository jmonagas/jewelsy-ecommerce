import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
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
				<meta lang="en" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:locale" content="en_US" key="og:locale" />
				<meta property="og:type" content="website" key="og:type" />
				<meta property="og:url" content="https://jewelsy.ml" key="og:url" />
				<meta
					property="og:site_name"
					content="Janusz&trade;Jewelsy&reg; | Fine Jewelry at Best Prices"
					key="og:site_name"
				/>
				<meta
					property="og:title"
					content="Janusz&trade;Jewelsy&reg; | Fine Jewelry at Best Prices"
					key="og:title"
				/>
				<meta
					property="og:description"
					content="Janusz&trade;Jewelsy&reg; | Fine Jewelry at Best Prices"
					key="og:description"
				/>
				<meta
					property="og:image"
					content="https://cdn.pixabay.com/photo/2021/11/04/18/01/ring-6768987_960_720.jpg"
					key="og:image"
				/>
				<meta
					property="og:image:alt"
					content="Janusz&trade;Jewelsy&reg; | Fine Jewelry"
					key="og:image:alt"
				/>
				<meta
					property="twitter:card"
					content="summary_large_image"
					key="twitter:card"
				/>
				<meta
					property="twitter:site"
					content="https://jewelsy.ml"
					key="twitter:site"
				/>
				<meta
					property="twitter:title"
					content="Janusz&trade;Jewelsy&reg; | Fine Jewelry"
					key="twitter:title"
				/>
				<meta
					property="twitter:description"
					content="Janusz&trade;Jewelsy&reg; | Fine Jewelry at Best Prices"
					key="twitter:description"
				/>
				<meta
					property="twitter:image"
					content="https://cdn.pixabay.com/photo/2021/11/04/18/01/ring-6768987_960_720.jpg"
					key="twitter:image"
				/>
				<meta
					property="twitter:image:alt"
					content="Janusz&trade;Jewelsy&reg; | Fine Jewelry at Best Prices"
					key="twitter:image:alt"
				/>
				<meta name="language" content="en-us" key="language" />
				<meta name="rating" content="General" key="rating" />
				<meta name="distribution" content="Global" key="distribution" />
				<meta
					name="classification"
					content="ecommerce, jewelry, jewels, rings, pendants, diamonds, bracelets, pearls, cufflinks, earrings"
					key="classification"
				/>
				<meta name="robots" content="index, follow, notranslate" key="robots" />
				<meta
					name="author"
					content="Web Development By J. Monagas"
					key="author"
				/>
				<meta
					name="creator"
					content="Jose G. Monagas, Web Developer Full Stack, Calgary AB Canada"
					key="creator"
				/>
				<meta
					name="publisher"
					content="Web Development By J. Monagas, Web Projects in English and Spanish"
					key="publisher"
				/>
				<meta
					name="copyright"
					content="Jose G. Monagas, Web Developer Full Stack, Calgary AB Canada"
					key="copyright"
				/>
				<link rel="canonical" type="canonical" href="https://jewelsy.ml" />
				<link
					rel="shortcut icon"
					href="https://cdn.pixabay.com/photo/2021/11/04/18/01/ring-6768987_960_720.jpg"
				/>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
