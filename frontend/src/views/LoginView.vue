<template>
    <div class="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
        <BForm class="d-flex flex-column justify-content-center align-items-center" @submit="onSubmit" @reset="onReset">
            <BFormGroup id="input-group-1" label="Usuário:" label-for="input-1" class="mb-2">
                <BFormInput id="input-1" v-model="form.user" type="text" placeholder="Digite o usuário" required />
            </BFormGroup>

            <BFormGroup id="input-group-2" label="Senha:" label-for="input-2" class="mb-4">
                <BFormInput id="input-2" v-model="form.password" type="password" placeholder="Digite a senha" required />
            </BFormGroup>

            <div class="d-flex flex-row justify-content-center align-items-center">
                <LinkComponent route="/login/new-user" infoText="Novo usuário" enableMarginRight="true"/>
                <LinkComponent route="/login/change-password" infoText="Esqueceu sua senha?"/>
            </div>

            <BButton type="submit" variant="primary" class="mr-2">Login</BButton>

            <ModalComponent :title="headerModal" :message="message" :option="routes.TELA_PRINCIPAL" :modal="showModal" />
        </BForm>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import ModalComponent from '@/components/ModalComponent.vue';
import { routes, strings } from '@/utils/strings';
import LinkComponent from '@/components/LinkComponent.vue';

const showModal = ref(false)
const message = ref(strings.VAZIO);
const headerModal = ref(strings.SUCCESS);

const form = reactive({
    user: strings.VAZIO,
    password: strings.VAZIO,
})

const onSubmit = (event) => {
    event.preventDefault();

    realizeLogin();
}

function realizeLogin() {

}

const onReset = (event) => {
    event.preventDefault()
    form.name = strings.VAZIO;
    form.description = strings.VAZIO;
}

</script>
