<template>
    <div>
      <h1>allusersApp</h1>
      <h1 class="mb-4">All Users</h1>
    <!-- <router-link :to="`/create`" class="btn btn-md btn-info ms-4 mb-3" aria-current="page">Create</router-link> -->
    <table class="table table-striped w-50 mx-auto table-dark">
    <thead>
      <tr>
        <th scope="col ">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users.value" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.first_name }}</td>
        <td>{{user.last_name}}</td>
        <td>
          
          <router-link class="btn btn-info me-1" :to="`/users/${user.id}`">show</router-link>
        </td>
      </tr>
     
    </tbody>
  </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import {reactive} from 'vue'

  export default {
    name: "allusersApp",
    setup(){
        let users = reactive([]);

        let getallusers = function(){
            axios.get(" http://localhost:7040/users")
            .then((res) => {
            console.log(res.data);
            users.value = res.data
          })
          .catch((err) => console.log(err));
        }
        getallusers();
        return{
            users,
        }
        },
        
    }
  </script>
  
<style scoped>
    .btn{
        margin-left: 5px;
    }

 
</style>