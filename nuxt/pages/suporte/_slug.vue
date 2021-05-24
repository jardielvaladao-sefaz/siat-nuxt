<template>
  <main id="primary" class="site-main">
    <div class="content-title contato">
      <div class="w-container">
        <h1 class="entry-title title color-white">
          Suporte
        </h1>
      </div>
    </div>

    <div class="section-4">
      <div class="container-fluid">
        <div class="w-row">
          <div class="w-col w-col-3 w-col-medium-3 w-col-small-3">
            <div class="div-block-5">
              <div class="form-block-2 w-form">
                <form id="wf-form-Search-Form" name="s" data-name="busca" method="get" class="search">
                  <input
                    id="search"
                    type="text"
                    class="search-input w-input"
                    maxlength="256"
                    name="search"
                    data-name="search"
                    placeholder="Pesquisar..."
                  ><input type="submit" value="" data-wait="Please wait..." class="search-button w-button">
                </form>
              </div>
              <div class="menu-lateral">
                <h3 class="heading-8">
                  Categorias
                </h3>
                <ul role="list" class="list-3 w-list-unstyled">
                  <li v-for="category in categories" :key="category.id">
                    <a :href="`/suporte/${category.slug}`" :class="`link-item ${category.class}`">{{ category.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-clearfix w-col w-col-9 w-col-medium-9 w-col-small-9">
            <div class="content content-box">
              <h2 class="heading-9">
                {{ title }}
              </h2>
              <div class="div-block-6" />
              <div v-if="posts.length > 0">
                <div v-for="post in posts" :key="post.id">
                  <a :href="`/suportes/${post.slug}`" class="link-item ">{{ $helpers.decode(post.title.rendered) }}</a>
                </div>
              </div>
              <div v-else>
                <p>Nenhum registro encontrado!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main><!-- #main -->
</template>

<script>
export default {
  layout: 'page',
  async asyncData ({ params, $axios }) {
    try {
      const categories = await $axios.$get('/wp-json/wp/v2/categories?parent=2&_fields=id,description,name,slug')
      let slugid = 1
      let title = 'Suporte'
      for (const c in categories) { // mais rapido do que fazer um axios.get na categoria current
        categories[c].class = ''
        if (categories[c].slug === params.slug) {
          slugid = categories[c].id
          title = categories[c].name
          categories[c].class = 'link-item-current'
        }
      }
      const posts = await $axios.$get(`/wp-json/wp/v2/suportes?_fields=id,title,slug,categories&categories=${slugid}&status=publish`)
      const data = await Promise.all([categories, posts])
      const _categories = data[0]
      const _posts = data[1]
      return {
        categories: _categories,
        posts: _posts,
        title,
        slug: params.slug
      }
    } catch (error) {
    }
  },
  head () {
    return {
      title: this.title + ' | Suporte | ' + process.env.nameApp,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Página ' + this.title + ' | ' + process.env.nameApp + ' ' + process.env.descriptionApp
        }
      ]
    }
  }
}
</script>
