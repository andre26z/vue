import { createApp } from "vue";

import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import FriendData from "./components/NewFriend.vue" // estou importando o script do meu App.vue, se verificar o App.vue é possível verificar que eu exportei o script usando o export default

const app = createApp(App);
app.component("friend-contact", FriendContact); // o que eu fiz é, dei um nome de 'friend-contact' com as informações que eu recebi do meu componente FriendContact - as informações que eu recebi é o template inteiro, incluido botões e etc.
app.mount("#app");

const app2 = createApp(App);
app2.component("friend-data", FriendData);
app2.mount("#app2");
