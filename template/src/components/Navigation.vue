<template>

	<div class="navigation wrapper">

		<div class="container">
		
			<nav>
					
				<router-link to='/'>INDEX</router-link>
				<router-link 
					:to="/pages/+page.slug"
					:key="page.id"
					v-for="page in $store.state.pages">
						{{page.name}}
				</router-link>
					
			</nav>

		</div>

	</div>

</template>

<script>
export default {
	name: 'navigation',
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

$variable: 1;

////////////////////////////////////////////////////////////////////////////////
// LAYOUT

.navigation {

	display: flex;
	align-items: center;

	background: #4a4a4a;

	position: fixed;
	 top: 0;
	 left: 0;

	width: 100%;
	height: $navigationHeight;

	z-index: 10000;

}

a:hover, a.router-link-exact-active {
	color: white;
}

////////////////////////////////////////////////////////////////////////////////
// TRANSITIONS


</style>
