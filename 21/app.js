const app = Vue.createApp({
	data() {
		return {
			counter: 10,
			name: "",
			confirmedName: "",
		};
	},

	computed: {
		fullname() {
			console.log("Running Again...");
			if (this.name === "") {
				return "";
			}
			return this.name + "" + "Santos";
		},
	},
	methods: {
		confirmInput() {
			this.confirmedName = this.name;
		},
		reset() {
			return (this.name = ""), (this.confirmedName = "");
		},
		add(num) {
			//esse num eu coloco no html e controlo por lá
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
		},
		setName(event) {
			this.name = event.target.value;
		},
		submitForm() {
			alert("submited");
		},
	},
});

app.mount("#events");
