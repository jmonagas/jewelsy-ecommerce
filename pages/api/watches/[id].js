import { watches } from "../../../public/data/watchesList";

export default function watchHandler({ query: { id } }, res) {
	const filtered = watches.filter((w) => w.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res
			.status(404)
			.json({ message: `The watch with id: ${id} was not found` });
	}
}
