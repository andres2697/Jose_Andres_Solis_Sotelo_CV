<script setup>
  import { ref, computed, watch } from 'vue';
  // Variables
    const items = ref([
    { title: 'Desarrollo Front-End', content: '<span>· HTML5</span><span>· Responsive Design</span><span>· CSS3 (Bootstrap v. 4, Tailwind)</span><span>· Javascript (v. 8.4.371.23)</span><span>· JQuery (v. 1.10.2)</span>', expanded: false },
    { title: 'Desarrollo Back-End', content: '<span>· Consumo de API\'s</span><span>· Firebase (Cloud functions, emulator)</span><span>· MySQL</span><span>· PostgreSQL</span><span>· Python (v. 7.3)</span><span>· PHP (v. 7.2.14)</span>', expanded: false },
    { title: 'Frameworks', content: '<span>· Vue js 3 (Vite, Moti, Headless UI)</span><span>· Expo (SDK 46)</span><span>· Angular</span><span>· Laravel</span>', expanded: false },
    { title: 'Desarrollo Móvil', content: '<span>· React Native (v. 0.7)</span><span>· Flutter (v. 3.3.4)</span>', expanded: false },
    { title: 'Repositorios', content: '<span>· Github</span><span>· Bitbucket</span>', expanded: false },
    { title: 'Automatización de procesos', content: '<span>· Selenium</span><span>· Python con librería Pandas para lectura y generación de reportes automáticos en Excel</span>', expanded: false },
    { title: 'Wordpress', content: '<span>· Implementación de E-comerce</span><span>· Administración del panel</span><span>· Creación de interfaces con el módulo de bloques</span>', expanded: false }
  ])
  const itemsPerPage = 3;
  const currentPosition = ref(0);
  // Functions
  const scrollLeft = () => {
    currentPosition.value -= itemsPerPage;
  }

  const scrollRight = () => {
    currentPosition.value += itemsPerPage;
  }

  const resetPosition = (newValue) => {
    currentPosition.value = newValue
  }
  
  const obtainReverseIndex = (index) => {
    const position = index - 1
    const numberOfCards = position / 3
    let decimalPart = numberOfCards.toString()
    let newPosition = ''
    let pointIndex = decimalPart.indexOf('.')
    if (pointIndex !== -1 && pointIndex < decimalPart.length - 1) {
        newPosition = decimalPart[pointIndex + 1]
    } else {
      newPosition = 0;
    }
    let showedCards = 0
    if (parseInt(newPosition) === 6) {
      showedCards = index - 1
    }
    if (parseInt(newPosition) === 3) {
      showedCards = index - 2
    }
    if (newPosition === 0) {
      showedCards = index - 3
    }
    return showedCards
  }
  // Watchers
  watch(currentPosition, (newValue) => {
    if (newValue > items.value.length) {
      resetPosition(0)
    }
    if (newValue < 0) {
      const showedCards = obtainReverseIndex(items.value.length + 1)
      resetPosition(showedCards)
    }
  })
  // Computed
  const visibleItems = computed(() => {
    let start = currentPosition.value
    let end = currentPosition.value + itemsPerPage
    if (start <= items.value.length) {
      return items.value.slice(start, end)
    } else {
      start = 0
      end = start + itemsPerPage
      return items.value.slice(start, end)
    }
  })
  // Props
  defineProps({
    title: Object,
  })
</script>

<template>
  <div class="max-h-screen-minus-72 w-full flex flex-col bg-[#eb7f96] text-white p-4 rounded-xl self-center">
    <div class="w-full flex space-x-3">
      <font-awesome-icon :icon="title.iconName" class="mt-auto mb-auto"/>
      <h1 class="text-lg font-semibold mt-auto mb-auto">{{ title.name }}</h1>
    </div>
    <div class="w-full ml-4 mt-2 overflow-hidden">
      <div class="w-full flex flex-col">
        <h2 class="font-bold underline underline-offset-4">Habilidades Blandas</h2>
        <p class="grid grid-cols-3 gap-2 ml-4 mt-2 mb-2">
          <span>Trabajo en Equipo</span>
          <span>Responsable</span>
          <span>Proactivo</span>
          <span>Liderazgo</span>
          <span>Buena organización</span>
          <span>Pensamiento crítico</span>
        </p>
        <h2 class="font-bold underline underline-offset-4 mb-3">Habilidades Técnicas</h2>
        <div class="w-[100%] h-9 flex justify-center self-center mb-2 ml-12 mr-8">
          <div @click="scrollLeft" class="w-9 h-9 mr-5 flex text-center justify-center items-center bg-gradient-to-b from-red-400 to-pink-500 rounded-full transition duration-1000 ease-in-out hover:cursor-pointer">
            <font-awesome-icon icon="arrow-left" class="text-bold text-xl text-center hover:text-2xl"/>
          </div>
          <div @click="scrollRight" class="w-9 h-9 ml-5 flex text-center justify-center items-center bg-gradient-to-b from-red-400 to-pink-500 rounded-full transition duration-1000 ease-in-out hover:cursor-pointer">
            <font-awesome-icon icon="arrow-right" class="text-bold text-xl text-center hover:text-2xl" />
          </div>
        </div>
        <div class="flex w-[97%] overflow-hidden">
          <div class="flex transition-transform duration-700 ease-in-out w-full -translate-x-{{ currentPosition }}">
            <div 
              v-for="(item, index) in visibleItems" 
              :key="index" 
              class="w-1/3 h-[280px] flex flex-col p-4 ml-4 rounded-md bg-gradient-to-b from-red-400 to-pink-500">
              <h3 class="font-medium text-sm mb-2">{{ item.title }}</h3>
              <div v-html="item.content" class="w-full h-auto flex flex-col space-y-2 text-sm"></div>
            </div>
          </div>
        </div>
        <div class="flex flex-col ml-4 space-y-1 mt-2 mb-4">
          
          <p>Wordpress</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
