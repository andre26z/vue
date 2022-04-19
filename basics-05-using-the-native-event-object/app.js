const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			lastname: "",
		};
	},

	// watch: {
	// 	name(value) {
	// 		if (value === "") {
	// 			return (fullname = "");
	// 		} else this.fullname = value + "" + "Santos";
	// 	},
	// },
	computed: {
		fullname() {
			console.log("running again...");
			if (this.name === "") {
				return "";
			}
			return this.name + "" + this.lastname;
		},
	},

	methods: {
		setName(event, lastName) {
			this.name = event.target.value + " " + lastName;
		},
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
			// this.counter--;
		},
	},
});

app.mount("#events");
