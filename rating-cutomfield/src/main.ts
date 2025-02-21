import { createApp } from 'vue'
import App from './App.vue'
import RatingFieldView from "./components/RatingFieldView.vue";
import RatingFieldEdit from "./components/RatingFieldEdit.vue";

const app = createApp(App);
app.component("RatingFieldView", RatingFieldView);
app.component("RatingFieldEdit", RatingFieldEdit);
app.mount('#app');

