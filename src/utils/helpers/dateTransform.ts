export const dateTransform = (rowDate: string | Date) => {
	const slicedDate = rowDate.toString().slice(0, 19)
	const [splitedDate, splitedTime] = slicedDate.split('T')
	const formatedDate = splitedDate.split('-').reverse().join('/')
	return [formatedDate, splitedTime]
}
