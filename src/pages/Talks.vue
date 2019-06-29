<template>
  <Layout>
    <div class="talks">
      <h1> 👩🏻‍🏫 Some Talks... 👩🏻‍💻 </h1>
      <div class="carousel">
        <Talk v-for="edge in $page.talks.edges" :key="edge.node.id" :item="edge.node"/>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Talks {
  talks: allTalks {
    edges {
      node { 
        id
        imageUrl
        slug
        url
      }
    }
  }
}
</page-query>

<script>
import Talk from "~/components/Talk.vue";

export default {
  metaInfo: {
    title: "Talks"
  },
  components: {
    Talk
  }
};
</script>

<style>
.talks {
  width: 100%;
  text-align: center;
  align-items: center;
}
.carousel {
  position: relative;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
</style>