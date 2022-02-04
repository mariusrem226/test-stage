<template>
    <div id="table">
        <TableRow v-for="car in carsList" v-bind:deleteCar="deleteCar.bind(null ,car)" v-bind:copyCar="copyCar.bind(null ,car)" v-bind:key="car.id" v-bind:car="car"/>
          
    </div>
</template>
<script>
import TableRow from "./TableRow.vue";
import { getCars} from "../../model/carsAPI";
export default {
    name:"Table",
    components:{TableRow},
    data(){
        return{
            carsList: getCars(),
        }
    },
     methods:{
      deleteCar(car){
          var index=this.carsList.indexOf(car);
          this.carsList.splice(index, 1);
      },
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