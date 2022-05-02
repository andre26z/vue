const app = Vue.createApp({
	data() {
		return {
			task: "",
			tasklist: [],
			remove: true,
		};
	},
	methods: {
		addtask() {
			this.tasklist.push(this.task);
		},
		removetask() {
			return this.remove = !this.remove;
		},
	},
});

app.mount("#assignment");
