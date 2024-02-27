<script setup>
  import { useStore } from '../store/piniaStore.js'
  // Variables
  defineProps({
    steps: Array,
  })
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
</script>

<template>
  <div class="w-full h-25 flex justify-center">
    <div class="w-full flex flex-col align-top items-center justify-around self-center">
      <ul role="list" class="flex w-full list-none justify-around">
        <li 
          v-for="(step, index) in steps" :key="index" @mouseenter="stepChanged(index, step.idName)"
          class="transition ease-in-out delay-100 my-4 p-2 text-black hover:cursor-pointer"
          :class="index === store.selectedStep ? active : ''">
          <font-awesome-icon :icon="step.iconName" />
          {{ step.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>
