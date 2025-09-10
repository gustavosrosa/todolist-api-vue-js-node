<template>
    <div>
        <BForm v-if="show" @submit="onSubmit" @reset="onReset">
            <BFormGroup id="input-group-1" label="Tarefa:" label-for="input-1" class="mb-2">
                <BFormInput id="input-1" v-model="form.email" type="text" placeholder="Digite a tarefa" required />
            </BFormGroup>

            <BFormGroup id="input-group-2" label="Descrição da tarefa:" label-for="input-2" class="mb-4">
                <BFormInput id="input-2" v-model="form.name" placeholder="Digite a descrição da tarefa (não obrigatória)" />
            </BFormGroup>

            <BButton type="submit" variant="primary" class="mr-2">Cadastrar tarefa</BButton>
            <BButton type="reset" variant="danger">Limpar</BButton>
        </BForm>
    </div>

</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
    email: '',
    name: '',
    food: null,
    checked: [],
})
const show = ref(true)

const onSubmit = (event) => {
    event.preventDefault()
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(form))
}

const onReset = (event) => {
    event.preventDefault()
    // Reset our form values
    form.email = ''
    form.name = ''
    form.food = null
    form.checked = []
   
}
</script>