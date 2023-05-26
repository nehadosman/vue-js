<template>
    <div>
      <h1>allusersApp</h1>
      <h1 class="mb-4">All Users</h1>
    <router-link :to="`/create`" class="btn btn-md btn-info ms-4 mb-3" aria-current="page">Create</router-link>
    <table class="table table-striped w-50 mx-auto table-dark">
    <thead>
      <tr>
        <th scope="col ">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Actions</th>
        <!-- <th scope="col">Gender</th> -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.first_name }}</td>
        <td>{{user.last_name}}</td>
        <!-- <td>{{ user.gender }}</td> -->
        <td>
          <button class="btn btn-sm btn-danger" @click="deleteUser(user.id)">delete</button>
          <router-link :to="`/users/${user.id}`">
            <button class="btn btn-sm btn-secondary">See More</button>
        </router-link>
        <router-link :to="`/update/${user.id}`">
            <button class="btn btn-sm btn-secondary">Update</button>
        </router-link>
        </td>
      </tr>
     
    </tbody>
  </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "allusersApp",
    created() {
      this.getallusers();
    },
    data() {
      return {
        users: [],
      };
    },
    methods: {
      getallusers() {
        axios
          .get("  http://localhost:7040/users")
          .then((res) => {
            console.log(res.data);
            this.users = res.data
          })
          .catch((err) => console.log(err));
      },
      deleteUser(id){
          axios.delete(`  http://localhost:7040/users/${id}`)
          .then((res)=>{
              console.log(res.data)
              this.getallusers()
          })
          .catch((err)=>console.log(err))
      }
    },
  };
  </script>
  
  <style scoped>
    .btn{
        margin-left: 5px;
    }


</style>