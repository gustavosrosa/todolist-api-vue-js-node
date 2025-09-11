<template>
    <div>
        <BCard :title="props.task.name">
            <BCardText>{{ props.task.description }}</BCardText>
            <BButton to="/form" variant="primary" class="mr-2">Editar</BButton>
            <BButton href="#" variant="danger">Excluir</BButton>
        </BCard>
    </div>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps(['task']);

</script>