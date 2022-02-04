<template>
  <div id="piece-page-container">
    <h4>Les pièces techniques</h4>

    <div id="pieces-container">
      <PieceItem v-for="piece in listePieces" :piece="piece" :key="piece.id" />
    </div>
  </div>
</template>

<script>
import PieceItem from "../components/pieces/PieceItem.vue";
import { getPieces } from "../model/carsAPI";

export default {
  mounted() {//quand le composant est monté on "decore" le lien correspondant dans la navBar (ici "les pièces")
    document.getElementById("link-pieces").classList.add("selected");
    
  }, 
  beforeDestroy() { //quand le composant est detruit on retire la "décoration" du lien correspondant dans la navBar (ici "les pièces")
    document.getElementById("link-pieces").classList.remove("selected");
  },
  name: "PiecesPage",

  components: { PieceItem },
  data() {
    return {
      listePieces: getPieces(),
    };
  },
};
</script>



<style scope >
#piece-page-container {
  background: white;
  margin: 20px;
  padding: 0px;
  border-radius: 5px;
  width: 100%;
}

#pieces-container {
  display: flex;
  flex-wrap: wrap;
  border-top:2px #F5F6F9 solid;
  
}
h4{
  padding: 10px;
  margin: 0;
  color:#222455;
}
</style>
