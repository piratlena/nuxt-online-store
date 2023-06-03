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

    <footer class="bg-grey-dark-1 text-white">
      <div class="max-w-[1240px] mx-auto py-2 text-sm sm:text-base">
        <div className="max-w-[1240px] mx-auto py-2 text-sm sm:text-base">
          <div className="flex justify-center">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="capitalize border-b mb-3 text-base hover:text-gray-300 transition"
            >
              view source code on github
            </a>
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className="text-center">
              © Copyright 2023 Nuxt Shop | All Rights Reserved
            </p>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 transition"
            >
              Created by Elena Brazhnikova
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style>
.router-link-exact-active {
  color: #12b488;
}
</style>
