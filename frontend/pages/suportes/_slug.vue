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
                {{ title_render }}
              </h2>
              <div class="div-block-6" />
              <div v-if="content">
                <!-- eslint-disable vue/no-v-html -->
                <div v-html="content" />
                <!-- eslint-enable -->
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
      const result = await $axios.$get(`/wp-json/wp/v2/suportes?_fields=id,date,title,slug,content,categories&slug=${params.slug}`)
      const data = await Promise.all([categories, result])
      const _categories = data[0]
      let _post = data[1]
      _post = _post[0]
      let categoryname = ''

      for (const c in _categories) {
        _categories[c].class = ''
        if (_post.categories.includes(_categories[c].id)) {
          categoryname = _categories[c].name
          _categories[c].class = 'link-item-current'
        }
      }
      return {
        categories: _categories,
        post: _post,
        title: _post.title.rendered,
        content: _post.content.rendered,
        slug: params.slug,
        categoryname
      }
    } catch (error) {
    }
  },
  head () {
    return {
      title: this.title_render + ' | ' + this.categoryname + ' | ' + process.env.nameApp,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Página ' + this.title_render + ' | ' + this.categoryname + ' | ' + process.env.nameApp + ' ' + process.env.descriptionApp
        }
      ]
    }
  },
  computed: {
    title_render () {
      return this.$helpers.decode(this.title)
    }
  }
}
</script>
