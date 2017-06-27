<template>

	<transition name="page-slide" mode="out-in" appear>

	<div class="index wrapper" key="index">

		<div class="container view">

			<h1 class="title">dprod-vue-webpack</h1>

			<button class="button is-primary" @click="toggle()">

				<icon v-if="this.active" name="check"></icon>&nbsp;
				<span v-if="this.active">ON</span>

				<icon v-if="!this.active" name="close"></icon>&nbsp;
				<span v-if="!this.active">OFF</span>

			</button>
			
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
		return {
			active: false,
		}
	},
	computed: {
	},
	methods: {
		toggle() {
			this.active = !this.active
		},
	}
}
</script>

<style lang="scss" scoped>

</style>
