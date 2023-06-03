<template>
  <div
    class="w-[300px] h-[400px] shadow-md mt-[10px] border relative rounded-lg transition-all duration-300 sm:mr-[5px] sm:ml-[5px] productCard"
  >
    <NuxtLink :to="`/products/${product.id}`">
      <img
        :src="product.image"
        alt="product thumb"
        class="w-[100px] m-auto mt-[50px]"
      />
    </NuxtLink>

    <div class="absolute left-0 right-0 top-[250px] text-center">
      {{ product.title }}
    </div>
    <div
      class="absolute left-0 right-0 bottom-[45px] flex justify-between items-center"
    >
      <span class="ml-4 text-xl">{{ product.price }}</span>
      <button>
        <div class="relative">
          <font-awesome-icon
            :icon="['fas', 'cart-shopping']"
            class="text-2xl mr-6"
          />
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped></style>
