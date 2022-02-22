import { rings } from "../../../public/data/ringsList";

export default function ringHandler({ query: { id } }, res) {
	const filtered = rings.filter((b) => b.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res
			.status(404)
			.json({ message: `The ring with id: ${id} was not found` });
	}
}
