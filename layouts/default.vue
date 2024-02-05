<template>
    <header class="bg-gray-400 py-4">
     <nav class="flex justify-center">
         <ul class="flex space-x-4">
             <li v-for="link in routes" :key="link.id">
                 <NuxtLink class="text-white hover:text-gray-800" :to='link.route'>{{ link.name }}</NuxtLink>
             </li>
         </ul>
     </nav>
    </header>
    <div>
     <slot/>
    </div>
 </template>

 <script setup>
import { useRouteStore } from '~/store/forms';

// const { route_form: routes } = useRouteStore();
const Routeforms = useRouteStore();
const routes = Routeforms.route_form;
</script>
