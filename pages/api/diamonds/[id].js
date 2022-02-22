import { diamonds } from "../../../public/data/diamondsList";

export default function diamondHandler({ query: { id } }, res) {
	const filtered = diamonds.filter((d) => d.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res
			.status(404)
			.json({ message: `The diamond with id: ${id} was not found` });
	}
}
