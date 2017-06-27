import api from '../api'

export default {

	init(store) {

		api
			.get('/static/placeholder.json')
			.then((response) => {

				store.commit('SET_PAGES', response)
				store.commit('INIT', true)

			})
			.catch((err) => {
				console.log(`API ${err}`)
			})

	},

}