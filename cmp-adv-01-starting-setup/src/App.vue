<template>
	<div>
		<the-header></the-header>
		<!-- The header component importado em escopo global no meu script -->
		<badge-list></badge-list>
		<user-info
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		></user-info>
	</div>
</template>

<script>
	import TheHeader from "./components/TheHeader.vue";
	import BadgeList from "./components/BadgeList.vue";
	import UserInfo from "./components/UserInfo.vue";
	export default {
		// componente theHeaderVue foi importado apenas dentro do meu app.vue, está escopado e indisponível para outros componentes, precisamos dar import, e informa components: { nosso componente }
		components: {
			TheHeader,
			BadgeList,
			UserInfo, // veja que no meu template está the-header, o javascript moderno da suporte à isso sem que precise que eu converta o nome do componente, o javascript converte sozinho
		},
		data() {
			return {
				activeUser: {
					name: "Maximilian Schwarzmüller",
					description: "Site owner and admin",
					role: "admin",
				},
			};
		},
	};
</script>

<style>
	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
  
</style>
