<template>
  <div>
    <h1>Blog posts</h1>
    <pre>{{ mountain }}</pre>
  </div>
</template>
<script>
export default {
  async asyncData({ params, $axios }) {
    const mountain = await $axios.$get(
      `https://api.nuxtjs.dev/mountains/${params.slug}`
    )
    return { mountain }
  },
}
</script>
