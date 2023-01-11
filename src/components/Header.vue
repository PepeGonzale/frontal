<template>
<header class="">
  
  <nav class="bg-gray-50 border-box shadow-md rounded-sm w-full items-center justify-between flex-wrap bg-teal p-6">
    <div class="px-4 sm:px-6">
  <div class="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-4 px-2">
    
      <RouterLink to="/">
    <img src="https://www.vectorlogo.zone/logos/accenture/accenture-ar21.svg"/>
  </RouterLink>
  
  <div class="ml-4 font-semibold mt-2 flex flex-shrink-0">
    <div class="mr-12 text-xl">
      <RouterLink to="/file" class="text-gray-900 no-underline hover:text-blue-200">
        Subir fichero
      </RouterLink>
      </div>
      <div class="mr-12 text-xl">
      <RouterLink to="/bienvenido" class="text-gray-900 no-underline hover:text-blue-200">
        Bienvenido
      </RouterLink>
    
  </div>
  <div class="mr-12 text-xl">
    <RouterLink to="/nosotros" class="text-gray-900 no-underline hover:text-blue-200">
        Sobre nosotros
      </RouterLink>
  </div>
  <div class="mr-12 text-xl">
    <RouterLink to="/bienvenido" class="text-gray-900 no-underline hover:text-blue-200">
        Bienvenido
      </RouterLink>
  </div>
  </div>
  
  </div>
</div>
  <!-- <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      
     
    </div>
  </div> -->
</nav>
</header>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
  data() {
    return {
      message: "Header",
    };
  },
};
</script>
<style scoped>
.container-fluid {
    background-color: #63D471;
    padding: 15px 10px;
    font-family: "Consolas";
    font-size: large;
}
</style>
