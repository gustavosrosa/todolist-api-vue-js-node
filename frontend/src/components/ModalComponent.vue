<template>
    <div>
        <BModal v-model="modal" :title="props.title" no-header-close no-close-on-backdrop>
            {{ props.message }}

            <template #footer>
                <BButton variant="danger" @click="acaoButton(props.option)">
                    {{ action }}
                </BButton>
            </template>
        </BModal>
    </div>
</template>

<script setup>

    import router from '@/router';
import { strings } from '@/utils/strings';
    import { ref, watch } from 'vue';
    import { defineProps } from 'vue';

    const props = defineProps(['title', 'message', 'modal', 'option']);
    const modal = ref(strings.VAZIO)
    const action = ref(strings.VOLTAR);

    watch(() => props.modal, (showModal) => {
        modal.value = showModal;
    })

    modal.value = props.modal;

    function acaoButton(opcao) {
        if (opcao == strings.VOLTAR) {
            router.push('/');
        } else {
            action.value = strings.RECARREGAR_PAGINA;
            window.location.reload();
        }
    }

</script>