import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

export const getItems = async (endpoint) => {
	const response = await axios.get(endpoint)
  console.log(response)
	return response
}

// export default {
// 	getGenres,
// }
