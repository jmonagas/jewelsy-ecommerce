import { cufflinks } from "../../../public/data/cufflinksList";

export default function handler(req, res) {
	res.status(200).json(cufflinks);
}
