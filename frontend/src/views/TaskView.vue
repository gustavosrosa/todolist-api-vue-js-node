<template>
   <div>
      <TaskInfoComponent v-for="task in tasks" :key="task.id" :task="task" class="mb-4" />
      <CreateNewTaskComponent v-if="tasks.length == 0"
         class="d-flex justify-content-center align-items-center"/>
      <ModalComponent :title="headerModal" :message="errorMessage" :modal="modal" />
   </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import axios from 'axios';
import ModalComponent from '@/components/ModalComponent.vue';
import TaskInfoComponent from '@/components/TaskInfoComponent.vue';
import CreateNewTaskComponent from '@/components/CreateNewTaskComponent.vue';
import { strings } from '@/utils/strings';

const tasks = ref([]);
const modal = ref(false)
const errorMessage = ref(strings.VAZIO);
const headerModal = ref(strings.SUCCESS);

onMounted(async () => {
   try {
      const response = await axios.get(strings.URL_BACKEND);
      tasks.value = response.data;
   } catch (error) {
      errorMessage.value = error.message;
      headerModal.value = strings.ERROR;
      modal.value = true;
   }
})

</script>
