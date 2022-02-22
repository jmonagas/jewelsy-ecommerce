import { necklaces } from "../../../public/data/necklacesList";

export default function necklaceHandler({ query: { id } }, res) {
	const filtered = necklaces.filter((n) => n.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res
			.status(404)
			.json({ message: `The necklace with id: ${id} was not found` });
	}
}
