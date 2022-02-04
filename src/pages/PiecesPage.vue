<template>
  <div id="piece-page-container">
    <h1>Les pièces auto</h1>

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
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
}

#pieces-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
