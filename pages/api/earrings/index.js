import { earrings } from "../../../public/data/earringsList";

export default function handler(req, res) {
	res.status(200).json(earrings);
}
