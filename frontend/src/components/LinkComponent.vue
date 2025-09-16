<template>
    <div class="mb-4">
        <BLink :to="props.route" :class="{ 'mr-4': props.enableMarginRight }">{{ props.infoText }}</BLink>
    </div>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps(['route', 'enableMarginRight', 'infoText']);

</script>