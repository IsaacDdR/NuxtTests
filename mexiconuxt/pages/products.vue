<template>
  <div class="container mx-auto my-5">
    <h1 class="font-bold text-xl text-center">Mountains</h1>
    <button @click="showMountains">Show</button>

    <NuxtLink to="/" class="text-left text-grey-600 hover-underline">
      Home
    </NuxtLink>

    <LazyProductCard v-if="show" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showMountains() {
      this.show = true
    },
  },
}
</script>
