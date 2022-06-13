<template>
	<div>
		<h2>Manage Goals</h2>
		<input type="text" ref="goal" />
		<button @click="setGoal">Submit</button>
        <!--teleport, determino onde o meu conteúdo vai ser incorporadom irá aparecer no console-->
		<teleport to="body">
			<error-alert v-if="inputIsInvalid">
				<h2>Input is Invalid</h2>
				<p>enter at leats a few characters</p>
				<button @click="confirmError">Ok</button>
			</error-alert>
		</teleport>
	</div>
</template>

<script>
	import ErrorAlert from "./ErrorAlert.vue";
	export default {
		components: {
			ErrorAlert,
		},
		data() {
			return {
				inputIsInvalid: false,
			};
		},
		methods: {
			setGoal() {
				const enteredValue = this.$refs.goal.value;
				if (enteredValue === "") {
					this.inputIsInvalid = true;
				}
			},
			confirmError() {
				this.inputIsInvalid = false;
			},
		},
	};
</script>
