<template>
  <div v-bind:style="{ 'background-image': 'url(' + piece.image + ')' }" class="piece-item">
      <div class="piece-overlay">
          <h3>{{piece.name}}</h3>
          <div class="btn-container">
          <button @click="toggleModale"> <img  src="../../assets/edit.png" alt=""> Voir les détails</button>
          </div>
      </div>
       <ModalePiece v-bind:piece="piece" v-bind:toggleModale="toggleModale" v-bind:revele="reveleModale"/>
      
  </div>

</template>

<script>
import ModalePiece from "./ModalePiece.vue";

export default {
data(){
    return{
        reveleModale: false,

    }
},
methods:{
    toggleModale(){
        this.reveleModale=!this.reveleModale;
    }
},
props:{
    piece: {
        Object, 
        required:true,
    }
},


  name: "PieceItem",
  components: {ModalePiece},
};
</script>

<style scoped>
.piece-item {
    
    width: 250px;
    height: 200px;
    margin: 5px;
    background-size: 250px 200px;
    display: flex;
    flex-direction: column-reverse;
    box-shadow: 3px 3px 3px rgb(231, 231, 231), -3px 3px 3px rgb(231, 231, 231);
}
.piece-overlay{
    background: white;
}
.piece-overlay button{
    border: none;
    background: rgb(255, 165, 2);
    color: white;
    border-radius: 10px;
}
.piece-overlay button img{
   width: 10px;
}
.btn-container{
    font-size: 10px;
    display: flex;
    flex-direction: row-reverse;
    padding: 5px;
}
</style>
