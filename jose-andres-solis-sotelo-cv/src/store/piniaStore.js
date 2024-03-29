import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'app',
  state: () => ({
    selectedStep: 0,
    selectedJob: 0,
    urlDownloadCvButton: '',
    spanish: true
  }),
  actions: {
    setSelectedStep(value) {
      this.selectedStep = value
    },
    setSelectedJob(value) {
      this.selectedJob = value
    },
    setUrlDownloadCvButton(value) {
      this.urlDownloadCvButton = value
    },
    setSpanish(value) {
      this.spanish = value
    }
  }
})