<template>
    <div>
         <div id="tags-container" >
            <TagItem
              v-for="tag in tagsList"
              v-bind:key="tag"
              v-bind:name="tag"
            />
          </div>
    </div>
</template>
<script>
import TagItem from "./TagItem.vue";
export default {
    name:"TagsContainer",
    props:["tagsList"],
    components:{TagItem}
}
</script>
<style scoped>
#tags-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 40px;
}
</style>