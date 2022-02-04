<template>
  <div id="app">
    <Header v-bind:toggleNavBar="toggleNavBar"/>
    <div id="app-content">  
       <Navbar v-bind:showNavBar="showNavBar"/>
       
         <router-view/>
       
       
    </div>
   
    
  </div>
</template>


<script>


import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";


export default {
  data(){
    return{
      showNavBar:"hidden"
    };
    
  },
  name: 'App',
  components: {Header, Navbar},
  methods:{
    toggleNavBar(){
      if(this.showNavBar=="visible"){
         this.showNavBar="hidden";
      }else this.showNavBar="visible"
     
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
body, html{
  height: 100%;
}
body{
 font-family: 'Montserrat', sans-serif;
 font-size: 13px;
}
#app {
  height: 100%;
}
#app-content{
  display: flex;
  background: #F5F6F9;
  flex-direction: row;
  width: 100%;
  min-height: 90%;

}
.txt-normal{
  font-size: 10px;
}
</style>
