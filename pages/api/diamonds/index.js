import { diamonds } from "../../../public/data/diamondsList";

export default function handler(req, res) {
	res.status(200).json(diamonds);
}
