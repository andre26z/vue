<template>
	<div>
		<header>
			<slot name="header"> </slot>
			<!-- slot é um elemento usado para que nosso componente possa receber um conteúdo dentro dele, estou transformando este template em um wrap, neste caso, o posso usar o base-card como wrapper de outros elementos para que estes elementos recebam as configurações deste componente -->
		</header>
		<slot> </slot>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	div {
		margin: 2rem auto;
		max-width: 30rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
	}
</style>
