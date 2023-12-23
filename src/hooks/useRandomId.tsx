
const generateRandomString = () => {
	const random = Math.random().toString().slice(2) + Math.random().toString().slice(2);
	const initialIndex = Math.floor(random.length / 2) - 12
	const finalIndex = initialIndex + 12;
	const slicedString = random.slice(initialIndex, finalIndex)
	const id = Number(slicedString).toString(36);
	return id;
}


export const useRandomId = () => {
	const randomString =
		generateRandomString()
		+ generateRandomString()
		+ generateRandomString()
		+ generateRandomString()
		;
	return randomString.slice(1, 25);
};
