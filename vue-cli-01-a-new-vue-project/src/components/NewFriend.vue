<template>
	<ul>
		<li
			v-for="friend in friends"
			:id= "friend.id"
			:key="friend.id"
			:name="friend.name"
			:phone-number="friend.phone"
			:email-address="friend.email"
			:is-favorite="friend.isFavorite"
            @toggle-favorite="toggleFavoriteStatus"
		></li>
	</ul>
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
							email: "dezinhou@hotmail.com",
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
		};
	</script>
</template>
