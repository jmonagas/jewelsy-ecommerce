import { pendants } from "../../../public/data/pendantsList";

export default function handler(req, res) {
	res.status(200).json(pendants);
}
