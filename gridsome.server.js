// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')


module.exports = function (api) {
  api.loadSource(async store => {
    const {
      data
    } = await axios.get('https://scrapp-slide.herokuapp.com/api/scrap/find/mafeserna')
    // Create a new GraphQL content type
    const posts = store.addContentType({
      typeName: 'Talks'
    })

    // Add data to the new content type
    data.map((item) => {
      posts.addNode({
        id: item.id,
        url: 'https://slides.com' + item.url,
        slug: item.slug,
        viewCount: item.viewCount,
        imageUrl: item.imageUrl,
        description: item.description
      })
    })
  })
}