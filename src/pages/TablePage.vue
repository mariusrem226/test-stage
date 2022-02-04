<template>
  <div id="table-page-container">
  <TitleAndDate/>
  <Table/>
  </div>
  
</template>

<script>
import TitleAndDate from "../components/TitleAndDate";
import Table from "../components/table/Table.vue";

export default {
   mounted() {//quand le composant est monté on "decore" le lien correspondant dans la navBar (ici "les pièces")
    document.getElementById("link-table").classList.add("selected");
    
  }, 
  beforeDestroy() { //quand le composant est detruit on retire la "décoration" du lien correspondant dans la navBar (ici "les pièces")
    document.getElementById("link-table").classList.remove("selected");
  },
  name: "TablePage",
  components : {TitleAndDate, Table}
}
</script>

<style scoped>
  #table-page-container{
    width: 100%;
  }
</style>
