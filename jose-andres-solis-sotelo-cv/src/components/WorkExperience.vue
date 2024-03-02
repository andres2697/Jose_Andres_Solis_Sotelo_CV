<script setup>
  import { useStore } from '../store/piniaStore.js'
  import workExperience from '../api/work-experience.json'
  import { onMounted } from 'vue';
  // Variables
  const store = useStore()
  const activeJob = 'bg-opacity-75'
  const experienciaLaboral = workExperience
  const apiKey = import.meta.env.VITE_APP_API_KEY_GOOGLE_MAPS
  // Functions 
  const changeShowedJob = (index) => {
    store.setSelectedJob(index)
  }
  // Props
  defineProps({
    title: Object,
  })
</script>

<template>
  <div class="max-h-screen-minus-72 w-full flex flex-col bg-[#eb7f96] text-white p-4 rounded-xl  self-center">
    <div class="w-full flex mb-2 space-x-3">
      <font-awesome-icon :icon="title.iconName" class="mt-auto mb-auto"/>
      <h1 class="text-xl font-semibold mt-auto mb-auto">{{ title.name }}</h1>
    </div>
    <div class="w-full flex flex-col mr-4 mt-4 mb-4">
      <div class="w-full flex mb-5">
        <div
          v-for="(trabajo, index) in experienciaLaboral" :key="index"
          class="w-1/3 mx-2 bg-[#e96262] rounded-md p-2 hover:bg-opacity-75 cursor-pointer"
          :class="index === store.selectedJob ? activeJob : 'bg-opacity-30'"
          @click="changeShowedJob(index)"
        >
          <div class="w-full flex text-center justify-center font-semibold text-md">{{ trabajo.nombreEmpresa }}</div>
        </div>
      </div>
      <div
        class="w-full flex"
        v-for="(trabajoDetalle, index) in experienciaLaboral" :key="index"
      >
        <div class="w-full flex flex-col text-justify rounded-md bg-[#e96262] bg-opacity-75 p-4 ml-2 mr-2" v-if="store.selectedJob === index">
          <div class="w-full flex">
            <div class="w-fit flex mr-4">
              <font-awesome-icon icon="address-card" class="mt-auto mb-auto" />
            </div>
            <div class="w-full flex flex-col">
              <span>{{ trabajoDetalle.descripcionPuesto }}</span>
              <span class="text-sm -mt-1">{{ trabajoDetalle.periodo }}</span>
            </div>
          </div>
          <div class="w-full flex mt-3">
            <div class="w-[50%] flex flex-col">
              <div class="w-full flex space-x-2 justify-center text-center mb-2">
                <font-awesome-icon icon="list-check" class="mt-auto mb-auto"/>
                <h3>Actividades realizadas</h3>
              </div>
              <div class="w-100% text-justify ml-4 mr-3">
                <ul role="list" class="flex flex-col w-full list-decimal">
                  <li 
                    v-for="(actividad, index) in trabajoDetalle.actividadesRealizadas" :key="index"
                    class="my-1 text-sm">
                    {{ actividad }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-[50%] flex mx-2">
              <div class="w-full flex flex-col">
                <div class="w-full flex space-x-2 justify-center text-center mb-2">
                  <font-awesome-icon icon="location-dot" class="mt-auto mb-auto"/>
                  <h3>Ubicación</h3>
                </div>
                <div class="h-full w-full">
                  <GoogleMap
                    :api-key="apiKey"
                    class="w-full h-56 max-h-64"
                    :zoom="15"
                    :center="trabajoDetalle.ubicacion"
                  >
                    <Marker :options="trabajoDetalle.ubicacion"></Marker>
                  </GoogleMap>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
