<template>

	<transition name="fade">

	<div class="page-404 wrapper">

		<div class="container">

			<h1 class="title">404 NOT FOUND</h1>

			<router-link to='/'>INDEX</router-link>

		</div>

	</div>

	</transition>

</template>

<script>
export default {
	name: 'page404',
	components: { },
	created() { },
	mounted() { },
	data() { 
		return { }
	},
	computed: { },
	methods: { }
}
</script>

<style lang="scss" scoped>

</style>
