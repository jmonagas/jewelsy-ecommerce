import { pearls } from "../../../public/data/pearlsList";

export default function handler(req, res) {
	res.status(200).json(pearls);
}
