function getrandomvalue(min, max) {
	return Math.floor(Math.random() * (12 - 5)) + 5;
}

const app = Vue.createApp({
	data() {
		return {
			monsterhealth: 100,
			playerhealth: 100,
			currentround: 0,
		};
	},
	computed: {
		playerhealthbar() {
			return { width: this.playerhealth + "%" };
		}, // fiz o playerhealth de forma computed e o monsterhealth de forma inline pra treinar das duas formas
		enableespecial() {
			return this.currentround % 3 !== 0; // se o round atual for não for divisível por 3 (3, 6, 9, 12 e etc) não pode usar especial, caso o round atual seja divísivel por 3 pode usar especial
		},
	},

	methods: {
		playeratack() {
			this.currentround++;
			const atackValue = getrandomvalue(5, 12);
			this.monsterhealth -= atackValue;
			this.monsteratack(); // esse meu this está chamando outro método, coisa nova, além de puxar a data também podemos puxar outro método como se fosse outra função (na vdd é uma outra função)
		},
		monsteratack() {
			const atackValue = getrandomvalue(8, 15);
			this.playerhealth -= atackValue;
		},
		especial() {
			this.currentround++;
			const atackValue = getrandomvalue(10, 20);
			this.monsterhealth -= atackValue;
			this.monsteratack();
		},
		heal() {
			this.currentround++;
			const heal = 12;
			this.playerhealth += heal;
			if (this.playerhealth + heal > 100) {
				this.playerhealth = 100;
			}
			this.monsteratack();
		},
		surrender() {
			this.playerhealth = 0;
		},
	},
});

app.mount("#game");
