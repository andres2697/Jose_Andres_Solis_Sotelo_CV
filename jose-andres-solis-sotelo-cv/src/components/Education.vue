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
      <h1 class="text-xl font-semibold mt-auto mb-auto">{{ title.name }}</h1>
    </div>
    <div class="w-full ml-4 ">
      <div class="w-full ml-1">
        <h2 class="font-semibold underline underline-offset-4">Último grado de estudios</h2>
        <div class="ml-4 my-2">
          <h3 class="font-medium text">
            Instituto Politécnico Nacional
          </h3>
          <span class="ml-4">Ingeniero en computación. Titulado en marzo del 2020.</span>
        </div>
        <h2 class="font-semibold underline underline-offset-4">Idiomas</h2>
        <div class="w-100% flex my-2">
          <div class="ml-4 w-[75%]">
            <h3 class="font-medium">
              Inglés
            </h3>
            <h3 class="font-medium ml-4">
              Harmon Hall
            </h3>
            <div class="ml-8">Nivel Avanzado (B2). Concluido en noviembre del 2014.</div>
            <h3 class="font-medium ml-4 mt-2">
              Cursos Extracurriculares de Lenguas Extranjeras (CELEX) unidad Culhuacán, IPN
            </h3>
            <div class="ml-8">Nivel Avanzado (B2). Concluido en diciembre del 2019.</div>
          </div>
          <div class="mx-4 w-[25%]">
            <h3 class="font-medium">
              Español
            </h3>
            <div class="ml-4">Lengua Materna.</div>
          </div>
        </div>
        <h2 class="font-semibold underline underline-offset-4">Cursos</h2>
        <div class="ml-4 my-2">
          <h3 class="font-medium text">
            Desarrollo de páginas con Angular
          </h3>
          <span class="ml-4">Concluido el 15 de octubre del 2021.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
