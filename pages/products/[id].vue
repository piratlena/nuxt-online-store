<template>
  <div>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const urlProduct = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(urlProduct, { key: id });

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
