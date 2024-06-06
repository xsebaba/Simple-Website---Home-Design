import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '../views/AboutUs.vue'
import Contact from '../views/Contact.vue'
import Home from '../views/Home.vue'
import Office from '../views/Office.vue'
import Outdoors from '../views/Outdoors.vue'
import WhatIs from '../views/WhatIs.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/contact',
        name:'Contact',
        component: Contact
    },
    {
        path: '/office',
        name: 'Office',
        component: Office
    }, 
    {
        path: '/outdoors',
        name: 'Outdoors',
        component: Outdoors
    }, 
    {
        path: '/what-is-design',
        name: 'WhatIs', 
        component: WhatIs
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router