<script setup>
  import Contact from './Contact.vue'
  import Skills from './Skills.vue'
  import Education from './Education.vue'
  import WorkExperience from './WorkExperience.vue'
  import { useStore } from '../store/piniaStore.js'
  const store = useStore()
  defineProps({
    steps: Array,
  })
</script>

<template>
  <div class="w-[95%] mx-auto flex lg:w-full lg:mx-0">
    <Contact :title="steps[0]" v-if="store.selectedStep === steps[0].id" />
    <Skills :title="steps[1]" v-if="store.selectedStep === steps[1].id" />
    <Education :title="steps[2]" v-if="store.selectedStep === steps[2].id" />
    <WorkExperience :title="steps[3]" v-if="store.selectedStep === steps[3].id" />
  </div>
</template>

<style scoped>
</style>
