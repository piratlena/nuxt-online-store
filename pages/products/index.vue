<template>
  <div
    class="container mb-[20px] mt-[60px] max-w-[1240px] flex flex-col justify-center items-center xl:flex xl:justify-center xl:flex-row xl:items-start mx-auto transition-all flex-auto"
  >
    <div class="w-4/5 flex flex-wrap md:w-full xl:ml-[20px]">
      <div v-for="product in products">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");

useHead({
  title: "Nuxt Store | Online Store",
  meta: [{ name: "description", content: "Nuxt 3 Store" }],
});
</script>

<style lang="scss" scoped></style>
