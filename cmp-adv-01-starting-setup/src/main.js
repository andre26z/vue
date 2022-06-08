import { createApp } from "vue";

// componentes que serão usados de forma local não podem ser exportados para o main.js se não da erro
import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseCard from "./components/BaseCard.vue";

const app = createApp(App);
// componentes registrados no meu main.js tem escopo global
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);
app.mount("#app");
