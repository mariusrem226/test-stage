<template>
  <div id="new-car-page-container">
    <div class="car-card">
      <h1>{{ car.name }}</h1>
      <p>{{ car.description }}</p>
      <div class="item-container">
        <TagItem v-for="tag in car.tags" v-bind:name="tag" v-bind:key="tag" />
      </div>
    </div>
  </div>
</template>

<script>
import TagItem from "../components/TagItem.vue";
export default {
  mounted() {
    console.log(this.car);
  },
  name: "NewCarPage",
  props: ["car"],
  components: { TagItem },
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