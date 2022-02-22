import { pendants } from "../../../public/data/pendantsList";

export default function pendantHandler({ query: { id } }, res) {
	const filtered = pendants.filter((p) => p.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res
			.status(404)
			.json({ message: `The pendant with id: ${id} was not found` });
	}
}
