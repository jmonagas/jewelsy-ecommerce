import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Banner from "../components/Banner";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<nav className={styles.container}>
				<div className={styles.brand}>
					<Link passHref href="/">
						<a title="Back To Homepage">Jewelsy&reg;</a>
					</Link>
				</div>
				<div className={styles.menu}>
					<Link passHref href="/">
						<a title="Display Menu Bar">
							<Image
								className={styles.menuIcon}
								src={"/img/menu_icon.png"}
								width={30}
								height={30}
								alt="Display Menu Bar"
								title="Display Menu Bar"
								onClick={() => setOpen(!open)}
							/>
						</a>
					</Link>
				</div>
				<div className={styles.hamburgerMenu}>
					<ul
						onClick={() => setOpen(false)}
						className={styles.hamburgerList}
						style={{ left: open ? "0px" : "-300vw" }}
					>
						<li className={styles.hamburgerItem}>
							<Link href="/">
								<a title="Home">Home</a>
							</Link>
						</li>
						<li className={styles.hamburgerItem}>
							<Link href="/bracelets">
								<a title="Bracelets">Bracelets</a>
							</Link>
						</li>
						<li className={styles.hamburgerItem}>
							<Link href="/cufflinks">
								<a title="Cufflinks">Cufflinks</a>
							</Link>
						</li>
						<li className={styles.hamburgerItem}>
							<Link href="/diamonds">
								<a title="Diamonds">Diamonds</a>
							</Link>
						</li>
						<li className={styles.hamburgerItem}>
							<Link href="/earrings">
								<a title="Earrings">Earrings</a>
							</Link>
						</li>
						<li className={styles.hamburgerItem}>
							<Link href="/necklaces">
								<a title="Necklaces">Necklaces</a>
							</Link>
						</li>
						<li className={styles.hamburgerItem}>
							<Link href="/pearls">
								<a title="Pearls">Pearls</a>
							</Link>
						</li>
						<li className={styles.hamburgerItem}>
							<Link href="/pendants">
								<a title="Pendants">Pendants</a>
							</Link>
						</li>
						<li className={styles.hamburgerItem}>
							<Link href="/rings">
								<a title="Rings">Rings</a>
							</Link>
						</li>
						<li className={styles.hamburgerItem}>
							<Link href="/watches">
								<a title="Watches">Watches</a>
							</Link>
						</li>
						<li className={styles.hamburgerItem}>
							<Link href="/contact">
								<a title="Contact">Contact</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<Banner />
		</>
	);
};

export default Navbar;
