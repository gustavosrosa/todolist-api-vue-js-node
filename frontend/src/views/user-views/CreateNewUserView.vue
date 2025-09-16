<template>
    <div class="d-flex justify-content-center align-items-center vh-100 bg-dark text-white" >
        <BForm class="d-flex flex-column justify-content-center align-items-center" @submit="onSubmit" @reset="onReset">
            <BFormGroup id="input-group-1" label="Nome do Usuário:" label-for="input-1" class="mb-4">
                <BFormInput id="input-1" v-model="form.name" type="text" placeholder="Digite o nome" required />
            </BFormGroup>

            <BFormGroup id="input-group-2" label="E-mail:" label-for="input-2" class="mb-4">
                <BFormInput id="input-2" v-model="form.email" type="email" placeholder="Digite o e-mail" required />
            </BFormGroup>

            <BFormGroup id="input-group-3" label="Senha:" label-for="input-2" class="mb-4">
                <BFormInput id="input-3" v-model="form.password" type="password" placeholder="Digite a senha"
                    required />
            </BFormGroup>

            <BFormGroup id="input-group-3" label="Confirmar Senha:" label-for="input-4" class="mb-4 ">
                <BFormInput id="input-4" ref="confirmarInput" v-model="confirmPassword" @input="validarSenha"
                    type="password" placeholder="Confirme a senha" required />
            </BFormGroup>

            <p class="text-danger" v-if="senhaDiferenteDaConfirmacao()">Senhas não coincidem</p>

            <div class="d-flex flex-row">
                <BButton type="submit" variant="primary" class="mr-2"
                    :disabled="!(form.name && form.email && form.password && confirmPassword)">Criar</BButton>
                <BButton type="reset" variant="danger" :disabled="!(form.name || form.email || form.password)">Limpar
                </BButton>
            </div>

            <ModalComponent :title="headerModal" :message="message" :option="routes.TELA_LOGIN" :modal="showModal" />
        </BForm>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import ModalComponent from '@/components/ModalComponent.vue';
import { routes, strings } from '@/utils/strings';
import axios from 'axios';

const showModal = ref(false)
const message = ref(strings.VAZIO);
const headerModal = ref(strings.SUCCESS);
const confirmarInput = ref(null);

const form = reactive({
    name: strings.VAZIO,
    email: strings.VAZIO,
    password: strings.VAZIO,
});

const confirmPassword = ref(strings.VAZIO);

const onSubmit = (event) => {
    event.preventDefault();
    createUser();
};

const onReset = (event) => {
    event.preventDefault()
    form.name = strings.VAZIO,
        form.email = strings.VAZIO,
        form.password = strings.VAZIO,
        confirmPassword.value = strings.VAZIO
};

function senhaDiferenteDaConfirmacao() {
    return confirmPassword.value && (confirmPassword.value !== form.password);
}

function createUser() {

    axios.post(strings.URL_BACKEND_USER, form).then(response => {
        showModal.value = true;
        message.value = response.data;
    }).catch(error => {
        showModal.value = true;
        message.value = error.response.data;
        headerModal.value = strings.ERROR;
    });

}

</script>

<style scoped>
img {
    width: 1.25em;
    height: 1.25em;
    color: #fff;
}
</style>