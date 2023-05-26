import { createApp } from 'vue'
import App from './App.vue';
import { createWebHistory,createRouter } from 'vue-router';
import allusersApp from './components/pages/allusers.vue';
import userdetailsApp from './components/pages/userdetails.vue';
import updateuserApp from './components/pages/updateuser.vue';
import createuserAPP from './components/pages/createuser.vue';
import errorApp from './components/pages/error.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const routes = [
    {
        path:'/',component:allusersApp,alias:'/users',
    },
    {
        path:'/users/:id',component:userdetailsApp
    },
    {
        path:'/update/:id',component:updateuserApp
    }, {
        path:'/create',component:createuserAPP
    },
    {
        path:'/:NotFound(.*)*',component:errorApp,meta:{hideNavbar:true}
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')