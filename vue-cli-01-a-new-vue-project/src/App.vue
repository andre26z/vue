<template>
	<section>
		<h2>Hello World - this is my family:</h2>
		<ul>
			<friend-contact
				name="matheus"
				phone-number="42 99856 2341"
				email-address="lokinho@gmail.com"
				is-favorite="1"
			></friend-contact>
			<friend-contact
				name="mesa"
				phone-number="42 5555 5555"
				email-address="mesadecentro@centro.com"
				is-favorite="0"
			></friend-contact>
			<!--estamos emulando um HTML dentro deste friend-contact, então é melhor usarmos traço entre as palavras porque o html entende-->
		</ul>
	</section>
</template>

<script></script>
