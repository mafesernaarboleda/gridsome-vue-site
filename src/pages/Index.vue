<template>
  <Layout>
    <div class="description">
      <h1>{{data.headLine}}</h1>
      <p>{{data.about}}</p>
      <h3>{{data.rol}}</h3>
      <p>{{data.experience}}</p>
    </div>
  </Layout>
</template>

<script>
import data from '~/data/info.json'
export default {
  metaInfo: {
    title: "About Me"
  },
  data () {
    return {
      data
    }
  }
};
</script>

<style>
.description {
  width: 70%;
  text-align: center
}
</style>
