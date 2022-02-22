import styles from "../styles/productGrid.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Necklaces({ necklace }) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.flexGrid}>
					<Link
						passHref
						href="/necklaces/[id]"
						as={`/necklaces/${necklace.id}`}
					>
						<a title="Janusz Jewelsy Collections">
							<li className={styles.li}>
								<Image
									src={`${necklace.photo}`}
									width="350px"
									height="225px"
									objectFit="cover"
									alt="Janusz Jewelsy Collections"
									title="Janusz Jewelsy Collections"
								/>
								{necklace.name}&nbsp;{necklace.id}
							</li>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}
