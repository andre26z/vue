<template>
	<form @submit.prevent="submitData"> <!--@submit.prevent serve para prevenir que meu navegador atualize quando eu dar submit no meu form - esse meu componente cria um novo card de contatos com os dados que eu inclui-->
		<div>
			<label for="">Name</label>
			<input type="text" v-model="enteredName" />
		</div>
		<div>
			<label for="">Phone</label>
			<input type="tel" v-model="enteredPhone" />
		</div>
		<div>
			<label for="">E-mail</label>
			<input type="email" v-model="enteredEmail" />
		</div>
		<div>
			<button>Add Contact</button>
		</div>
	</form>
</template>

<script>
	export default {
		emits: ["add-contact"], // emit serve apenas para demonstração do que estou enviando os dados que inclui no meu form com o submitData 
		data() {
			return {
				enteredName: "",
				enteredPhone: "",
				enteredEmail: "",
			};
		},
		methods: {
			submitData() {
				this.$emit(
					"add-contact",
					this.enteredName,
					this.enteredPhone,
					this.enteredEmail
				);
			},
		},
	};
</script>
