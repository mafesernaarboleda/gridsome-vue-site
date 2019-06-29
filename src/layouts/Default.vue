<template>
  <div class="layout">
    <div class="avatar">
      <g-image src="~/assets/avatar.jpg" width="132" height="132px"/>
    </div>
    <div class="content">
      <slot/>
    </div>
    <Social/>
  </div>
</template>

<script>
import Social from "~/components/Social.vue";
export default {
  components: {
    Social
  }
};
</script>

<style>
body {
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 18px;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: #FF5961;
  padding: 5px 10px;
  color: white;
  top: 0;
  left: 0;
  z-index: 1000;
}
.layout {
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
}
.avatar {
  width: 132px;
  position: fixed;
  height: 132px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc((50% + 115px) * -1));
  border-radius: 50%;
  overflow: hidden;
}
.content {
  height: calc(50% + 49px);
  transition: 1s;
  flex-direction: column;
  align-items: center;
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
}
</style>
