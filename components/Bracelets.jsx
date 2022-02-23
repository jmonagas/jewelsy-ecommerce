import styles from "../styles/productGrid.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Bracelets({ bracelet }) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.flexGrid}>
					<Link
						passHref
						href="/bracelets/[id]"
						as={`/bracelets/${bracelet.id}`}
					>
						<a title="Janusz Jewelsy Collections">
							<li className={styles.li}>
								<Image
									src={process.env.NEXT_PUBLIC_URL + `${bracelet.photo}`}
									width="350px"
									height="225px"
									objectFit="cover"
									alt="Janusz Jewelsy Collections"
									title="Janusz Jewelsy Collections"
								/>
								{bracelet.name}&nbsp;{bracelet.id}
							</li>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}
