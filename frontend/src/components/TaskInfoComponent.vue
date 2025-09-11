<template>
    <div>
        <BCard :title="props.task.name">
            <BCardText>{{ props.task.description }}</BCardText>
            <BButton variant="primary" class="mr-2" @click="update(props.task)">Editar</BButton>
            <BButton href="#" variant="danger" @click="deleteTask(props.task.id)">Excluir</BButton>
        </BCard>
        <ModalComponent :title="headerModal" :option="'RELOAD'" :message="message" :modal="showModal" />
    </div>
</template>

<script setup>

import router from '@/router';
import { useTaskStore } from '@/stores/taskStore';
import { defineProps, ref } from 'vue';
import axios from 'axios';
import ModalComponent from './ModalComponent.vue';

const props = defineProps(['task']);
const message = ref("Retorno");
const showModal = ref(false);
const headerModal = ref("Sucesso!");

function update(task) {
    useTaskStore().currentTask = task;
    useTaskStore().origin = "EDIT";
    router.push({ name: 'form' })
}

function deleteTask(id) {
    axios.delete(`https://todolist-api-vue-js-node.onrender.com/task/${id}`).then(response => {
        showModal.value = true;
        message.value = response.data;
    }).catch(error => {
        showModal.value = true;
        message.value = error.response.data;
        headerModal.value = "Ocorreu um erro.";
    });
}

</script>