<script setup>
  import { useStore } from '../store/piniaStore.js'
  // Variables
  const store = useStore()
  const active = 'text-purple-active'
  // Functions
  const stepChanged = (index, name) => {
    store.setSelectedStep(index)
    const element = document.getElementById(name)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start' // Posición del elemento en la ventana
      })
    }
  }
  defineProps({
    steps: Array,
  })
</script>

<template>
  <div class="w-full h-20 flex justify-center md:h-25">
    <div class="w-full flex flex-col align-top items-center justify-around self-center">
      <ul role="list" class="grid grid-cols-4 gap-4 w-full list-none text-center md:flex md:justify-around md:text-start">
        <li 
          v-for="(step, index) in steps" :key="index" @click="stepChanged(index, step.idName)"
          class="flex flex-col items-center self-center transition ease-in-out delay-100 my-4 p-2 text-black text-xs hover:cursor-pointer md:text-base md:flex-row"
          :class="index === store.selectedStep ? active : ''"
        >
          <font-awesome-icon :icon="step.iconName" class="mr-0 md:mr-2"/>
          {{ step.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>
