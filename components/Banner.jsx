import styles from "../styles/Banner.module.css";
import Image from "next/image";

const Banner = () => {
	return (
		<>
			<div className={styles.container}>
				<Image
					priority
					as="image"
					src={"/img/necklace4-min.jpg"}
					alt="Janusz Jewelsy Collections"
					title="Janusz Jewelsy Collections"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className={styles.branding}>
				<p className={styles.logo}>Janusz&trade;&nbsp;Jewelsy&reg;</p>
			</div>
		</>
	);
};

export default Banner;
