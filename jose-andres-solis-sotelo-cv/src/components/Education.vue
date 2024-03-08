<script setup>
  import { useStore } from '../store/piniaStore.js'
  import educationList from '../api/education-text.json'
  // Variables
  const education = educationList[0]
  const store = useStore()
  defineProps({
    title: Object,
  })
</script>

<template>
  <div class="w-full h-fit flex flex-col bg-[#eb7f96] text-white p-4 rounded-xl  self-center">
    <div class="w-full flex mb-2 space-x-3">
      <font-awesome-icon :icon="title.iconName" class="mt-auto mb-auto" />
      <h1 class="text-base font-semibold mt-auto mb-auto lg:text-xl">
        {{ store.spanish ? title.name : title.englishName }}
      </h1>
    </div>
    <div class="w-full ml-0 mt-3 lg:ml-4">
      <div class="w-full ml-1 mr-4">
        <div class="w-full flex space-x-2 text-center mb-2">
          <font-awesome-icon icon="school" class="mt-auto mb-auto"/>
          <h2 class="text-sm font-semibold underline underline-offset-4 lg:text-base">{{ store.spanish ? education.lastDegree.title.esp : education.lastDegree.title.eng }}</h2>
        </div>
        <div class="ml-4 my-2">
          <h3 class="text-sm font-medium lg:text-base">
            {{ education.lastDegree.institution.name }}
          </h3>
          <span class="text-xs ml-4 lg:text-base">{{ store.spanish ? education.lastDegree.institution.description.esp : education.lastDegree.institution.description.eng }}</span>
        </div>
      </div>
      <div class="w-full ml-1 my-4">
        <div class="w-full flex space-x-2 text-center mb-2">
          <font-awesome-icon icon="language" class="mt-auto mb-auto"/>
          <h2 class="text-sm font-semibold underline underline-offset-4 lg:text-base">{{ store.spanish ? education.languajes.title.esp : education.languajes.title.eng }}</h2>
        </div>
        <div class="w-100% flex flex-col my-2 lg:flex-row">
          <div class="w-full ml-4 lg:w-[75%]">
            <h3 class="text-sm font-medium text lg:text-base">
              {{ store.spanish ? education.languajes.language[1].english.esp : education.languajes.language[1].english.eng }}
            </h3>
            <h3 class="ml-4 text-sm font-medium text lg:text-base">
              {{ education.languajes.language[1].english.institutions[0].name }}
            </h3>
            <div class="ml-8 mt-2 text-xs lg:text-base lg:mt-0">
              {{ store.spanish ? education.languajes.language[1].english.institutions[0].description.esp : education.languajes.language[1].english.institutions[0].description.eng }}
            </div>
            <div class="w-[90%] ml-4 mt-2 lg:w-full">
              <h3 class="text-sm font-medium lg:text-base">
                {{ education.languajes.language[1].english.institutions[1].name }}
              </h3>
            </div>
            <div class="ml-8 mt-2 text-xs lg:text-base lg:mt-0">
              {{ store.spanish ? education.languajes.language[1].english.institutions[1].description.esp : education.languajes.language[1].english.institutions[1].description.eng }}
            </div>
          </div>
          <div class="w-full mx-4 lg:w-[25%]">
            <h3 class="text-sm font-medium text lg:text-base">
              {{ store.spanish ? education.languajes.language[0].spanish.esp : education.languajes.language[0].spanish.eng }}
            </h3>
            <div class="text-xs ml-4 lg:text-base">{{ store.spanish ? education.languajes.language[0].spanish.description.esp : education.languajes.language[0].spanish.description.eng }}</div>
          </div>
        </div>
      </div>
      <div class="w-full ml-1">
        <div class="w-full flex space-x-2 text-center mb-2">
          <font-awesome-icon icon="certificate" class="mt-auto mb-auto"/>
          <h2 class="text-sm font-semibold underline underline-offset-4 lg:text-base">
            {{ store.spanish ? education.courses.title.esp : education.courses.title.eng }}
          </h2>
        </div>
        <div class="ml-4 my-2">
          <h3 class="text-sm font-medium text lg:text-base">
            {{ store.spanish ? education.courses.coursesList[0].courseName.esp : education.courses.coursesList[0].courseName.eng }}
          </h3>
          <span class="ml-4 text-xs lg:text-base">
            {{ store.spanish ? education.courses.coursesList[0].description.esp : education.courses.coursesList[0].description.eng }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
