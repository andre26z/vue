<template>
	<dialog open>
		<slot> </slot>
	</dialog>
</template>

<style scoped>
	dialog {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		width: 30%;
		height: 30%;
	}
</style>
