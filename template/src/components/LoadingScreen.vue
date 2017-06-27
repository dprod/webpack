<template>

	<transition name="fade">

	<div class="loading-screen wrapper" v-if="!$store.state.init">

		<div class="container">

			<h1 class="title">loading...</h1>

		</div>

	</div>

	</transition>

</template>

<script>
export default {
	name: 'index',
	components: { },
	created() { },
	mounted() { },
	data() {
		return { }
	},
	computed: {
	},
	methods: {
	}
}
</script>

<style lang="scss" scoped>

////////////////////////////////////////////////////////////////////////////////
// VARIABLES

////////////////////////////////////////////////////////////////////////////////
// LAYOUT

.loading-screen {

	background: #ccc;

	width: 100%;
	height: 100%;

	position: fixed;
		top: 0;
		left: 0;

	z-index: 10000000;

}

.title {
	
	position: fixed;
		top: 50%;
		left: 50%;

	transform: translate(-50%, -50%);

}

////////////////////////////////////////////////////////////////////////////////
// TRANSITIONS


</style>
