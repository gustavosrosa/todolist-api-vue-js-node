<template>
    <div>
        <BCard :title="props.task.name">
            <BCardText>{{ props.task.description }}</BCardText>
            <BButton variant="primary" class="mr-2" @click="editar(props.task)">Editar</BButton>
            <BButton href="#" variant="danger">Excluir</BButton>
        </BCard>
    </div>
</template>

<script setup>

import router from '@/router';
import { useTaskStore } from '@/stores/taskStore';
import { defineProps } from 'vue';

const props = defineProps(['task']);

function editar(task) {
    useTaskStore().currentTask = task;
    useTaskStore().origin = "EDIT";
    router.push({ name: 'form' })
}
</script>