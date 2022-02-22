import styles from "../styles/productGrid.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Pearls({ pearl }) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.flexGrid}>
					<Link passHref href="/pearls/[id]" as={`/pearls/${pearl.id}`}>
						<a title="Janusz Jewelsy Collections">
							<li className={styles.li}>
								<Image
									src={`${pearl.photo}`}
									width="350px"
									height="225px"
									objectFit="cover"
									alt="Janusz Jewelsy Collections"
									title="Janusz Jewelsy Collections"
								/>
								{pearl.name}&nbsp;{pearl.id}
							</li>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}
