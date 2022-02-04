<template>
  <div class="item-color">
    <span >{{ color.name }}</span>
    <div
      v-bind:style="'background:#' + color.code + ';'"
      class="color-demo">
    </div>
  </div>
</template>
<script>
export default {
  name: "ColorItem",
  props: ["color"],
};
</script>

<style scoped>
.item-color{
    display: flex;
    align-items: center; 
    flex-direction: row;
}
.color-demo {
    margin:5px;
  width:0;
  border-radius: 100%;
  content: "";
  padding: 7px 7px 7px 7px;
}

</style>