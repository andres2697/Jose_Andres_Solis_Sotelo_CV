<script setup>
</script>

<template>
  <div 
    class="w-fit flex flex-row align-top items-center bg-[#e56b6f] mx-2 my-4 rounded-xl p-2 sm:flex-col sm:w-[29rem] sm:my-8 sm:mx-5"
    id="shadow"
  >
    <div class="flex flex-col justify-center text-center mt-5 w-[45%] sm:w-full">
      <div class="w-full flex justify-center">
        <div class="rounded-[50%] w-36 h-36 overflow-hidden sm:w-48 sm:h-48">
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
</template>

<style scoped>
#shadow {
  border: 1px solid transparent;
  box-shadow: 4px 5px 10px rgba(229, 107, 111, 0.5);
}
</style>
