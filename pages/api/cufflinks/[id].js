import { cufflinks } from "../../../public/data/cufflinksList";

export default function cufflinkHandler({ query: { id } }, res) {
	const filtered = cufflinks.filter((c) => c.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res
			.status(404)
			.json({ message: `The cufflink with id: ${id} was not found` });
	}
}
