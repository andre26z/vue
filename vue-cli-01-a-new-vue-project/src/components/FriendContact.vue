<template>
	<li>
		<h2>{{ name }} {{ isFavorite ? "(favorito)" : "" }}</h2>
		<!--Só name porque os meus props já definiram, estou recebendo do template do meu App.vue o que foi colocado dentro do meu friend contact - PRESTAR ATENÇÃO QUE, NO TEMPLATE FOI ESCRITO DIFERENTE MAS NA HORA DE RECEBER ELE CONVERTE - ex: phone-number recebe como props phoneNumber-->
		<button @click="toggleFavorite()">Toggle Favorite</button>
		<button @click="toggleDetails()">
			{{ DetailsAreVisible ? "Hide" : "Show" }} Details
		</button>
		<ul v-if="DetailsAreVisible">
			<li><strong> Phone: </strong> {{ phoneNumber }}</li>
			<li><strong> Name: </strong> {{ name }}</li>
			<li><strong> E-mail: </strong> {{ emailAddress }}</li>
		</ul>
		<button @click="$emit('delete', id)">Delete</button>
	</li>
	
</template>

<script>
	export default {
		// props: ["name", "phoneNumber", "emailAddress", "isFavorite"], // escrever os promes sempre entre aspas e NUNCA com traço, caso seja feito com traço (phone-number) vai da merda no javascript - mas no HTML ou dentro do template é melhor fazer com traço
		props: {
			id: {
				type: String,
				required: true,
			},
			name: {
				type: String, // typos suportados String, Number, Boolean, Function, Object, Array.
				required: true,
			}, // required é necessário quando nós precisamos nos assegurar que a form deve ser preenchido antes do seu envio - caso não seja preenchido, ele não envia o form.

			phoneNumber: {
				type: String,
				required: true,
			},

			emailAddress: {
				type: String,
				required: true,
			},
			isFavorite: {
				type: Boolean,
				required: false, //false, não é necessário para o andamento normal da nossa aplicação
				default: false, //default é o valor padrão que será usado caso não seja passado nenhum valor para o isFavorite
				// validator: function (value) {
				// 	return value === "0" || value === "1"; //validator é uma função que recebe um valor e retorna true ou false - nesse caso se retornar 1 ou 0 vai ser validade, caso o isFavorite volte outro número, ele não vai ser validado
			},
		},

		emits: ["toggle-favorite", "delete"], // emits servem para deixar mais fácil para os outros programadores ou até para nós mesmos demonstrando todos os emits que o nosso código está fazendo

		// emits: {
		// 	'toggle-favorite': function (id) {
		// 		if (id) {return true;} else {
		// 			console.warn('id is missing!');
		// 			return false
		// 		}
		// 	}, // esse é outro exemplo para deixar claro sobre a emissão de função, neste caso se o meu toggle favorite estiver faltando o id o meu código vai informar.
		// },

		data() {
			return {
				DetailsAreVisible: false,
			};
		},
		methods: {
			toggleDetails() {
				this.DetailsAreVisible = !this.DetailsAreVisible;
			},
			toggleFavorite() {
				this.$emit("toggle-favorite", this.id); //emit é um evento que é disparado pelo componente pai, e o toggle-favorite é o evento que o componente filho vai emitir para o componente pai
				//this.id é o parâmetro que o componente pai vai receber
			},
		},
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
	* {
		box-sizing: border-box;
	}

	html {
		font-family: "Jost", sans-serif;
	}

	body {
		margin: 0;
	}

	header {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 3rem auto;
		border-radius: 10px;
		padding: 1rem;
		background-color: #58004d;
		color: white;
		text-align: center;
		width: 90%;
		max-width: 40rem;
	}

	#app ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	#app li,
	#app form {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 1rem auto;
		border-radius: 10px;
		padding: 1rem;
		text-align: center;
		width: 90%;
		max-width: 40rem;
	}

	#app h2 {
		font-size: 2rem;
		border-bottom: 4px solid rgb(204, 204, 204);
		color: #58004d;
		margin: 0 0 1rem 0;
	}

	#app button {
		font: inherit;
		cursor: pointer;
		border: 1px solid #ff0077;
		background-color: #ff0077;
		color: white;
		padding: 0.05rem 1rem;
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
	}

	#app button:hover,
	#app button:active {
		background-color: #ec3169;
		border-color: #ec3169;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
	}
	#app input {
		font: inherit;
		padding: 0.15rem;
	}
	#app label {
		font-weight: bold;
		margin-right: 1rem;
		width: 7rem;
		display: inline-block;
	}
	#app form div {
		margin: 1rem 0;
	}
</style>
