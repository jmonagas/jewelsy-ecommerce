import { rings } from "../../../public/data/ringsList";

export default function handler(req, res) {
	res.status(200).json(rings);
}
