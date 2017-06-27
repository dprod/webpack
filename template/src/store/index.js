import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './_state'
import mutations from './_mutations'
import actions from './_actions'
import getters from './_getters'

const store = new Vuex.Store({

	state,
	mutations,
	actions,
	getters,

})

store.subscribe((mutation, state) => {
	
	console.log(`%c-- MUTATION -- %c${mutation.type}`, `color: red; font-weight: bold`, `color: black; font-weight: bold`)
	console.log(mutation.payload)
	console.log(`%c--------------`, `color: red; font-weight: bold`)

})

export default store
