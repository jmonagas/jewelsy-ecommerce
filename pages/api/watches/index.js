import { watches } from "../../../public/data/watchesList";

export default function handler(req, res) {
	res.status(200).json(watches);
}
