<template>
    <div class="d-flex flex-column">
        <h1 class="text-secondary text-center">Não foi encontrada nenhuma tarefa!</h1>
        <BButton class="btn-lg mt-4" variant="info" @click="redirectToForm()">Cadastrar tarefa</BButton>
    </div>
</template>

<script setup>
import router from '@/router';


function redirectToForm() {
    router.push('/form')
}

</script>