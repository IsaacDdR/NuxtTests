<template>
  <div class="">
    <button @click="$fetch">Refresh</button>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-for="mountain in mountains" :key="mountain.title" class="">
      <div class="">
        <img class="" :src="mountain.image" alt="" />
      </div>
      <div class="">
        <div class="">
          {{ mountain.continent }}
        </div>
        <NuxtLink :to="mountain.slug" class="">
          {{ mountain.title }}
        </NuxtLink>
        <p class="">
          {{ mountain.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mountains: [],
    }
  },
  async fetch() {
    this.mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then((res) => res.json())
  },
}
</script>
