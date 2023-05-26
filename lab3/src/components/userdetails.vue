<template>
    <div>
      <h1>userdetailsApp</h1>
      <div class="card" >
    <div class="card-body" v-if="user.value">
      <h5 class="card-title">{{ user.value.id }}</h5>
      <h5 class="card-title">{{ user.value.first_name }}</h5>
      <h5 class="card-title">{{ user.value.last_name }}</h5>
      <h5 class="card-title">{{ user.value.gender }}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <router-link :to="`/`">
        <button v-theme class="btn btn-warning">
          back
        </button>
      </router-link>
    </div>
  </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; 
  import {reactive} from 'vue';
  import { useRoute } from 'vue-router';
  export default {
    name: "userdetailsApp",
    setup(){
        let user = reactive({});
        const route = useRoute();
        let getuserById = function(){
            let id  = route.params.id;
            axios.get(`http://localhost:7040/users/${id}`)
            .then((res) => {
                user.value = res.data
        })
      }
      let back =function(){
          this.$router.push('/users')
      }
      back
      getuserById();

      return {
        user
      }
    }
 }

  </script>
  
  <style scoped></style>