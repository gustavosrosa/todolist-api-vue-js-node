<template>
   <div>
      <TaskInfoComponent v-for="task in tasks" :key="task.id" :task="task" class="mb-4" />
      <ModalComponent :title="headerModal" :message="errorMessage" :option="'RELOAD'" :modal="modal"/>
   </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import axios from 'axios';
import ModalComponent from '@/components/ModalComponent.vue';
import TaskInfoComponent from '@/components/TaskInfoComponent.vue';

const tasks = ref([]);
const modal = ref(false)
const errorMessage = ref("");
const headerModal = ref("Sucesso!");

onMounted(async () => {
   try {
      const response = await axios.get("https://todolist-api-vue-js-node.onrender.com/task");
      tasks.value = response.data;
   } catch (error) {
      errorMessage.value = error.message;
      headerModal.value = "Ocorreu um erro";
      modal.value = true;
   }
})

</script>
