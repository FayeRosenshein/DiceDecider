export const fetchClasses= () => {
  return fetch('https://www.dnd5eapi.co/api/classes')
	.then(response => {
		if (response.ok) {
			const data = response.json()
			console.log(data)
			return data;
		} else {
			throw new Error(response.text)
		}
	})
}
export const fetchSkills= () => {
  return fetch('https://www.dnd5eapi.co/api/skills')
	.then(response => {
		if (response.ok) {
			const data = response.json()
			console.log(data)
			return data;
		} else {
			throw new Error(response.text)
		}
	})
}
export const fetchClassDetails = (singleClass) => {
  return fetch(`https://www.dnd5eapi.co/api/classes/${singleClass}`)
	.then(response => {
		if (response.ok) {
			const data = response.json()
			console.log(data)
			return data;
		} else {
			throw new Error(response.text)
		}
	})
}

// export default {fetchClasses, fetchClassDetails}