<template>
    <div class="container">
        <h1>Create User</h1>
        <form action="" @submit.prevent="createUser">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" v-model="first_name" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Last Name</label>
                <input class="form-control w-50 mx-auto" id="exampleFormControlInput2" v-model="last_name"/>
            </div>
            <div>
                <button class="btn btn-success me-3">Add</button>
                <button class="btn btn-primary" @click="back">back</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "createUser",
  data(){
    return{
        first_name:'',
        last_name:'',
    }
  },
  methods:{
    createUser() {
            axios
                .post(" http://localhost:7040/users", {
                    first_name: this.first_name,
                    last_name: this.last_name,
                })
                .then((response) => {
                    console.log(response.data);
                    this.$router.push('/users')
                })
                .catch((err) => {
                    console.log(err);
                });
        },back(){
        this.$router.push('/users')
    }
  }
};
</script>

<style scoped>

</style>