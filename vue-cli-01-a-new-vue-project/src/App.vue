<template>
	<section>
		<h2>Hello World - this is my family:</h2>
		<ul>
			<friend-contact
				v-for="friend in friends"
				:id="friend.id"
				:key="friend.id"
				:name="friend.name"
				:phone-number="friend.phone"
				:email-address="friend.email"
				:is-favorite="friend.isFavorite"
				@toggle-favorite="toggleFavoriteStatus"
			></friend-contact>
			<!--estamos emulando um HTML dentro deste friend-contact, então é melhor usarmos traço entre as palavras porque o html entende-->
			<!--Se eu tirar o name, phone-number, email-address vai dar um erro no console dizendo que está faltando um prop-->
		</ul>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				friends: [
					{
						id: "andre",
						name: "andre",
						phone: "4299835151",
						email: "loki@hotmail.com",
						isFavorite: true,
					},
					{
						id: "matheus",
						name: "matheus",
						phone: "4299835151",
						email: "tezinhou@hotmail.com",
						isFavorite: false,
					},
				],
			};
		},

		methods: {
			toggleFavoriteStatus(friendId) {
				const identifiedfriend = this.friends.find(
					(friend) => friend.id === friendId
				);
				identifiedfriend.isFavorite = !identifiedfriend.isFavorite;
			},
		},
	};
</script>
