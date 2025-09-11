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

            <ModalComponent :title="'Ocorreu um erro'" :message="message" :action="'Voltar'" :option="'GO_BACK'"
                :modal="showModal" />
        </BForm>
    </div>

</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import axios from 'axios';
import ModalComponent from '@/components/ModalComponent.vue';
import { useTaskStore } from '@/stores/taskStore';

const showModal = ref(false)
const message = ref("");
const action = ref("Cadastrar tarefa");
const taskStore = useTaskStore()
const currentTask = taskStore.currentTask;
const origin = taskStore.origin;

onMounted(() => {
    
    if (currentTask) {
        form.name = currentTask.name;
        form.description = currentTask.description;
    }

    if (origin == "EDIT") {
        action.value = "Editar tarefa";
    }
})


const form = reactive({
    name: '',
    description: '',
})

const onSubmit = (event) => {
    event.preventDefault();

    if (origin == "EDIT") {
        updateTask(form);
    } else {
        postTask(form);
    }

}

function postTask(form) {
    axios.post("https://todolist-api-vue-js-node.onrender.com/task", form).then(response => {
        showModal.value = true;
        message.value = response.data;
    }).catch(error => {
        showModal.value = true;
        message.value = error.response.data;
    });
}

function updateTask(form) {

    let id = currentTask.id;

    axios.put(`https://todolist-api-vue-js-node.onrender.com/task/${id}`, form).then(response => {
        showModal.value = true;
        message.value = response.data;
    }).catch(error => {
        showModal.value = true;
        message.value = error.response.data;
    });
}

const onReset = (event) => {
    event.preventDefault()
    form.name = '';
    form.description = '';
}

</script>