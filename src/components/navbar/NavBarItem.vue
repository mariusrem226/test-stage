<template>
  <li v-bind:id="'link-' + id" class="">
    <router-link class="link" v-bind:to="'/' + id">
      <img
        v-bind:id="'img-' + id"
        v-bind:src="require('../../assets/' + image)"
        alt=""
      />
      <span>{{ name }}</span></router-link
    >
  </li>
</template>

<script>
export default {
  name: "NavBarItem",
  props: ["id", "image", "name"],
};
</script>

<style scoped>
.selected {
  background: rgb(255, 165, 2, 0.2);
  border-radius: 10px;
}
.selected span {
  color: #ffa502;
}
.selected img {
  filter: invert(56%) sepia(80%) saturate(1158%) hue-rotate(2deg)
    brightness(108%) contrast(101%);
}
.link {
  display: flex;
  align-items: center;
  color: #222455;
  text-decoration: none; 
  border-radius: 10px;
  background: transparent;
 
  transition: background 0.3s ease-in-out;
}
.link:hover{
  background:#F5F6F9;

}
.link > * {
  padding: 0px 3px 0px 3px;
}
.link span {
  line-height: 30px;
}
.link img {
  width: 20px;
}
</style>