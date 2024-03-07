<script setup>
  import Contact from './Contact.vue'
  import Habilities from './Habilities.vue'
  import Education from './Education.vue'
  import WorkExperience from './WorkExperience.vue'
  import { useStore } from '../store/piniaStore.js'
  const store = useStore()
  defineProps({
    steps: Array,
  })
</script>

<template>
  <div class="w-[95%] mx-auto flex md:w-full md:mx-0">
    <Contact :title="steps[0]" v-if="store.selectedStep === steps[0].id" />
    <Habilities :title="steps[1]" v-if="store.selectedStep === steps[1].id" />
    <Education :title="steps[2]" v-if="store.selectedStep === steps[2].id" />
    <WorkExperience :title="steps[3]" v-if="store.selectedStep === steps[3].id" />
  </div>
</template>

<style scoped>
</style>
