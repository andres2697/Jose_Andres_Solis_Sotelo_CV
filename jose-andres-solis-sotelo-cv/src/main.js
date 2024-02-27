import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faGear, faGraduationCap, faBriefcase, faCaretDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import App from './App.vue'

library.add(faUser, faGear, faGraduationCap, faBriefcase, faCaretDown, faArrowLeft, faArrowRight)

const pinia = createPinia()
createApp(App).use(pinia).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
