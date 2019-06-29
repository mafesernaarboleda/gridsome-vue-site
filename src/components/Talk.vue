<template>
  <div class="item">
    <a :href="item.url" target="_blank">
      <g-image :src="item.imageUrl" width="170px" height="150px"/>
    </a>
  </div>
</template>

<script>
  export default {
    props: ['item']
  };
</script>

<style>
.item {
  box-sizing: border-box;
  position: relative;
  border-radius: 6px;
  padding: 15px 10px;
}
.item img {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.5);
  margin: auto;
  width: 170px;
  height: 150px;
  border-radius: 6px;
}
.item img:hover {
  transform: scale(1.1);
  transition: all 1s ease-in-out 0s;
}
.item img:not(:hover) {
  transition: all 1s ease-in-out 0s;
}
</style>