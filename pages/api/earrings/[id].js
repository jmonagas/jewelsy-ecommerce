import { earrings } from "../../../public/data/earringsList";

export default function earringHandler({ query: { id } }, res) {
	const filtered = earrings.filter((e) => e.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res
			.status(404)
			.json({ message: `The earring with id: ${id} was not found` });
	}
}
