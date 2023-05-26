<template>
    <div class="container">
        <h1>Update User</h1>
        <form action="" @submit.prevent="updateUser">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" v-model="first_name" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Last Name</label>
                <input class="form-control w-50 mx-auto" id="exampleFormControlInput2" v-model="last_name"/>
            </div>
            <div>
                <button class="btn btn-success me-3" @click="back">Update</button>
                <button class="btn btn-primary" @click="back">back</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
    name:"updateuserApp",
    data(){
        return{
            id:'',
            first_name:'',
            last_name:'',
        }
    },
    created(){
      this.getuserById()
    },
    methods:{
      getuserById(){
        this.id = this.$route.params.id;
        console.log(this.id)
        axios.get(` http://localhost:7040/users/${this.id}`)
        .then((res)=>{
          console.log(res.data)
          this.id = res.data.id;
          this.first_name = res.data.first_name;
          this.last_name = res.data.last_name;
          this.$router.push(`/update/${this.id}`);
        })
        .catch((err)=>console.log(err))
      },
    updateUser() {
        axios
            .put(`http://localhost:7040/users/${this.id}`, {
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
    },
    back(){
        this.$router.push('/users')
      }
    }
  }
    
</script>

<style scoped>

</style>