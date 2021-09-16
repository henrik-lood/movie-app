import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

export const getItems = async (endpoint) => {
	const response = await axios.get(endpoint)
	return response
}

//genreid och searchParams.page plockas ut ur det skickade objektet (variablesToSend) för att användas i vår get. Vi skickar strängen till getItems som vår endpoint, där vi gör vår fetch.
export const getMoviesByGenre = async ({genreid, searchParams}) => {
	return await getItems(`discover/movie?api_key=c7efba5c95f24621cee8bbe5a2936ad5&with_genres=${genreid}&page=${searchParams.page}`)
}