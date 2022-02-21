import { bracelets } from "../../../public/data/braceletsList";

export default function braceletHandler({ query: { id } }, res) {
	const filtered = bracelets.filter((b) => b.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res
			.status(404)
			.json({ message: `The bracelet with id: ${id} was not found` });
	}
}
