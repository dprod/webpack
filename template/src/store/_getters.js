import store from './'

export default {

	init: state => {
		return state.init
	},

	page: state => {

		// #TODO: TEMP
		if(!state.route)
			return false

		const slug = state.route.params.slug

		let page = store.state.pages.find(function(page) {
			return page.slug == slug
		})

		if(!page)
			page = ''

		document.title = page.name || ''

		return page

	},

}