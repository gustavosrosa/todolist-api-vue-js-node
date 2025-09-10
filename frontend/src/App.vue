<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="mt-4 ml-4 mr-4">
      <router-view/>
    </div>
  </div>
</template>

<style>

</style>

<script setup>
import NavbarComponent from './components/NavbarComponent.vue';

</script>
