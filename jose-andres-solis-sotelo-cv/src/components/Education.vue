<script setup>
  // Variables
  defineProps({
    title: Object,
  })
</script>

<template>
  <div class="w-full h-fit flex flex-col bg-[#eb7f96] text-white p-4 rounded-xl  self-center">
    <div class="w-full flex mb-2 space-x-3">
      <font-awesome-icon :icon="title.iconName" class="mt-auto mb-auto" />
      <h1 class="text-base font-semibold mt-auto mb-auto sm:text-xl">{{ title.name }}</h1>
    </div>
    <div class="w-full ml-4 mt-3">
      <div class="w-full ml-1 mr-4">
        <div class="w-full flex space-x-2 text-center mb-2">
          <font-awesome-icon icon="school" class="mt-auto mb-auto"/>
          <h2 class="text-sm font-semibold underline underline-offset-4 sm:text-base">Último grado de estudios</h2>
        </div>
        <div class="ml-4 my-2">
          <h3 class="text-sm font-medium sm:text-base">
            Instituto Politécnico Nacional
          </h3>
          <span class="text-xs ml-4 sm:text-base">Ingeniero en computación. Titulado en marzo del 2020.</span>
        </div>
      </div>
      <div class="w-full ml-1 my-4">
        <div class="w-full flex space-x-2 text-center mb-2">
          <font-awesome-icon icon="language" class="mt-auto mb-auto"/>
          <h2 class="text-sm font-semibold underline underline-offset-4 sm:text-base">Idiomas</h2>
        </div>
        <div class="w-100% flex flex-col my-2 sm:flex-row">
          <div class="w-full ml-4 sm:w-[75%]">
            <h3 class="text-sm font-medium text sm:text-base">
              Inglés
            </h3>
            <h3 class="ml-4 text-sm font-medium text sm:text-base">
              Harmon Hall
            </h3>
            <div class="ml-8 mt-2 text-xs sm:text-base sm:mt-0">Nivel Avanzado (B2). Concluido en noviembre del 2014.</div>
            <div class="w-[90%] ml-4 mt-2 sm:w-full">
              <h3 class="text-sm font-medium sm:text-base">
                Cursos Extracurriculares de Lenguas Extranjeras (CELEX) unidad Culhuacán, IPN
              </h3>
            </div>
            <div class="ml-8 mt-2 text-xs sm:text-base sm:mt-0">Nivel Avanzado (B2). Concluido en diciembre del 2019.</div>
          </div>
          <div class="w-full mx-4 sm:w-[25%]">
            <h3 class="text-sm font-medium text sm:text-base">
              Español
            </h3>
            <div class="text-xs ml-4 sm:text-base">Lengua Materna.</div>
          </div>
        </div>
      </div>
      <div class="w-full ml-1">
        <div class="w-full flex space-x-2 text-center mb-2">
          <font-awesome-icon icon="certificate" class="mt-auto mb-auto"/>
          <h2 class="text-sm font-semibold underline underline-offset-4 sm:text-base">Cursos</h2>
        </div>
        <div class="ml-4 my-2">
          <h3 class="text-sm font-medium text sm:text-base">
            Desarrollo de páginas con Angular
          </h3>
          <span class="ml-4 text-xs sm:text-base">Concluido el 15 de octubre del 2021.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
