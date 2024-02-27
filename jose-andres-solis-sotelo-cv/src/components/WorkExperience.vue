<script setup>
  // Variables
  defineProps({
    title: Object,
  })
</script>

<template>
  <div class="w-full h-fit flex flex-col bg-[#ec879d] text-white p-4 rounded-xl  self-center">
    <div class="w-full flex mb-2 space-x-3">
      <font-awesome-icon :icon="title.iconName" class="mt-auto mb-auto"/>
      <h1 class="text-xl font-semibold mt-auto mb-auto">{{ title.name }}</h1>
    </div>
    <div class="w-full ml-4 ">
      <div class="w-full">
        Contact Work Experience
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
