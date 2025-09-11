<template>
   <div>
      <TaskInfoComponent v-for="task in tasks" :key="task.id" :task="task" class="mb-4" />
      <ModalComponent :title="'Ocorreu um erro'" :message="errorMessage" :action="'Recarregar página'"
            :option="'RELOAD'" :modal="modal"/>
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

onMounted(async () => {
   try {
      const response = await axios.get("https://todolist-api-vue-js-node.onrender.com/task");
      tasks.value = response.data;
   } catch (error) {
      errorMessage.value = error.message;
      modal.value = true;
   }
})

</script>
