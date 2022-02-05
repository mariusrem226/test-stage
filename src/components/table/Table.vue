<template>
    <div id="table">
        <TableRow v-for="car in carsList" v-bind:deleteCar="deleteCar.bind(null ,car)" v-bind:copyCar="copyCar.bind(null ,car)" v-bind:key="car.id" v-bind:car="car"/>
    </div>
</template>
<script>
import TableRow from "./TableRow.vue";
import { getCars} from "../../model/carsAPI";//on importe la fonction qui permet de récupérer la liste des voitures
export default {
    name:"Table",
    components:{TableRow},
    data(){
        return{
            carsList: getCars(),
        }
    },
     methods:{
         //fonction de suppression de voiture
      deleteCar(car){
          var index=this.carsList.indexOf(car);//on "localise" la voiture dans la liste
          this.carsList.splice(index, 1);//on supprime la voiture de la liste
      },
      //fonction de copie (duplication) de voiture 
       copyCar(car){
          var carId=this.carsList.length+1; //on détermine l'id que prendra la copie de la voiture
          var newCar={...car}; //on crée une copie de la voiture à copier
          newCar.id=carId;//on modifie son id (pour eviter la duplication de key)
          this.carsList.push(newCar);//on l'ajoute à la liste
      }
      
  }


}


</script>

<style scoped>
#table{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 20px;
}
</style>