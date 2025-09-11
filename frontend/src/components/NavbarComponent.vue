<template>
    <BNavbar variant="dark">
        <BNavbarBrand href="#" class="text-light">TODO List</BNavbarBrand>
        <BNavbarToggle target="nav-collapse" />
        <BCollapse id="nav-collapse" is-nav>
            <BNavbarNav class="ms-auto mb-2 mb-lg-0">
                <BNavItem v-if="showTask" to="/">Tarefas</BNavItem>
                <BNavItem to="/form">Formulário</BNavItem>
            </BNavbarNav>
        </BCollapse>
    </BNavbar>
</template>

<script setup>
import { useRouteStore } from '@/stores/taskStore';
import { ref, watch } from 'vue';

let showTask = ref(true);

watch(() => useRouteStore().route, (showMenuTask) => {
    showTask.value = showMenuTask.includes("form");
})


</script>