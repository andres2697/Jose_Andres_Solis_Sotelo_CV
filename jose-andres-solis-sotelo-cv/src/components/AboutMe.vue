<script setup>
  import { useStore } from '../store/piniaStore.js'
  import aboutMeTextJson from '../api/about-me-text.json'
  // Variables
  const store = useStore()
  const aboutMeText = aboutMeTextJson[0]
  const toggleSwitch = () => {
    store.setSpanish(!store.spanish)
    console.log(store.spanish)
  }
</script>

<template>
  <div
    class="w-fit bg-[#e56b6f] align-top justify-between items-center rounded-xl p-2 mx-2 my-4 flex flex-col lg:w-[29rem] lg:my-8 lg:mx-5"
    id="shadow"
  >
    <div class="flex justify-start space-x-3 w-full h-auto items-center">
      <span class="text-white font-semibold text-xs lg:text-sm ml-3">
        {{ store.spanish ? aboutMeText.lang.esp[0] : aboutMeText.lang.eng[0] }}
      </span>
      <button
        @click="toggleSwitch"
        class="relative inline-flex flex-shrink-0 h-4 w-8 border-2 border-transparent rounded-full bg-gray-200 cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none lg:h-6 lg:w-12"
      >
        <span
          :class="{ 'translate-x-0': store.spanish, 'translate-x-4 lg:translate-x-6': !store.spanish }"
          class="inline-block h-3 w-3 rounded-full bg-slate-500 shadow transform ring-0 transition ease-in-out duration-200 lg:h-5 lg:w-5"
        ></span>
      </button>
      <span class="text-white font-semibold text-xs lg:text-sm">
        {{ store.spanish ? aboutMeText.lang.esp[1] : aboutMeText.lang.eng[1] }}
      </span>
    </div>
    <div class="w-fit flex flex-row lg:flex-col">
      <div class="flex flex-col justify-center text-center w-[45%] lg:w-full">
        <div class="w-full flex justify-center">
          <div class="rounded-[50%] w-36 h-36 overflow-hidden sm:w-44 sm:h-44 lg:w-52 lg:h-52">
            <img class="w-full h-full object-cover" src="../assets/foto-perfil-linkedin.jpeg">
          </div>
        </div>
        <div class="flex flex-col font-bold text-center text-white -mt-3 mb-4 sm:-mt-5 lg:-mt-8">
          <span class="text-sm sm:text-xl lg:text-3xl">José Andrés Solís Sotelo</span>
          <span class="text-xs lg:text-base">
            {{ store.spanish ? aboutMeText.career.esp : aboutMeText.career.eng }}
          </span>
        </div>
      </div>
      <div class="w-[55%] h-auto flex flex-col justify-start text-start bg-[#e99162] rounded-xl p-5 mb-2 overflow-hidden mt-2 ml-1 sm:h-auto lg:w-[95%] lg:h-full">
        <div class="w-full flex space-x-2 text-center text-white text-xs lg:text-base">
          <font-awesome-icon icon="circle-info" class="mt-auto mb-auto"/>
          <h2 class="font-bold ">
            {{ store.spanish ? aboutMeText.title.esp : aboutMeText.title.eng }}
          </h2>
        </div>
        <div class="w-full mt-2 ml-2 text-justify text-xs lg:text-base">
          <span class=" text-white">
            {{ store.spanish ? aboutMeText.description.esp[0] : aboutMeText.description.eng[0] }}
            <br>
            {{ store.spanish ? aboutMeText.description.esp[1] : aboutMeText.description.eng[1] }}
          </span>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-[95%] h-fit justify-center text-center items-center">
      <span class="text-white text-[9px] lg:text-xs">
        {{ store.spanish ? aboutMeText.pageDevInfo.esp : aboutMeText.pageDevInfo.eng }}
      </span>
    </div>
  </div>
</template>

<style scoped>
#shadow {
  border: 1px solid transparent;
  box-shadow: 4px 5px 10px rgba(229, 107, 111, 0.5);
}
</style>
