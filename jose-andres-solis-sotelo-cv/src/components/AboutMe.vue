<script setup>
  import { ref } from 'vue';
  const isActive = ref(false)
  const toggleSwitch = () => {
    isActive.value = !isActive.value
  }
</script>

<template>
  <div
    class="w-fit bg-[#e56b6f] align-top justify-between items-center rounded-xl p-2 mx-2 my-4 flex flex-col sm:w-[29rem] sm:my-8 sm:mx-5"
    id="shadow"
  >
    <div class="flex justify-start space-x-3 w-full h-auto items-center">
      <span class="text-white font-semibold text-xs sm:text-sm ml-3">ESP</span>
      <button
        @click="toggleSwitch"
        class="relative inline-flex flex-shrink-0 h-4 w-8 border-2 border-transparent rounded-full bg-gray-200 cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none sm:h-6 sm:w-12"
      >
        <span
          :class="{ 'translate-x-4 sm:translate-x-6': isActive, 'translate-x-0': !isActive }"
          class="inline-block h-3 w-3 rounded-full bg-slate-500 shadow transform ring-0 transition ease-in-out duration-200 sm:h-5 sm:w-5"
        ></span>
      </button>
      <span class="text-white font-semibold text-xs sm:text-sm">ING</span>
    </div>
    <div class="w-fit flex flex-row sm:flex-col">
      <div class="flex flex-col justify-center text-center w-[45%] sm:w-full">
        <div class="w-full flex justify-center">
          <div class="rounded-[50%] w-36 h-36 overflow-hidden sm:w-52 sm:h-52">
            <img class="w-full h-full object-cover" src="../assets/foto-perfil-linkedin.jpeg">
          </div>
        </div>
        <div class="flex flex-col font-bold text-center text-white -mt-3 mb-4 sm:-mt-8">
          <span class="text-sm sm:text-3xl">José Andrés Solís Sotelo</span>
          <span class="text-xs sm:text-base">Ingeniero en Computación</span>
        </div>
      </div>
      <div class="w-[55%] h-auto flex flex-col justify-start text-start bg-[#e99162] rounded-xl p-5 mb-2 overflow-hidden mt-2 ml-1 sm:w-[95%] sm:h-full">
        <div class="w-full flex space-x-2 text-center text-white text-xs sm:text-base">
          <font-awesome-icon icon="circle-info" class="mt-auto mb-auto"/>
          <h2 class="font-bold ">A cerca de mi</h2>
        </div>
        <div class="w-full mt-2 ml-2 text-justify text-xs sm:text-base">
          <span class=" text-white">
            Me considero una persona proactiva, puntual, responsable y solidaria. 
            Me gusta tomar retos, adquirir y reforzar conocimientos en áreas tecnológicas para desarrollarme 
            profesionalmente y mejorar mis resultados en el campo laboral.
            <br>
            Desarrollador de software con 3 años de experiencia en el campo de TI.
          </span>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-[95%] h-fit justify-center text-center items-center">
      <span class="text-white text-[9px] sm:text-xs">Esta página fue desarrollada usando Vite, Vuejs 3, Firebase y Google Maps.</span>
    </div>
  </div>
</template>

<style scoped>
#shadow {
  border: 1px solid transparent;
  box-shadow: 4px 5px 10px rgba(229, 107, 111, 0.5);
}
</style>
