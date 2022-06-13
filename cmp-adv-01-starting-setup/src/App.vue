<template>
	<div>
		<the-header></the-header>
		<button @click="setSelectedComponent('active-goals')">Active Goals</button>
		<button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
		<!--o Keep Alive serve para que quando nós mudamos de componente o conteúdo não seja perdido na transição, neste caso manage goals tem um input, o que eu escrever no input não vai ser perdido quando eu trocar de componente com o clique-->
		<keep-alive> 
			<component :is="selectedComponent"> </component>
		</keep-alive>
		<!-- ciclando entre dois componentes com o clique de um botão -->

		<!-- The header component importado em escopo global no meu script -->
		<!-- <badge-list></badge-list>
		<user-info
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		></user-info>
		<course-goals #default="slotProps"> -->
		<!-- caso eu tenha apenas um slot, eu não preciso usar o wrapper template e denominar e usar a tag do meu componente direto-->
		<!-- <h2>{{ slotProps.item }}</h2> -->
		<!-- slotProps.item é o valor do item que está sendo passado para o slot, este valor está no meu componente courseGoals, o qual eu defini que :item="goal" -->
		<!-- <p>{{ slotProps["another-prop"] }}</p>
		</course-goals> -->
	</div>
</template>

<script>
	import TheHeader from "./components/TheHeader.vue";
	// import BadgeList from "./components/BadgeList.vue";
	// import UserInfo from "./components/UserInfo.vue";
	// import CourseGoals from "./components/CourseGoals.vue";
	import ActiveGoals from "./components/ActiveGoals.vue";
	import ManageGoals from "./components/ManageGoals.vue";

	export default {
		// componente theHeaderVue foi importado apenas dentro do meu app.vue, está escopado e indisponível para outros componentes, precisamos dar import, e informa components: { nosso componente }
		components: {
			TheHeader, // veja que no meu template está the-header, o javascript moderno da suporte à isso sem que precise que eu converta o nome do componente, o javascript converte sozinho
			// BadgeList,
			// UserInfo,
			// CourseGoals,
			ActiveGoals,
			ManageGoals,
		},
		data() {
			return {
				selectedComponent: "active-goals",
				activeUser: {
					name: "Maximilian Schwarzmüller",
					description: "Site owner and admin",
					role: "admin",
				},
			};
		},
		methods: {
			setSelectedComponent(cmp) {
				this.selectedComponent = cmp;
			},
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
