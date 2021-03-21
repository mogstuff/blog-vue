<template>
  <div id="app">  
<nav>
  <router-link to="/" class="nav-link">Home</router-link>
<router-link to="/about" class="nav-link">About</router-link>
</nav>
   <router-view/>
  </div>



</template>


<script>


export default {
  name: "App",
  components: {

  },
};
</script>



<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

@import './assets/css/colours.css';
@import './assets/css/layout.css';
@import './assets/css/typography.css';


</style>
