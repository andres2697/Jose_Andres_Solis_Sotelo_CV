import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'app',
  state: () => ({
    selectedStep: 0
  }),
  actions: {
    setSelectedStep(value) {
      this.selectedStep = value
    }
  }
})