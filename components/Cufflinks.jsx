import styles from "../styles/productGrid.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Cufflinks({ cufflink }) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.flexGrid}>
					<Link
						passHref
						href="/cufflinks/[id]"
						as={`/cufflinks/${cufflink.id}`}
					>
						<a title="Janusz Jewelsy Collections">
							<li className={styles.li}>
								<Image
									src={`${cufflink.photo}`}
									width="350px"
									height="225px"
									objectFit="cover"
									alt="Janusz Jewelsy Collections"
									title="Janusz Jewelsy Collections"
								/>
								{cufflink.name}&nbsp;{cufflink.id}
							</li>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}
