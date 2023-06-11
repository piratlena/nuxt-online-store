<template>
  <header class="bg-grey-dark-1 text-center text-white p-2">
    <div
      class="container text-lg flex justify-between items-center text-white h-[50px] max-w-[1240px] m-auto px-2"
    >
      <NuxtLink
        to="/"
        class="font-bold uppercase"
        >Nuxt Shop</NuxtLink
      >
      <SearchBox />

      <ul class="flex justify-between">
        <li class="cursor-pointer">
          <font-awesome-icon
            :icon="['fas', 'user']"
            class="text-2xl mr-[40px]"
          />
        </li>
        <li class="cursor-pointer">
          <font-awesome-icon
            :icon="['fas', 'cart-shopping']"
            class="text-2xl"
          />
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import SearchBox from "../SearchBox.vue";
</script>

<style scoped></style>
