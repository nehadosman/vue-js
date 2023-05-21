<template>
    <div>
        <h2>Users Table</h2>
        <table class="table mx-auto w-25 text-dark mt-5 bg-light table-striped">
            <thead>
                <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                
                <tr v-for="user in users" :key="user.firstName">
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td><button class="btn btn-danger" @click="delUser(user)">delete</button></td>
                </tr>
            </tbody>
       </table> 
    </div>
</template>

<script>
    export default {
        name:"usersComponent",
        data(){
            return {
                userList:this.users
            }
        },
        props:["users"],
        methods:{
            delUser(user){
                console.log(user)
                const index = this.userList.findIndex((u) => u.firstName === user.firstName);
                if (index !== -1) {
                this.userList.splice(index, 1);
            }
        }
        }
    }
</script>

<style scoped>

</style>