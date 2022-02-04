<template>
  <div id="table-row" v-bind:class="removedStyle">
    
      <div class="row-header">
        <div v-bind:style="'background:url('+this.img+') no-repeat center; background-size: cover'" class="img-car"></div>
        <div class="info-container">
          <p class="name-car">{{car.nom_modele}}</p>
          <div class="couleur-container">
            <ColorItem v-bind:color="color" />
          </div>
        </div>
        <div class="action-container">
          <button @click="remove" class="btn-delete">
            <img src="../../assets/supprimer.png" alt="" />
          </button>
          <button @click="copyCar" ckass="btn-copy">
            <img src="../../assets/copier.png" alt="" />
          </button>
        
      </div>

    
    </div>

    <div class="tags-container">
      <TagItem v-for="tag in tagList" v-bind:key="tag" v-bind:name="tag" />
    </div>
  </div>
</template>
<script>
import ColorItem from "./ColorItem.vue";
import TagItem from "../TagItem.vue";

export default {
  name: "TableRow",
  components: { ColorItem, TagItem },
  props:["car", "deleteCar", "copyCar"],
  data(){
      return{
          color:this.car.couleur,
          tagList:this.car.tags,
          img:this.car.image_voiture,
          removed:false,
      }
  },
  computed:{
    removedStyle:function(){
      if(this.removed) return "removed"
      else return "normal"
    }
  },
  methods:{
    remove(){
      this.removed=true;
      this.sleep(300).then(() => {this.deleteCar() }); //on attend 500ms (le temps que l'animation de suppression se joue et on supprime de la liste)
      
    },

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
 
};

</script>

<style scoped>
.normal{
  max-height: 96px;
}
.removed{
  max-height: 0px;
  flex-wrap: nowrap;
  overflow: hidden;
  

}
.name-car {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 5px;
}
#table-row {
  
 transition: max-height 0.3s;
  width: 100%;
  background: white;
  display: flex;
  flex-wrap: wrap;

  flex-direction: column;
}
.action-container {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 10px;
  width: 100%;
}
button {
  border: none;
  background: white;
  height: 20px;
  width: 20px;
  margin-right: 20px;
}
button:hover >img{
  background: #F5F6F9;
  transition: background 0.3s;
}
button img {
  height: 30px;
  width: 30px;
  padding: 5px;
  border-radius: 5px;
}

.row-header {
  display: flex;
  width: 100%;
}
.img-car {
  
  height: 60px;
  min-width: 60px;
  border-radius: 100%;
  margin: 5px;
}
.tags-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
@media only screen and (min-width: 600px) {
  .row-header,
  .info-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
   
    width: 100%;
  }
  .name-car {
    font-size: initial;
    font-weight: initial;
    margin: 0;
  }
}
</style>