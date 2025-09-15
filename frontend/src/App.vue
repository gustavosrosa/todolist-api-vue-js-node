<template>
  <div>
    <NavbarComponent v-if="showLoginComponent"></NavbarComponent>
    <router-view/>
  </div>
</template>

<style>

</style>

<script setup>
import { useRouteStore } from '@/stores/taskStore';
import { ref, watch } from 'vue';
import NavbarComponent from './components/NavbarComponent.vue';

const showLoginComponent = ref(true);

watch(() => useRouteStore().route, (showMenuTask) => {
    showLoginComponent.value = !showMenuTask.includes("login");
    console.log(showLoginComponent.value)
})

</script>
