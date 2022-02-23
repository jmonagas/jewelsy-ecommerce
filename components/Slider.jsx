import styles from "../styles/Slider.module.css";
import Image from "next/image";
import { useState } from "react";
import productSlider from "../public/data/slides";

const Slider = () => {
	const [index, setIndex] = useState(0);
	const handleArrow = (direction) => {
		if (direction == "left") {
			setIndex(index !== 0 ? index - 1 : 97);
		}
		if (direction == "right") {
			setIndex(index !== 97 ? index + 1 : 0);
		}
	};
	return (
		<>
			<div className={styles.container}>
				<div
					className={styles.wrapper}
					style={{ transform: `translateX(${-327 * index}px)` }}
				>
					{productSlider.map((img, index) => (
						<div className={styles.imgContainer} key={index}>
							<Image
								className={styles.imgItem}
								src={process.env.NEXT_PUBLIC_URL + img}
								alt="Janusz Jewelsy Collections"
								title="Janusz Jewelsy Collections"
								width={327}
								height={217}
								objectFit="cover"
							/>
						</div>
					))}
				</div>
			</div>
			<div className={styles.arrowContainer}>
				<span className={styles.arrowLeft} onClick={() => handleArrow("left")}>
					<Image
						src={process.env.NEXT_PUBLIC_URL + "/img/arrow_left.jpg"}
						width={22}
						height={22}
						alt="Move Left"
						title="Move Left"
					/>
				</span>
				<span
					className={styles.arrowRight}
					onClick={() => handleArrow("right")}
				>
					<Image
						src={process.env.NEXT_PUBLIC_URL + "/img/arrow_right.jpg"}
						width={20}
						height={20}
						alt="Move Right"
						title="Move Right"
					/>
				</span>
			</div>
		</>
	);
};

export default Slider;
