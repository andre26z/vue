<template>
	<ul>
		<learning-resource
			v-for="res in storedResources"
			:key="red.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
		></learning-resource>
	</ul>
</template>

<script>
	import LearningResource from "./components/learning-resources/LearningResource.vue";
	export default {
		components: {
			"learning-resource": LearningResource,
		},

		data() {
			return {
				storedResources: [
					{
						id: "official-guide",
						title: "Official Guide",
						description: "A guide for new Vue.js users",
						link: "https://vuejs.org/v2/guide/index.html",
					},
					{
						id: "google",
						title: "Google",
						description: "Learn to google",
						link: "https://www.google.com/",
					},
				],
			};
		},
	};
	/* eslint-disable */
</script>
