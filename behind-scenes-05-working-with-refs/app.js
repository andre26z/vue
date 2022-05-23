const app = Vue.createApp({
	data() {
		return {
			currentUserInput: "",
			message: "Vue is great!",
		};
	},

	methods: {
		saveInput(event) {
			this.currentUserInput = event.target.value;
		},
		setText() {
			// this.message = this.currentUserInput;
			this.message = this.$refs.userText.value; // o ref funciona quase como um v-model só que ele só da store no elemento quando é clicado e não a cada keystroke igual é o v-model, usar v-model nesse caso seria overkill pq só quero que seja mostrado a minha mensagem ao meu click
			// console.dir(this.$refs.userText);
		},
	},
	beforeCreate() {
		console.log("beforeCreate()");
	},
	created() {
		console.log("created()");
	},
	beforeMount() {
		console.log("beforeMount()");
	},
	mounted() {
		console.log("mounted()");
	},
});

app.mount("#app");

const app2 = Vue.createApp({
	template: `
    <p>{{ favoriteMeal }}</p>
  `, //bracket invertida
	data() {
		return {
			favoriteMeal: "Pizza",
		};
	},
});

app2.mount("#app2");

// ....

const data = {
	message: "Hello!",
	longMessage: "Hello! World!",
};

const handler = {
	set(target, key, value) {
		if (key === "message") {
			target.longMessage = value + " World!";
		}
		target.message = value;
	},
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!!";

console.log(proxy.longMessage);
