<template>
   <div>
      <div v-for="task in tasks" :key="task.id">
         <BCard :title="task.name">
            <BCardText>{{ task.description }}</BCardText>
            <BButton to="/form" variant="primary" class="mr-2">Editar</BButton>
            <BButton href="#" variant="danger">Excluir</BButton>
         </BCard>
      </div>
      <BModal v-model="modal" :title="'Ocorreu um erro'">
         {{ errorMessage }}

         <template #footer>
            <BButton variant="danger" @click="recarregarPagina">
               Recarregar página
            </BButton>
         </template>
      </BModal>
   </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import axios from 'axios';

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

function recarregarPagina() {
   window.location.reload();
}

</script>
