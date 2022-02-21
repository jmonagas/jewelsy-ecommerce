import { bracelets } from "../../../public/data/braceletsList";

export default function handler(req, res) {
	res.status(200).json(bracelets);
}
