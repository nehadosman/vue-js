
import { createApp } from 'vue'
import App from './App.vue';
import { createWebHistory,createRouter } from 'vue-router';
import allusersApp from './components/allusers.vue';
import userdetailsApp from './components/userdetails.vue';
import errorApp from './components/error.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const routes = [
    {
        path:'/',component:allusersApp,alias: "/users"
    },
    {
        path:'/users/:id',component:userdetailsApp
    },
    {
        path:'/:NotFound(.*)*',component:errorApp,meta:{hideNavbar:true}
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});
// custom directive

const app = createApp(App);

app.directive("theme", {
  mounted(elem, binding) {
    if (binding.value === "primary") {
      elem.style.backgroundColor = "blue";
    } else if (binding.value === "gray") {
      elem.style.backgroundColor = "yellow";
    } else {
      elem.style.backgroundColor = "blue";
    }
  },
});

app.use(router).mount('#app')