<template>
  <main id="primary" class="site-main">
    <div class="content-title contato">
      <div class="w-container">
        <h1 class="entry-title title color-white">
          {{ title }}
        </h1>
      </div>
    </div>

    <div class="section-4">
      <div class="w-container">
        <div class="w-row">
          <div v-for="category in categories" :key="category.id" class="w-col w-col-3 w-col-medium-6 w-col-small-6">
            <a :href="`/suporte/${category.slug}`" class="card-link w-inline-block">
              <div class="content content-card">
                <h2 class="heading-10">{{ category.name }}</h2>
                <div class="barra" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main><!-- #main -->
</template>

<script>
export default {
  layout: 'page',
  async asyncData ({ $axios }) {
    try {
      const result = await $axios.$get('/wp-json/wp/v2/categories?parent=2&_fields=id,description,name,slug')
      const categories = result
      return {
        categories,
        title: 'Suporte'
      }
    } catch (error) {
    }
  },
  head () {
    return {
      title: this.title + ' | ' + process.env.nameApp,
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
