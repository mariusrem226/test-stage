<template>
    <div @click="setStep" v-bind:class=" 'stepItem '+className">
        <span>  {{tKey}}</span>
        
    
    </div>
</template>
<script>
export default {
    name:"StepItem",
    props:["tKey","stepNumber", "setStep"],
    computed:{
        className:function(){
            if(this.stepNumber>=this.tKey){
                return "selected";
            }
            else return "normal";
            
        }
    }
}
</script>

<style scoped>
.stepItem{
    cursor: pointer;
    border-radius: 100%;
    width :40px;
    height: 40px;
    display:flex;
    justify-content: center;
    align-items: center;
}
.selected{
    color:white;
    background: #ffa502;
     border: 2px solid #ffa502;
}
.normal{
    color:black;
    background: lightgray;
     border: 2px solid lightgray;
    
}
</style>