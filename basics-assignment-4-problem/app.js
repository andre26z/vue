const app = Vue.createApp({
	data() {
		return {
			estilo: "",
			show: true,
			bgcolor: ''
		};
	},
	watch: {
		estilo() {
			console.log(this.estilo);
		},
	},

	computed: {
		mostrar() {
			return { 
                visible: this.show,
                // minha função vai trocar o estilo do meu input que possui o :class = "mostrar", ao clicar eu puxo a função showbutton() que basicamente muda o show de true pra false -- nesse caso o visible:this.show quer dizer que o meu visible é true
             };
		},
	},
	methods: {
		showbutton() {
			this.show = !this.show;
		},
	},
});

app.mount("#assignment");
