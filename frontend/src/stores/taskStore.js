import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    currentTask: null,
    origin: null
  })
})