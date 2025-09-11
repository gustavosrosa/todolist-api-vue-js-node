<template>
    <div>
        <BModal v-model="modal" :title="props.title" no-header-close>
            {{ props.message }}

            <template #footer>
                <BButton variant="danger" @click="acaoButton(props.option)">
                    {{ props.action }}
                </BButton>
            </template>
        </BModal>
    </div>
</template>

<script setup>

    import router from '@/router';
    import { ref, watch } from 'vue';
    import { defineProps } from 'vue';

    const props = defineProps(['title', 'message', 'action', 'modal', 'option']);
    const modal = ref('')

    watch(() => props.modal, (showModal) => {
        modal.value = showModal;
    })

    modal.value = props.modal;

    function acaoButton(opcao) {
        if (opcao == 'GO_BACK') {
            router.push('/');
        } else {
            window.location.reload();
        }
    }

</script>