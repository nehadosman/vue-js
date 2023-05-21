<template>
    <div>
        <h3>form component</h3>
        <button @click="page='form'">form</button>
        <button  style="margin: 6px;" @click="page='users'">users</button>
        <button @click="page='admins'">admins</button>
        <hr>

       
        <div v-if="page=='form'" class="form-box mx-auto mt-5">
            <form  class="form form-container" action="" @submit.prevent="formHandling">
            first name: <input type="text" v-model="formValues.firstName">
            last name : <input type="text" v-model="formValues.lastName">
            role: <select v-model="formValues.role" required>
                <option value="" >Select a role</option>
                <option value="users">user</option>
                <option value="admins">admin</option>
            </select>
            <br>
            <br>
            <input type="submit">
            </form>
        </div>
        <div v-else-if="page=='users'">
            <usersComponent :users="allUsers"/>
        </div>
        <div v-else-if="page=='admins'">
            <adminsComponent :admins="allAdmins"/>
        </div>
       
    </div>
</template>

<script>
import usersComponent from './users.vue'
import adminsComponent from './adminPage.vue'
    export default {
        name:"formComponent",
        data(){
            return{
                page:'form',
                formValues:{
                    firstName:"",
                    lastName:"",
                    role:""
                },
                allUsers:[
             
                ],
                allAdmins:[
             
                ]
            }
            
        },
        components:{
            usersComponent,
            adminsComponent
        },
        methods:{
            formHandling(){
                if(this.formValues.role == "users")
                {
                    this.allUsers.push(this.formValues);
                }
                else if(this.formValues.role == "admins")
                {
                    this.allAdmins.push(this.formValues);
                }

            }
        }
    }
</script>

<style scoped>
.form-box {
  max-width: 300px;
  background: #f1f7fe;
  overflow: hidden;
  border-radius: 16px;
  color: #010101;
}

.form {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 24px 24px;
  gap: 16px;
  text-align: center;
}
h3{
  font-weight: bold;
  font-size: 2rem;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}


.input {
  background: none;
  border: 15px;
  outline: 0;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #eee;
  font-size: .9rem;
  padding: 8px 15px;
}

/*Button*/
button ,input[type="submit"]{
  background-color: #286cd4;
  color: #fff;
  border: 0;
  border-radius: 15px;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .2s ease;
}

.form button:hover {
  background-color: #005ce6;
}
</style>