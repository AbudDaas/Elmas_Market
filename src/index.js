import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import MineBar from './components/MineBar.vue';
import NavBar from './components/NavBar.vue';

const app = createApp(App);

app.component('MineBar', MineBar);
app.component('NavBar', NavBar);

app.mount('#app');