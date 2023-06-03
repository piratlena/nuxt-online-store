<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
      dignissimos nihil et. Corrupti commodi eveniet odio fugit eos tempore
      illum. Recusandae beatae, voluptatibus quae delectus aliquam aperiam
      reiciendis ducimus temporibus!
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
