<template>
  <div id="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential</h2>
    <ul>
      <li><router-link to="/particles">Click Me and goto particles</router-link></li>
      <br>
      <li><router-link to="/mdlnav">Click Me and Visit mdlnav</router-link></li>
      <br>
      <li><md-button @click.native="startHacking">Let's do it</md-button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
