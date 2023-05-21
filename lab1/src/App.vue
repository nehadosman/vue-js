<template>
  <h1>hello from APP.vue</h1>
  
  <formComponent/>
  </template>
  
  <script>
  
  import formComponent from './components/Form.vue'
  export default {
    name: 'App',
    components: {
      formComponent
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h1{
  font-weight: bold;
  font-size: 2rem;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
  @import "~bootstrap/dist/css/bootstrap.css";
  </style>