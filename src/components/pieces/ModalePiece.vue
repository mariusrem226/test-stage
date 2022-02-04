<template>
  <div v-show="revele" class="bloc-modale">
    <div @click="toggleModale" class="overlay"></div>
    <div class="modale card">
        <div @click="toggleModale" class="btn-modale btn btn-danger">x</div>
        <h2>{{piece.name}}</h2>
        <p>{{piece.model}}</p>
       
        <p>voitures equipées:
          <ul>
            <li v-for="voiture in piece.listeVoitures" v-bind:key="voiture" >{{voiture}}</li>
          </ul>
        </p>
       
    </div>
  </div>
</template>
<script>
export default {

    name:'ModalePiece',
    props:[
      "revele", "toggleModale", "piece"

    ],
    methods:{
      toggleModale1(){
        console.log("blabla");
      }
    }
};
</script>

<style scoped>
.bloc-modale{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right:0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


}
.overlay{
  background: rgba(0, 0, 0, 0.26);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modale{
  background: #fff;
  padding: 50px;
  position: fixed;
  top:30%;
}
.btn-modale{
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>