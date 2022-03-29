const app = Vue.createApp({
	data() {
		return {
			name: "andre",
			age: 29,
			img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		};
	},
	computed: {
		ageinfive() {
			return this.age + 5;
		},
	},

	methods: {
		random() {
			return Math.round(Math.random());
		},
	},
});

app.mount("#assignment"); // esse selector é o msm que usamos no css, então podemos até usar classes, .assignment caso fosse classe por exemplo.
