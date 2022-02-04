<template>
  <div  v-bind:class="showNavBar" id="navbar">
    <nav>
      <ol>
        <li  id="link-home" class="">
          <router-link  class="link" to="/">
          <img id="img-home" src="../assets/maison.png" alt="" />
            <span>Acceuil</span></router-link>
        </li>
        <li   id="link-pieces" class="">
          <router-link  class="link" to="/pieces">
            <img
              src="../assets/megaphone.png"
              alt=""
            /><span>Les pièces</span></router-link>
        </li>
        <li id="link-add" class="">
          <router-link  class="link" to="/ajout">
          <img src="../assets/plus.png" alt="" /><span
              >Ajout voiture</span
            ></router-link>
        </li>
        <li id="link-table" class="">
          <router-link  class="link" to="/table">
            <img src="../assets/to-do-list.png" alt="" /><span
              >Liste des voitures</span
            ></router-link>
        </li>
      </ol>
    </nav>
    <div id="linkedin-container">
      <a
        id="btn-linkedin"
        href="https://www.linkedin.com/in/marius-remy-0a5463227/"
      >
        <span>Mon linkedin</span>
      </a>
      <img id="traveler-img" src="../assets/travelers.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {},
  props: ["showNavBar"],
};
</script>

<style scoped>
.selected{
  background: rgb(255, 165, 2, 0.2);
  border-radius: 10px;
  
}
.selected span{
  color: #ffa502;
}
.selected img{
  filter: invert(56%) sepia(80%) saturate(1158%) hue-rotate(2deg) brightness(108%) contrast(101%);
  }
#navbar {
  
  overflow: hidden;
  background: white;
  line-height: 40px;
  white-space: nowrap;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: max-width 300ms, min-width 300ms ;
}
.visible{
  
  min-width: 170px;
  max-width: 170px;
}
.hidden{
  min-width: 0;
  max-width: 0;
}
nav {
  width: 180px;
}
ol {
  list-style-type: none;
  margin: 0;
  padding: 10%;
}
.link {
  display: flex;
  align-items: center;
  color:#222455;
  text-decoration: none;
}
.link > * {
  padding: 0px 3px 0px 3px;
  
}
.link span{
  line-height: 30px;
}
.link img {
  width: 20px;
}
#btn-linkedin {
  background: whitesmoke;
  padding: 0px 20px 0px 20px;
  border-radius: 10px;
  color: #ffa502;

  text-decoration: none;
}
#linkedin-container {
  display: flex;
  flex-direction: column-reverse;
  background: #ffa502;
  max-height: 140px;
  border-radius: 10px;
  align-items: center;
  padding: 5%;
  margin-bottom: 30px;
}
#traveler-img {
  width: 100px;
  margin-bottom: 20px;
}
</style>
