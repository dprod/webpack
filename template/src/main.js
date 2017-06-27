// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
sync(store, router)

import Bulma from 'bulma'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: { App },
	created() {
		// console.log(`main.js created`)
	},
	mounted() {
		// console.log(`main.js mounted`)
		setTimeout(() => {
			this.$store.dispatch('init')
		}, 0)
	},
})
