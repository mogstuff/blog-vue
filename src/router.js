import Vue from 'vue'
import Router from 'vue-router'
import About from './components/About.vue'
import Home from './components/Home.vue'
import Posts from './components/Posts.vue'
import Post from './components/Post.vue'

Vue.use(Router)

export default new Router({
  routes: [   
   
    {
        path: '/',
        name: 'home',
        component: Home
      },
    {      
       path: '/about', 
        name: 'about',
        component: About
    },
    {      
       path: '/posts', 
        name: 'posts',
        component: Posts
    },
    {      
       path: '/post', 
        name: 'post',
        component: Post
    }
  ]
})