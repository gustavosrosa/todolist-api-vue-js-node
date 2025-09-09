<template>
    <BNavbar variant="dark">
        <BNavbarBrand href="#" class="text-light">NavBar</BNavbarBrand>
        <BNavbarToggle  target="nav-collapse" />
        <BCollapse id="nav-collapse" is-nav>
            <BNavbarNav class="ms-auto mb-2 mb-lg-0">
                <BNavItem to="/">Tarefas</BNavItem>
                <BNavItem to="/">Histórico</BNavItem>
            </BNavbarNav>               
        </BCollapse>
    </BNavbar>
</template>

<script setup>

</script>