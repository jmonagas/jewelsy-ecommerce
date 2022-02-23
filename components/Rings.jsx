import styles from "../styles/productGrid.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Rings({ ring }) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.flexGrid}>
					<Link passHref href="/rings/[id]" as={`/rings/${ring.id}`}>
						<a title="Janusz Jewelsy Collections">
							<li className={styles.li}>
								<Image
									src={process.env.NEXT_PUBLIC_URL + `${ring.photo}`}
									width="350px"
									height="225px"
									objectFit="cover"
									alt="Janusz Jewelsy Collections"
									title="Janusz Jewelsy Collections"
								/>
								{ring.name}&nbsp;{ring.id}
							</li>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}
