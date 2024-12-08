import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";

//@ts-ignore
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({ components, directives });

createApp(App).use(router).use(vuetify).mount("#app");
