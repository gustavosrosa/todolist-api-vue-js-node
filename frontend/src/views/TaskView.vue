<template>
   <div>
      <BCard title="Card Title">
         <BCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
         </BCardText>
         <BButton to="/form" variant="primary" class="mr-2">Editar</BButton>
         <BButton href="#" variant="danger">Excluir</BButton>
      </BCard>
   </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import axios from 'axios';

const data = ref({});

onMounted(async () => {
   try {
      const response = await axios.get("https://todolist-api-vue-js-node.onrender.com/task");
      data.value = response.data;
   } catch (error) {
      console.log("Error", error);
   }
})

</script>
