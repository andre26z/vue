const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			finish: "",
		};
	},

	methods: {
		add(num) {
			this.counter = this.counter + num;
		},
		addless(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
		},
	},

	watch: {
		counter(value) {
			if (value < 37) {
				this.finish = "no";
			} else if (value >= 38) {
				this.finish = "wait, too much";
			} else {
				this.finish = "ok";
			}
		},
		finish() {
			console.log("executando");
			const that = this;
			setTimeout(function () {
				that.counter = 0;
			}, 5000);
		},
	},
});

app.mount("#assignment");
