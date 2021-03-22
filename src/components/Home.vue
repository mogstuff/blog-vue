<template>

<div class="home-page-wrapper">

<div class="hero-image">
  
<div class="hero-text">
   <h1>The Food Dude</h1>
<h2>Learn how to cook simple, tasty, healthy food.</h2>
</div>

</div>

<div id="home-text">
 
  <p class="intro">If you think you can't cook, think again. We're here to help you build your confidenece by cooking straigthforward, healthy dishes.</p>
</div>


<h2 class="latest-recipes">Latest Recipes</h2>
<div id="recipe-cards">


  <div class="recipe-card" id="carbonara-card">

    <h3>  <img src="https://i.postimg.cc/kMRHqvqr/cooking-pot-icons.png" class="pan-icon"/>Spaghetti carbonara</h3>
      <img src="../assets/images/carbonara.jpg" class="card-image"/>

      
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, deserunt.</p>
    <div class="card-footer">
      <a href="#/post" class="view-recipe-link">View Recipe <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </a></div>
    </div>
   

    <div class="recipe-card" id="curry-card">
    
  <h3>  <img src="https://i.postimg.cc/kMRHqvqr/cooking-pot-icons.png" class="pan-icon"/> Chili con carne</h3>
      <img src="../assets/images/chili-con-carne.jpg" class="card-image"/>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, deserunt.</p>
    <div class="card-footer">
      <a href="#/post" class="view-recipe-link">View Recipe <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </a></div>
    </div>
  

  <div class="recipe-card" id="chili-card">
 <h3>  <img src="https://i.postimg.cc/kMRHqvqr/cooking-pot-icons.png" class="pan-icon"/> Curry</h3>
        <img src="../assets/images/curry.jpg" class="card-image"/>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, deserunt.</p>
    <div class="card-footer">
      <a href="#/post" class="view-recipe-link">View Recipe <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </a></div>
    </div>
  
  </div>


</div>
</template>

<script>
export default {
  name: 'Home'
 
}

</script>
