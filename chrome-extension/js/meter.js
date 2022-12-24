const bandMap = {
	'5/5': 'Very Low Risk',
	'4/5': 'Low Risk',
	'3/5': 'Medium Risk',
	'2/5': 'High Risk',
	'1/5': 'Significant Risk'
}

const method = 'POST'
const host = 'https://avengerdao.org'
const uri = '/api/v1/address-security'
const url = host + uri

async function postData(address) {
	const body = JSON.stringify({
		address: address
	})

	const response = await fetch(url, {
		method: method,
		headers: {
			'Content-Type': 'application/json;charset=UTF-8'
		},
		body: body
	})
	return response.json()
}

async function getRisk(address) {
	const numericRisk = await postData(address)
		.then(data => data?.data?.band)
		.catch(err => console.log(err))

	const risk = bandMap[numericRisk]

	return risk
}

export { getRisk }
