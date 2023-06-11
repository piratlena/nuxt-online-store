<template>
  <div>
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "~/components/layout/TheHeader.vue";
import TheFooter from "~/components/layout/TheFooter.vue";
</script>
