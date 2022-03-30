const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			confirmedName: "",
		};
	},
	methods: {
		confirmInput() {
			this.confirmedName = this.name;
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
