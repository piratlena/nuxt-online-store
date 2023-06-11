<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, aspernatur
      numquam perspiciatis doloremque facilis, praesentium nobis ipsum ducimus
      ullam assumenda exercitationem, laudantium quis quos cupiditate iste cum
      esse alias vero.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/USD");
</script>

<style scoped></style>
