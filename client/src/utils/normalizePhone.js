const normalizePhone = value => {
	if (!value) {
		return value
	}

	const onlyNums = value.replace(/[^\d]/g, '')
	if (onlyNums.length <= 2) {
		return onlyNums
	}
	if (onlyNums.length <= 5) {
		return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3,6)}`
	}
	if (onlyNums.length <= 11) {
		return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3,6)} ${onlyNums.slice(6,8)} ${onlyNums.slice(8,10)}`
	}
	return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3,6)} ${onlyNums.slice(6,8)} ${onlyNums.slice(8,10)}`
}

export default normalizePhone