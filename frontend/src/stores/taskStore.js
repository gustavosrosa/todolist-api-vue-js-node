import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    currentTask: null,
    origin: null
  })
})

export const useRouteStore = defineStore('route', {
  state: () => ({
    route: null,
  })
})

