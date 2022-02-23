import styles from "../styles/productGrid.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Watches({ watch }) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.flexGrid}>
					<Link passHref href="/watches/[id]" as={`/watches/${watch.id}`}>
						<a title="Janusz Jewelsy Collections">
							<li className={styles.li}>
								<Image
									src={process.env.NEXT_PUBLIC_URL + `${watch.photo}`}
									width="350px"
									height="225px"
									objectFit="cover"
									alt="Janusz Jewelsy Collections"
									title="Janusz Jewelsy Collections"
								/>
								{watch.name}&nbsp;{watch.id}
							</li>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}
