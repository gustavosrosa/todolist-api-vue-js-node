<template>
    <div>
        <BCard :title="props.task.name">
            <BCardText>{{ props.task.description }}</BCardText>
            <BButton variant="primary" class="mr-2" @click="update(props.task)">Editar</BButton>
            <BButton href="#" variant="danger" @click="deleteTask(props.task.id)">Excluir</BButton>
        </BCard>
        <ModalComponent :title="headerModal" :message="message" :modal="showModal" />
    </div>
</template>

<script setup>

import router from '@/router';
import { useTaskStore } from '@/stores/taskStore';
import { defineProps, ref } from 'vue';
import axios from 'axios';
import ModalComponent from './ModalComponent.vue';
import { strings } from '@/utils/strings';

const props = defineProps(['task']);
const message = ref("Retorno");
const showModal = ref(false);
const headerModal = ref(strings.SUCCESS);

function update(task) {
    useTaskStore().currentTask = task;
    useTaskStore().origin = strings.EDIT_FUNCIONALITY;
    router.push({ name: 'form' })
}

function deleteTask(id) {
    axios.delete(`${strings.URL_BACKEND}/${id}`).then(response => {
        showModal.value = true;
        message.value = response.data;
    }).catch(error => {
        showModal.value = true;
        message.value = error.response.data;
        headerModal.value = strings.ERROR;
    });
}

</script>