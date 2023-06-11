<template>
  <div
    class="absolute left-0 right-0 top-0 bottom-0 w-full h-[100vh] z-10 bg-gray-300/50'"
  >
    <form
      class="absolute top-4 left-0 mx-auto right-0 w-[30%] bg-white z-20 rounded shadow-md flex items-center justify-between"
    >
      <FontAwesomeIcon class="text-black pr-1 pl-2" />
      <input
        type="text"
        placeholder="Search products..."
        class="px-1 text-lg text-black outline-0 h-[35px] w-full focus:outline-none"
      />
      <input
        class="bg-black h-[35px] px-3 rounded-r hover:bg-gray-700 transition cursor-pointer"
        type="submit"
        value="Find"
      />
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
