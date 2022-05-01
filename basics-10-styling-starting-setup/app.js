const app = Vue.createApp({
	data() {
		return {
			boxAselected: false,
			boxBselected: false,
			boxCselected: false,
		};
	},

	computed: {
		boxAClasses() {
			return {active: this.boxAselected};
		},
	},
	methods: {
		boxSelected(box) {
			if (box === "A") {
				this.boxAselected = !this.boxAselected; // o !this.boxAselected deixa a linha toggeable, ao clicar ele aciona, ou clicar de novo ele aciona o contrário do primeiro ativo, que no caso é retornar ao status inicial.
			} else if (box === "B") {
				this.boxBselected = !this.boxBselected;
			} else if (box === "C") {
				this.boxCselected = !this.boxCselected;
			}
		},
	},
});

app.mount("#styling");
