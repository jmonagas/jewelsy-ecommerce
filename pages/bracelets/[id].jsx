import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import styles from "../../styles/productGrid.module.css";
import Link from "next/link";

const fetcher = async (url) => {
	const res = await fetch(url);
	const data = await res.json();

	if (res.status !== 200) {
		throw new Error(data.message);
	}
	return data;
};

export default function Bracelet() {
	const { query } = useRouter();
	const { data, error } = useSWR(
		() => query.id && `/api/bracelets/${query.id}`,
		fetcher
	);

	if (error) return <div>{error.message}</div>;
	if (!data) return <div>Retrieving bracelets data...</div>;

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.h1}>Product Details</h1>
				<div className={styles.wrapper}>
					<div className={styles.flexGrid2}>
						<Image
							src={process.env.NEXT_PUBLIC_URL + `${data.photo}`}
							width="350px"
							height="225px"
							objectFit="cover"
							alt="Janusz Jewelsy Collections"
							title="Janusz Jewelsy Collections"
						/>
						<p>
							{data.name}&nbsp;{data.id}
							<br />
							<b>Description</b>:&nbsp;{data.description}
							<br />
							<b>Status</b>:&nbsp;{data.status}
							<br />
							<b>Availability</b>:&nbsp;{data.availability}
							<br />
							<b>Price</b>:&nbsp;{data.price}
							<br />
							<Link passHref href={"/bracelets"}>
								<a title="Go Back" className={styles.arrowBack}>
									<span>&#129120;&nbsp;Go Back&nbsp;&#9472;</span>
								</a>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps({ params }) {
	const res = await fetch(
		process.env.NEXT_PUBLIC_URL + `/api/bracelets/${params.id}`
	);
	const data = await res.json();
	const bracelets = data;
	return {
		props: { bracelets },
		revalidate: 86400,
	};
}
export async function getStaticPaths() {
	const res = await fetch(process.env.NEXT_PUBLIC_URL + "/api/bracelets");
	const data = await res.json();
	const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
	return {
		paths,
		fallback: true,
	};
}
