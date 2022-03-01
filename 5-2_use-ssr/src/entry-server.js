import { createSSRApp } from "vue";
import App from "./App.vue";

export default () => {
  return createSSRApp(App);
};
