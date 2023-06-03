<template>
  <div>
    <header class="shadow-sm w-screen bg-[#221f1f] fixed z-10 top-0 h-[50px]">
      <nav
        class="container max-w-[1240px] mx-auto p-4 flex justify-between text-white"
      >
        <NuxtLink
          to="/"
          class="font-bold"
          >Nuxt Store</NuxtLink
        >
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li>
            <NuxtLink
              to="/about"
              class=""
              >About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/products"
              class="btn"
              >Products</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-[80px]">
      <slot />
    </div>

    <footer
      class="container mx-auto p-4 flex justify-between border-t-2 bg-[#221f1f]"
    >
      <div class="mx-auto text-sm sm:text-base text-white">
        <div className="max-w-[1240px] mx-auto py-2 text-sm sm:text-base">
          <div className="flex justify-center">
            <NuxtLink
              to="https://github.com/piratlena"
              className="capitalize border-b  text-base hover:text-gray-300 transition"
            >
              view source code on github
            </NuxtLink>
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className="text-center">
              © Copyright 2023 Nuxt Shop | All Rights Reserved
            </p>
            <NuxtLink className="hover:text-gray-300 transition">
              Created by Elena Brazhnikova
            </NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
