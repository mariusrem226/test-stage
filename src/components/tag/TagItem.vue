<template>
    <div class="tag-item">
        <span>{{name}}</span>
    </div>
</template>
<script>
export default {
    name:"TagItem",
    props:["name"]
}
</script>

<style scoped>
.tag-item{
    padding: 0px 4px 0px 4px;
    background: rgb(255, 165, 2, 0.2);
     border-radius: 7px;
     margin: 3px;
}
.tag-item span{
    color: #ffa502;
}
</style>