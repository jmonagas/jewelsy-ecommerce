import styles from "../styles/productGrid.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Diamonds({ diamond }) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.flexGrid}>
					<Link passHref href="/diamonds/[id]" as={`/diamonds/${diamond.id}`}>
						<a title="Janusz Jewelsy Collections">
							<li className={styles.li}>
								<Image
									src={`${diamond.photo}`}
									width="350px"
									height="225px"
									objectFit="cover"
									alt="Janusz Jewelsy Collections"
									title="Janusz Jewelsy Collections"
								/>
								{diamond.name}&nbsp;{diamond.id}
							</li>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}
