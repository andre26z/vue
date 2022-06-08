<template>
	<section>
		<base-card>
			<template v-slot: header>
				<!--v-slot:header está recebendo o conteúdo do meu BaseCard, dentro deste base card eu possuo um slot para o header, então eu apliquei neste componente -->
				<h3>{{ fullName }}</h3>
				<base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
			</template>
			<p>{{ infoText }}</p>
		</base-card>
	</section>
</template>

<script>
	export default {
		props: ["fullName", "infoText", "role"],
	};
</script>
