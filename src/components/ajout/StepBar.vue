<template>
    <div id="stepBar">
        <StepItem   :setStep="setStep.bind(null ,index)" v-for="index in nb" v-bind:stepNumber="stepNumber" v-bind:tKey="index" v-bind:key="index"/>
    </div>
</template>
<script>
import StepItem from "./StepItem.vue";

export default {
    components:{StepItem},
    name:"StepBar",
    props:["stepNumber", "setStep"],
    data(){
        return{
            nb:3,
        }
    },
    methods:{
        test(){
            console.log("coucou");
        }
    }
}
</script>

<style scoped>
#stepBar{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60%;
}
</style>