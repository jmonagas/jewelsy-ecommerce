import styles from "../styles/productGrid.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Pendants({ pendant }) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.flexGrid}>
					<Link passHref href="/pendants/[id]" as={`/pendants/${pendant.id}`}>
						<a title="Janusz Jewelsy Collections">
							<li className={styles.li}>
								<Image
									src={`${pendant.photo}`}
									width="350px"
									height="225px"
									objectFit="cover"
									alt="Janusz Jewelsy Collections"
									title="Janusz Jewelsy Collections"
								/>
								{pendant.name}&nbsp;{pendant.id}
							</li>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}
