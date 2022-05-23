const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: "manuel",
					name: "Manuel Lorenz",
					phone: "42 998036202",
					email: "andre26z@hotmail.com",
					adress: "rio das mortes",
				},
				{
					id: "juares",
					name: "Juares Lorenz",
					phone: "42 99805489",
					email: "juarez@hotmail.com",
					adress: "Via velha",
				},
			],
		};
	},
});
app.component("friend-contact", {
	template: `
     <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggledetails">Show Details</button>
        <ul v-if="detailsarevisible">
          <li><strong>Phone:</strong> {{friend.phone}}</li>
          <li><strong>Email:</strong> {{friend.email}}</li>
          <li><strong>Adress:</strong> {{friend.adress}}</li>
        </ul>
      </li>
    `,
	data() {
		return {
			friend: {
				id: "manuel",
				name: "Manuel Lorenz",
				phone: "42 998036202",
				email: "andre26z@hotmail.com",
				adress: "rio das mortes",
			},
			// friend: {
			// 	id: "juares",
			// 	name: "Juares Lorenz",
			// 	phone: "42 99805489",
			// 	email: "juarez@hotmail.com",
			// 	adress: "Via velha",
			// },

			detailsarevisible: false,
		};
	},
	methods: {
		toggledetails() {
			this.detailsarevisible = !this.detailsarevisible;
		},
	},
}); //o componente sempre deve ser identificado com um nome traço alguma coisa, como é o exemplo friend-contact - o parâmetro do componente não pode ter uma tag HTML se não da clash e pode dar ruim - componentes são como mini apps que serão conectados no main app
app.mount("#app");
