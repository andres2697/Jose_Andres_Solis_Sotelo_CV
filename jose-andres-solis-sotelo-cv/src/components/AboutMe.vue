<script setup>
</script>

<template>
  <div class="w-[30rem] flex flex-col align-top items-center bg-[#e56b6f] mx-5 my-8 rounded-xl p-2" id="shadow">
    <div class="flex flex-col justify-center text-center mt-5 w-full">
      <div class="w-full flex justify-center">
        <div class="rounded-[50%] w-48 h-48 overflow-hidden">
          <img class="w-full h-full object-cover" src="../assets/foto-perfil-linkedin.jpeg">
        </div>
      </div>
      <div class="flex flex-col font-bold text-center text-white -mt-8 mb-4">
        <span class="text-3xl">José Andrés Solís Sotelo</span>
        <span class="text-md">Ingeniero en Computación</span>
      </div>
    </div>
    <div class="w-[95%] h-full flex flex-col justify-start text-start bg-[#e99162] rounded-xl p-5 mb-2 overflow-hidden">
      <div class="w-full flex space-x-2 text-center text-white">
        <font-awesome-icon icon="circle-info" class="mt-auto mb-auto"/>
        <h2 class="font-bold ">A cerca de mi</h2>
      </div>
      <span class="ml-2 text-white text-justify mt-2">
        Me considero una persona proactiva, puntual, responsable y solidaria. 
        Me gusta tomar retos, adquirir y reforzar conocimientos en áreas tecnológicas para desarrollarme 
        profesionalmente y mejorar mis resultados en el campo laboral.
        <br>
        Desarrollador de software con 3 años de experiencia en el campo de TI.
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
