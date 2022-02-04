<template>
  <div id="header" >
      <div class="item center-horizontal">
          <img  id="logo" src="../assets/logo2.png" alt="logo">
      </div>
       <div @click="toggleNavBar" class="item center-horizontal">
          <img  id="img-nav-btn" src="../assets/btn_menu_1.png" alt="btn">
      </div>
      <div>

      </div>
  </div>
</template>

<script>

export default {
  name: "Header",
  props:["toggleNavBar"]
}
</script>

<style scoped>
    .center-horizontal{
        display: flex;
        align-items: center;
    }
    #header{
        
        display: flex;
        flex-direction: row;
        background: white;
        height: 80px;
    }
    .item{
        height: 100%;
        padding: 8px;
    }
    #logo{
        height: 43px;
    }
    #img-nav-btn{
        margin-bottom:-5px ;
        height:13px;
        cursor: pointer;
    }
    
</style>
