<script setup>
  import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
  import { useStore } from '../store/piniaStore.js'
  import skills from '../api/skills-text.json'

  // Variables
  const store = useStore()
  const items = ref([
    { titleEsp: 'Desarrollo Front-End', titleIng: 'Front-End Development', contentEsp: '<span>· HTML5</span><span>· Responsive Design</span><span>· CSS3 (Bootstrap v. 4, Tailwind)</span><span>· Javascript (v. 8.4.371.23)</span><span>· JQuery (v. 1.10.2)</span>', contentIng: '<span>· HTML5</span><span>· Responsive Design</span><span>· CSS3 (Bootstrap v. 4, Tailwind)</span><span>· Javascript (v. 8.4.371.23)</span><span>· JQuery (v. 1.10.2)</span>', expanded: false },
    { titleEsp: 'Desarrollo Back-End', titleIng: 'Back-End Development', contentEsp: '<span>· Consumo de API\'s</span><span>· Firebase (Cloud functions, emulator)</span><span>· MySQL</span><span>· PostgreSQL</span><span>· Python (v. 7.3)</span><span>· PHP (v. 7.2.14)</span>', contentIng: '<span>· API RESTful\'s</span><span>· Firebase (Cloud functions, emulator)</span><span>· MySQL</span><span>· PostgreSQL</span><span>· Python (v. 7.3)</span><span>· PHP (v. 7.2.14)</span>', expanded: false },
    { titleEsp: 'Frameworks', titleIng: 'Frameworks', contentEsp: '<span>· Vue js 3 (Vite, Moti, Headless UI)</span><span>· Expo (SDK 46)</span><span>· Angular</span><span>· Laravel</span>', contentIng: '<span>· Vue js 3 (Vite, Moti, Headless UI)</span><span>· Expo (SDK 46)</span><span>· Angular</span><span>· Laravel</span>', expanded: false },
    { titleEsp: 'Desarrollo Móvil', titleIng: 'Mobile Development', contentEsp: '<span>· React Native (v. 0.7)</span><span>· Flutter (v. 3.3.4)</span>', contentIng: '<span>· React Native (v. 0.7)</span><span>· Flutter (v. 3.3.4)</span>', expanded: false },
    { titleEsp: 'Repositorios', titleIng: 'Repositories', contentEsp: '<span>· Github</span><span>· Bitbucket</span>', contentIng: '<span>· Github</span><span>· Bitbucket</span>', expanded: false },
    { titleEsp: 'Automatización de procesos', titleIng: 'Process automation', contentEsp: '<span>· Selenium</span><span>· Python con librería Pandas para lectura y generación de reportes automáticos en Excel</span>', contentIng: '<span>· Selenium</span><span>· Use of Python with Pandas\' library to write and generate automatic reports in Excel</span>', expanded: false },
    { titleEsp: 'Wordpress', titleIng: 'Wordpress', contentEsp: '<span>· Implementación de E-comerce</span><span>· Administración del panel</span><span>· Creación de interfaces con el módulo de bloques</span>', contentIng: '<span>· E-comerce implementation</span><span>· Control pannel administration</span><span>· Interfaces development with blocks module</span>', expanded: false }
  ])
  const softSkillsTitle = skills[0].listOfSoftSkills
  const softSkillsEsp = skills[0].listOfSoftSkills.esp.list
  const softSkillsIng = skills[0].listOfSoftSkills.eng.list
  const techSkills = skills[0].listOfTechnicalSkills.title
  const itemsPerPageMd = 3
  const itemsPerPageSm = 2
  const currentPosition = ref(0)
  const isSmOrLarger = ref(false)
  // Functions
  const scrollLeft = () => {
    if (isSmOrLarger.value) {
      currentPosition.value -= itemsPerPageMd
    } else {
      currentPosition.value -= itemsPerPageSm
    }
  }

  const scrollRight = () => {
    if (isSmOrLarger.value) {
      currentPosition.value += itemsPerPageMd
    } else {
      currentPosition.value += itemsPerPageSm
    }
  }

  const resetPosition = (newValue) => {
    currentPosition.value = newValue
  }
  
  const obtainReverseIndexLg = (index) => {
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

  const obtainReverseIndexSm = (index) => {
    const position = index
    const numberOfCards = position / 2
    let decimalPart = numberOfCards.toString()
    let newPosition = ''
    let pointIndex = decimalPart.indexOf('.')
    if (pointIndex !== -1 && pointIndex < decimalPart.length - 1) {
        newPosition = decimalPart[pointIndex + 1]
    } else {
      newPosition = 0;
    }
    let showedCards = 0
    if (parseInt(newPosition) === 5) {
      showedCards = index - 1
    }
    if (newPosition === 0) {
      showedCards = index - 2
    }
    return showedCards
  }
  // Watchers
  watch(currentPosition, (newValue) => {
    if (newValue > items.value.length) {
      resetPosition(0)
    }
    if (newValue < 0) {
      const showedCards = isSmOrLarger.value ? obtainReverseIndexLg(items.value.length + 1) : obtainReverseIndexSm(items.value.length)
      resetPosition(showedCards)
    }
  })
  // Computed
  const visibleItemsLg = computed(() => {
    let start = currentPosition.value
    let end = currentPosition.value + itemsPerPageMd
    if (start <= items.value.length) {
      return items.value.slice(start, end)
    } else {
      start = 0
      end = start + itemsPerPageMd
      return items.value.slice(start, end)
    }
  })
  const visibleItemsSm = computed(() => {
    let start = currentPosition.value
    let end = currentPosition.value + itemsPerPageSm
    if (start <= items.value.length) {
      return items.value.slice(start, end)
    } else {
      start = 0
      end = start + itemsPerPageSm
      return items.value.slice(start, end)
    }
  })
  // onMounted
  onMounted(() => {
    isSmOrLarger.value = window.innerWidth >= 640
    window.addEventListener('resize', handleResize)
  });

  const handleResize = () => { 
    isSmOrLarger.value = window.innerWidth >= 640
  };
  // onUnmounted
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
  // Props
  defineProps({
    title: Object,
  })
</script>

<template>
  <div class="max-h-auto w-full flex flex-col bg-[#eb7f96] text-white p-4 rounded-xl self-center lg:max-h-screen-minus-72">
    <div class="w-full flex space-x-3">
      <font-awesome-icon :icon="title.iconName" class="mt-auto mb-auto"/>
      <h1 class="text-base font-semibold mt-auto mb-auto lg:text-xl">
        {{ store.spanish ? title.name : title.englishName }}
      </h1>
    </div>
    <div class="w-full ml-0 mt-2 overflow-hidden lg:ml-4">
      <div class="w-full flex flex-col">
        <h2 class="text-sm font-bold underline underline-offset-4 lg:text-base">{{ store.spanish ? softSkillsTitle.esp.title : softSkillsTitle.eng.title }}</h2>
        <p class="grid grid-cols-3 gap-2 ml-4 mt-2 mb-2 text-xs lg:text-base">
          <div v-if="store.spanish" v-for="(skill, index) in softSkillsEsp" :key="index"> <span>{{ skill }}</span></div>
          <div v-if="!store.spanish" v-for="(skill, index) in softSkillsIng" :key="index"> <span>{{ skill }}</span></div>
        </p>
        <h2 class="font-bold underline underline-offset-4 mb-3 text-sm lg:text-base">{{ store.spanish ? techSkills.esp : techSkills.eng }}</h2>
        <div class="w-[100%] h-9 flex justify-center self-center mb-2 ml-0 mr-0 lg:ml-12 lg:mr-8">
          <div @click="scrollLeft" class="w-9 h-9 mr-5 flex text-center justify-center items-center bg-gradient-to-b from-red-400 to-pink-500 rounded-full transition duration-1000 ease-in-out hover:cursor-pointer">
            <font-awesome-icon icon="arrow-left" class="text-bold text-xl text-center hover:text-2xl"/>
          </div>
          <div @click="scrollRight" class="w-9 h-9 ml-5 flex text-center justify-center items-center bg-gradient-to-b from-red-400 to-pink-500 rounded-full transition duration-1000 ease-in-out hover:cursor-pointer">
            <font-awesome-icon icon="arrow-right" class="text-bold text-xl text-center hover:text-2xl" />
          </div>
        </div>
        <div class="flex x-full overflow-hidden lg:w-[97%]">
          <div class="flex transition-transform duration-700 ease-in-out w-full -translate-x-{{ currentPosition }}">
            <div
              v-if="isSmOrLarger"
              v-for="(item, index) in visibleItemsLg" 
              :key="`${index}lg`" 
              class="w-1/3 h-[280px] flex flex-col p-4 ml-4 rounded-md bg-gradient-to-b from-red-400 to-pink-500">
              <h3 class="font-medium text-xs mb-2 lg:text-sm">{{ store.spanish ? item.titleEsp : item.titleIng }}</h3>
              <div v-html="store.spanish ? item.contentEsp : item.contentIng" class="w-full h-auto flex flex-col space-y-2 text-xs lg:text-sm"></div>
            </div>
            <div
              v-else
              v-for="(item, index) in visibleItemsSm" 
              :key="`${index}sm`" 
              class="w-1/2 h-[280px] flex flex-col p-4 ml-2 rounded-md bg-gradient-to-b from-red-400 to-pink-500 lg:ml-1">
                <h3 class="font-medium text-xs mb-2 lg:text-sm">{{ store.spanish ? item.titleEsp : item.titleIng }}</h3>
                <div v-html="store.spanish ? item.contentEsp : item.contentIng" class="w-full h-auto flex flex-col space-y-2 text-xs lg:text-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
