import { necklaces } from "../../../public/data/necklacesList";

export default function handler(req, res) {
	res.status(200).json(necklaces);
}
