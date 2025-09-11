<template>
   <div>
      <div v-for="task in tasks" :key="task.id" class="mb-4">
         <BCard :title="task.name">
            <BCardText>{{ task.description }}</BCardText>
            <BButton to="/form" variant="primary" class="mr-2">Editar</BButton>
            <BButton href="#" variant="danger">Excluir</BButton>
         </BCard>
      </div>
      <ModalComponent :title="'Ocorreu um erro'" :message="errorMessage" :action="'Recarregar página'"
            :option="'RELOAD'" :modal="modal"/>
   </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import axios from 'axios';
import ModalComponent from '@/components/ModalComponent.vue';

const tasks = ref([]);
const modal = ref(false)
const errorMessage = ref("");

onMounted(async () => {
   try {
      const response = await axios.get("https://todolist-api-vue-js-node.onrender.com/task");
      tasks.value = response.data;
   } catch (error) {
      errorMessage.value = error.message;
      modal.value = true;
      console.log("Error", error);
   }
})

</script>
