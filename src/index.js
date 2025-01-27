import './assets/main.css';

<<<<<<< HEAD
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
=======
import { createApp } from 'vue'
import App from './App.vue'
import MineBar from './components/MineBar.vue'
import NavBar from './components/NavBar.vue'

createApp(App).mount('#app')
App.components("MineBar", MineBar)
App.components("NavBar", NavBar)
>>>>>>> 2ec3943 (add navbar)
