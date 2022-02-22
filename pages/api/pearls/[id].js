import { pearls } from "../../../public/data/pearlsList";

export default function pearlHandler({ query: { id } }, res) {
	const filtered = pearls.filter((p) => p.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res
			.status(404)
			.json({ message: `The pearl with id: ${id} was not found` });
	}
}
