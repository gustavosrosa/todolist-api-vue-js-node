<template>
    <div>
        <BForm v-if="show" @submit="onSubmit" @reset="onReset">
            <BFormGroup id="input-group-1" label="Tarefa:" label-for="input-1" class="mb-2">
                <BFormInput id="input-1" v-model="form.name" type="text" placeholder="Digite a tarefa" required />
            </BFormGroup>

            <BFormGroup id="input-group-2" label="Descrição da tarefa:" label-for="input-2" class="mb-4">
                <BFormInput id="input-2" v-model="form.description"
                    placeholder="Digite a descrição da tarefa (não obrigatória)" />
            </BFormGroup>

            <BButton type="submit" variant="primary" class="mr-2">Cadastrar tarefa</BButton>
            <BButton type="reset" variant="danger" :disabled="!form.email">Limpar</BButton>

            <BModal v-model="modal" :title="'Ocorreu um erro'">
                {{ errorMessage }}

                <template #footer>
                    <BButton variant="danger" @click="irParaLista">
                        Voltar
                    </BButton>
                </template>
            </BModal>
        </BForm>
    </div>

</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios';
import router from '@/router';

const modal = ref(false)
const message = ref("");

const form = reactive({
    name: '',
    description: '',
})
const show = ref(true)

const onSubmit = (event) => {
    event.preventDefault()

    modal.value = true;

    axios.post("https://todolist-api-vue-js-node.onrender.com/task", form).then(response => {
        message.value = response.data;
        console.log('User created:', response.data);
    }).catch(error => {
        message.value = error;
        console.error('Error creating user:', error);
    });


}

function irParaLista() {
    router.push(['/']);
}


const onReset = (event) => {
    event.preventDefault()
    form.name = '';
    form.description = '';

}
</script>