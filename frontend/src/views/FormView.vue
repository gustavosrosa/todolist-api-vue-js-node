<template>
    <div>
        <BForm @submit="onSubmit" @reset="onReset">
            <BFormGroup id="input-group-1" label="Tarefa:" label-for="input-1" class="mb-2">
                <BFormInput id="input-1" v-model="form.name" type="text" placeholder="Digite a tarefa" required />
            </BFormGroup>

            <BFormGroup id="input-group-2" label="Descrição da tarefa:" label-for="input-2" class="mb-4">
                <BFormInput id="input-2" v-model="form.description"
                    placeholder="Digite a descrição da tarefa (não obrigatória)" />
            </BFormGroup>

            <BButton type="submit" variant="primary" class="mr-2">{{ action }}</BButton>
            <BButton type="reset" variant="danger" :disabled="!form.email">Limpar</BButton>

            <ModalComponent :title="headerModal" :message="message" :option="strings.VOLTAR" :modal="showModal" />
        </BForm>
    </div>

</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import axios from 'axios';
import ModalComponent from '@/components/ModalComponent.vue';
import { useTaskStore } from '@/stores/taskStore';
import { strings } from '@/utils/strings';

const showModal = ref(false)
const message = ref(strings.VAZIO);
const action = ref("Cadastrar tarefa");
const headerModal = ref(strings.SUCCESS);
const taskStore = useTaskStore()
const currentTask = taskStore.currentTask;
const origin = taskStore.origin;

onMounted(() => {
    
    if (currentTask) {
        form.name = currentTask.name;
        form.description = currentTask.description;
    }

    if (origin == strings.EDIT_FUNCIONALITY) {
        action.value = "Editar tarefa";
    }
})

const form = reactive({
    name: strings.VAZIO,
    description: strings.VAZIO,
})

const onSubmit = (event) => {
    event.preventDefault();

    if (origin == strings.EDIT_FUNCIONALITY) {
        updateTask(form);
    } else {
        postTask(form);
    }

}

function postTask(form) {
    axios.post(strings.URL_BACKEND, form).then(response => {
        showModal.value = true;
        message.value = response.data;
    }).catch(error => {
        showModal.value = true;
        message.value = error.response.data;
        headerModal.value = strings.ERROR;
    });
}

function updateTask(form) {

    let id = currentTask.id;

    axios.put(`${strings.URL_BACKEND}/${id}`, form).then(response => {
        showModal.value = true;
        message.value = response.data;
    }).catch(error => {
        showModal.value = true;
        message.value = error.response.data;
        headerModal.value = strings.ERROR;
    });
}

const onReset = (event) => {
    event.preventDefault()
    form.name = strings.VAZIO;
    form.description = strings.VAZIO;
}

</script>