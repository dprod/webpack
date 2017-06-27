<template>
	
	<transition name="page-slide">

	<div class="page wrapper" v-bind:class="page.slug" :key="page.slug">

		<div class="container view">

			<h1 class="title">{{page.name || 'Page'}}</h1>
			
			<p>{{page.text || 'Lorem ipsum.'}}</p>

		</div>

	</div>

	</transition>

</template>

<script>
export default {
	name: 'page',
	components: { },
	created() { },
	mounted() { },
	data() {
		return { }
	},
	computed: {
		page() {
			return this.$store.getters.page
		},
	},
	methods: { }
}
</script>

<style lang="scss" scoped>

</style>
