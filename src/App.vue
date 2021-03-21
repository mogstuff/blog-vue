<template>
  <div id="app">    

    <div id="header">
<nav>
  <router-link to="/" class="nav-link">Home</router-link>
<router-link to="/about" class="nav-link">About</router-link>
<router-link to="/posts" class="nav-link">Posts</router-link>

</nav>
<img src="./assets/logo.png" class="logo-img"/>   
</div>

  <div class="content-wrapper">
     <router-view/>
  </div>

  <footer>
    &copy; Mark Morgan 2021
  </footer>


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

@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");

@import url('./assets/css/colours.css');
@import url('./assets/css/layout.css');
@import url('./assets/css/typography.css');


</style>
