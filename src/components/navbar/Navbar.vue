<template>
  <div  v-bind:class="showNavBar" id="navbar">
    <nav>
      <ol>
       <NavBarItem :id="'home'"  :name="'Accueil'" :image="'maison.png'"/>
       <NavBarItem :id="'pieces'"  :name="'Les pièces'" :image="'megaphone.png'"/>
       <NavBarItem :id="'add'"  :name="'Ajout voiture'" :image="'plus.png'"/>
       <NavBarItem :id="'table'" :name="'Liste des voitures'" :image="'to-do-list.png'"/>
      </ol>
    </nav>
    <div id="linkedin-container">
      <a
        id="btn-linkedin"
        href="https://www.linkedin.com/in/marius-remy-0a5463227/"
      >
        <span>Mon linkedin</span>
      </a>
      <img id="traveler-img" src="../../assets/travelers.png" alt="" />
    </div>
  </div>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";
export default {
  name: "Navbar",
  methods: {},
  props: ["showNavBar"],//attribut qui sert de class et pour l'affichage/fermetre de la navbar
  components:{NavBarItem}
};
</script>

<style scoped>

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
