<template>

<div class="home-page-wrapper">


<div id="home-text">
  <h1>Hi, I'm the Food Dude <i class="fa fa-smile-o"></i></h1>
<h2>Here you can learn how to cook simple, tasty, healthy food.</h2>
  <p class="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sequi?</p>
  <p class="intro">A adipisci laudantium amet soluta, tenetur incidunt in quidem ipsam!</p>
  <p class="intro">Ullam voluptatem expedita amet repellat similique, libero vitae facilis reiciendis?</p>
</div>

<div id="recipe-cards">

  <div class="recipe-card" id="carbonara-card">
    <h3>Header</h3>
    <img src="../assets/images/carbonara.jpg" class="card-image"/>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, deserunt.</p>
    <div class="card-footer">
      <a href="#/post" class="view-recipe-link">View Recipe <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </a></div>
    </div>
   

    <div class="recipe-card" id="curry-card">
    <h3>Header</h3>
     <img src="../assets/images/chili-con-carne.jpg" class="card-image"/>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, deserunt.</p>
    <div class="card-footer">
      <a href="#/post" class="view-recipe-link">View Recipe <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </a></div>
    </div>
  

  <div class="recipe-card" id="chili-card">
    <h3>Header</h3>
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