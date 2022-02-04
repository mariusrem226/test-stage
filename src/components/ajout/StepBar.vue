<template>
    <div id="stepBar">
        <StepItem    v-for="step in stepList" :setStep="setStep.bind(null ,step.nb)" :name="step.name" :stepNumber="stepNumber" :tKey="step.nb" :key="step.nb"/>
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
            stepList:[
                {   
                    "nb":1,
                    "name":"Nom", 
                },
                {   
                    "nb":2,
                    "name":"Description", 
                },
                {   
                    "nb":3,
                    "name":"Tags", 
                },
            ]
                

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