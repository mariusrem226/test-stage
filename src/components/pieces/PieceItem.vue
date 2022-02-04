<template>
  <div v-bind:style="{ 'background-image': 'url(' + piece.image + ')' }" class="piece-item">
      <div class="piece-overlay">
          <h5>{{piece.name}}</h5>
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
h5{
    color: black;
    margin: 5px;
}
.piece-item {
    
    width: 340px;
    height: 250px;
    margin: 5px;
    background-size:cover;
    display: flex;
    flex-direction: column-reverse;
    box-shadow: 3px 3px 3px rgb(231, 231, 231), -3px 3px 3px rgb(231, 231, 231);
    border-radius: 5px;
}
.piece-overlay{
    background: white;
    height: 90px;
}
.piece-overlay button{
    border: none;
    background: rgb(255, 165, 2);
    color: white;
    border-radius: 5px;
    padding: 3px 6px 3px 6px;
    margin-top: 10px;
}
.piece-overlay button img{
   width: 11px;
}
.btn-container{
    font-size: 11px;
    display: flex;
    flex-direction: row-reverse;
    padding: 5px;
}
</style>
