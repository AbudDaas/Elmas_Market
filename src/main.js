import { createApp, h } from "vue";
import App from './App.vue'
// import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faQrcode, faLink, faStream } from "@fortawesome/free-solid-svg-icons";
import mitt from "mitt";

library.add(faQrcode, faLink, faStream);

const emitter = mitt();

const app = createApp({render: ()=>h(App)});

app.config.globalProperties.emitter = emitter;
// app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount("#app");

