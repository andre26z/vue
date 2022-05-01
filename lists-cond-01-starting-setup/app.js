const app = Vue.createApp({
	data() {
		return {
			golvalue: "",
			goals: [],
		};
	},
	methods: {
		addgol() {
			this.goals.push(this.golvalue);
		},
		removegol(idx) {
			this.goals.splice(idx, 1); // a função splice remove ou adiciona elementos ao array, neste caso ele removera o 1 do meu array toda vez que eu chamar a função -- ESSA FUNÇÃO SERÁ CHAMADA COM UM CLICK conforme colocado no meu HTML @click="removegol(index)"
		},
	},
});

app.mount("#user-goals");
