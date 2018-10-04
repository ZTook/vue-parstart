<template>
  <div id="app">
    <md-button @click.native="startHacking">Let's do it</md-button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
  startHacking () {
    this.$notify({
      title: 'It Works',
      message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
      duration: 6000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
