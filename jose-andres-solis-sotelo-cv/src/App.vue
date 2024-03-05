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
  <div class="w-full flex justify-center flex-col h-auto bg-[rgb(252,245,242)] sm:flex-row sm:h-screen">
    <AboutMe />
    <div
      class="flex flex-col w-full h-auto max-w-full max-h-auto mr-5 mb-5 sm:h-screen sm:mb-0 sm:max-h-screen sm:max-w-screen-minus-30">
      <StepByStep :steps="listOfSteps"/>
      <Specifications :steps="listOfSteps" />
    </div>
  </div>
</template>

<style scoped>
</style>
