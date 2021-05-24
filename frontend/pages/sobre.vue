<template>
  <main id="primary" class="site-main">
    <article class="page type-page status-publish has-post-thumbnail hentry">
      <div class="content-title">
        <div class="w-container">
          <h1 class="entry-title title color-white">
            {{ title }}
          </h1>
        </div>
      </div>

      <div class="content">
        <div class="w-container">
          <div class="entry-content">
            <div class="w-row">
              <div class="w-col w-col-5">
                <!-- eslint-disable vue/no-v-html -->
                <div v-html="content" />
                <!-- eslint-enable -->
              </div>
              <div class="w-col w-col-7">
                <div class="post-thumbnail">
                  <img
                    width="886"
                    height="609"
                    :src="`${image_src}/wp-content/uploads/2020/12/sobre_yume.png`"
                    class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt=""
                  >
                </div><!-- .post-thumbnail -->
              </div>
            </div>
          </div><!-- .entry-content -->
        </div>
      </div>
    </article><!-- #post-6 -->
  </main><!-- #main -->
</template>

<script>
export default {
  layout: 'page',
  async asyncData ({ $axios }) {
    try {
      const result = await $axios.$get('/wp-json/wp/v2/pages/?slug=sobre&_fields=id,date,link,title,content,excerpt,author')
      const page = result[0]
      return {
        page,
        title: page.title.rendered,
        content: page.content.rendered,
        image_src: $axios.defaults.baseURL
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
