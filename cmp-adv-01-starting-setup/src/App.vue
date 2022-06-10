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
		<course-goals>
			<template #default="slotProps">
				<h2>{{ slotProps.item }}</h2>
				<!-- slotProps.item é o valor do item que está sendo passado para o slot, este valor está no meu componente courseGoals, o qual eu defini que :item="goal" -->
				<p>{{ slotProps["another-prop"] }}</p>
			</template>
		</course-goals>
	</div>
</template>

<script>
	import TheHeader from "./components/TheHeader.vue";
	import BadgeList from "./components/BadgeList.vue";
	import UserInfo from "./components/UserInfo.vue";
	import CourseGoals from "./components/CourseGoals.vue";

	export default {
		// componente theHeaderVue foi importado apenas dentro do meu app.vue, está escopado e indisponível para outros componentes, precisamos dar import, e informa components: { nosso componente }
		components: {
			TheHeader, // veja que no meu template está the-header, o javascript moderno da suporte à isso sem que precise que eu converta o nome do componente, o javascript converte sozinho
			BadgeList,
			UserInfo,
			CourseGoals,
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
