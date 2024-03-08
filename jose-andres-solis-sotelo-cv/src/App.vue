<script setup>
import AboutMe from './components/AboutMe.vue'
import Specifications from './components/Specifications.vue'
import StepByStep from './components/StepByStep.vue'
// Variables
let listOfSteps = [
  { id: 0, idName: 'contacto', name: 'Contacto', englishName: 'Contact', iconName: 'user'},
  { id: 1, idName: 'habilidades', name: 'Habilidades', englishName: 'Skills', iconName: 'gear'},
  { id: 2, idName: 'formacion-academica', name: 'Formación Académica', englishName: 'Education', iconName: 'graduation-cap'},
  { id: 3, idName: 'experiencia-laboral', name: 'Experiencia Laboral', englishName: 'Work Experience', iconName: 'briefcase'}
]
</script>

<template>
  <div class="w-full flex justify-center flex-col h-full bg-[rgb(252,245,242)] lg:flex-row lg:h-screen">
    <AboutMe />
    <div
      class="flex flex-col w-full h-auto max-w-full max-h-auto mr-5 mb-5 lg:h-screen lg:mb-0 lg:max-h-screen lg:max-w-screen-minus-30">
      <StepByStep :steps="listOfSteps"/>
      <Specifications :steps="listOfSteps" />
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: rgb(252,245,242)
}
</style>
