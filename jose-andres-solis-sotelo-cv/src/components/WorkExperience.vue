<script setup>
  import { useStore } from '../store/piniaStore.js'
  import workExperience from '../api/work-experience-text.json'
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
  <div class="w-full flex flex-col bg-[#eb7f96] text-white p-4 rounded-xl self-center lg:max-h-screen-minus-72">
    <div class="w-full flex mb-2 space-x-3">
      <font-awesome-icon :icon="title.iconName" class="mt-auto mb-auto"/>
      <h1 class="text-base font-semibold mt-auto mb-auto lg:text-xl">
        {{ store.spanish ? title.name : title.englishName }}
      </h1>
    </div>
    <div class="w-full flex flex-col mr-4 mt-4 mb-4">
      <div class="w-full flex mb-5">
        <div
          v-for="(trabajo, index) in experienciaLaboral" :key="index"
          class="w-1/3 mx-2 bg-[#e96262] rounded-md p-2 hover:bg-opacity-75 cursor-pointer"
          :class="index === store.selectedJob ? activeJob : 'bg-opacity-30'"
          @click="changeShowedJob(index)"
        >
          <div class="w-full flex text-center justify-center text-xs font-semibold lg:text-base">{{ trabajo.nombreEmpresa }}</div>
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
              <span class="text-sm lg:text-base">{{ store.spanish ? trabajoDetalle.descripcionPuesto.esp : trabajoDetalle.descripcionPuesto.eng }}</span>
              <span class="text-xs mt-0 lg:text-sm lg:-mt-1">{{ store.spanish ? trabajoDetalle.periodo.esp : trabajoDetalle.periodo.eng }}</span>
            </div>
          </div>
          <div class="w-full flex flex-col mt-3 lg:flex-row">
            <div class="w-full flex flex-col lg:w-[50%]">
              <div class="w-full flex space-x-1 justify-center text-center mb-2 lg:space-x-2">
                <font-awesome-icon icon="list-check" class="mt-auto mb-auto"/>
                <h3 class="text-sm lg:text-base">{{ store.spanish ? "Actividades realizadas" : "Performed Activities"}}</h3>
              </div>
              <div class="w-100% text-justify ml-4 mr-3">
                <ul role="list" class="flex flex-col w-full list-decimal">
                  <li
                    v-if="store.spanish" 
                    v-for="(actividad, index) in trabajoDetalle.actividadesRealizadas.esp" :key="index"
                    class="my-1 text-sm">
                    {{ actividad }}
                  </li>
                  <li
                    v-if="!store.spanish" 
                    v-for="(actividad, index) in trabajoDetalle.actividadesRealizadas.eng" :key="index"
                    class="my-1 text-sm">
                    {{ actividad }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full mt-4 flex mx-2 lg:w-[50%] lg:mt-0">
              <div class="w-full flex flex-col">
                <div class="w-full flex space-x-2 justify-center text-center mb-2">
                  <font-awesome-icon icon="location-dot" class="mt-auto mb-auto"/>
                  <h3 class="text-sm lg:text-base">{{ store.spanish ? 'Ubicación' : 'Location' }}</h3>
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
