<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
    <router-view name="menu" />
		<transition mode="out-in" enter-active-class="animated rubberBand" leave-active-class="animated rollOut">
    	<router-view />
		</transition>
	</div>
</template>

<script>
import Menu from './components/template/Menu.vue';

export default {
	// components: { Menu },
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
