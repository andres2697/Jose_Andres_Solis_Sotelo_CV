<script setup>
import AboutMe from './components/AboutMe.vue'
import Specifications from './components/Specifications.vue'
import StepByStep from './components/StepByStep.vue'
// Variables
let listOfSteps = [
  { id: 0, idName: 'contacto', name: 'Contacto', iconName: 'user'},
  { id: 1, idName: 'habilidades', name: 'Habilidades', iconName: 'gear'},
  { id: 2, idName: 'formacion-academica', name: 'Formación Académica', iconName: 'graduation-cap'},
  { id: 3, idName: 'experiencia-laboral', name: 'Experiencia Laboral', iconName: 'briefcase'}
]
</script>

<template>
  <div class="w-full flex justify-center flex-row h-screen bg-[rgb(252,245,242)]">
    <AboutMe />
    <div class="flex flex-col w-full  h-screen max-h-screen mr-5" :style="{ maxWidth: `calc(100% - 30rem)` }">
      <StepByStep :steps="listOfSteps"/>
      <Specifications :steps="listOfSteps" />
    </div>
  </div>
</template>

<style scoped>
</style>
