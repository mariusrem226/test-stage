<template>
  <div id="new-car-page-container">
    <div class="car-card">
      <h1>{{ car.name }}</h1>
      <p>{{ car.description }}</p>
     <TagsContainer :tagsList="car.tags"/>
    </div>
  </div>
</template>

<script>
import TagsContainer from "../components/tag/TagsContainer.vue";
export default {
  
  name: "NewCarPage",
  props: ["car"],
  components: { TagsContainer },
};
</script>

<style scoped>
#new-car-page-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.car-card{
    max-width: 80%;
    margin-top: 50px;
    padding: 20px;
    background: white;
    border: 1px solid grey;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
}
.item-container {
  display: flex;
}
</style>