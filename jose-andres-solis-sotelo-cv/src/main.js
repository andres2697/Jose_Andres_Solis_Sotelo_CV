import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { GoogleMap, Marker } from 'vue3-google-map'
import {
    faUser,
    faGear,
    faGraduationCap,
    faBriefcase,
    faCaretDown,
    faArrowLeft,
    faArrowRight,
    faAddressCard,
    faListCheck,
    faLocationDot,
    faSchool,
    faLanguage,
    faCertificate,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import './style.css'
import App from './App.vue'

library.add(
    faUser,
    faGear,
    faGraduationCap,
    faBriefcase,
    faCaretDown,
    faArrowLeft,
    faArrowRight,
    faAddressCard,
    faListCheck,
    faLocationDot,
    faSchool,
    faLanguage,
    faCertificate,
    faInfoCircle
)
const pinia = createPinia()
const app = createApp(App)
app.use(pinia).component('font-awesome-icon', FontAwesomeIcon).component('GoogleMap', GoogleMap).component('Marker', Marker)
app.mount('#app')
