<script lang="ts" setup>
import Header from '~~/components/topHeader.vue'
import Footer from '~~/components/bottomFooter.vue'
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped></style>
