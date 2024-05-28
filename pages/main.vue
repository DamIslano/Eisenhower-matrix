<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';
import { ref } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

const enabled = ref(true)
const list1 = ref([
  { name: '1', id: 1 },
  { name: '2', id: 2 },
  { name: '3', id: 3 },
  { name: '4', id: 4 },
  { name: '5', id: 5 },
])
const list2 = ref([
  { name: '6', id: 6 },
  { name: '7', id: 7 },
  { name: '8', id: 8 },
  { name: '9', id: 9 },
  { name: '10', id: 10 },
])
const list3 = ref([
  { name: '11', id: 11 },
  { name: '12', id: 12 },
  { name: '13', id: 13 },
  { name: '14', id: 14 },
  { name: '15', id: 15 },
])
const list4 = ref([
  { name: '16', id: 16 },
  { name: '17', id: 17 },
  { name: '18', id: 18 },
  { name: '19', id: 19 },
  { name: '20', id: 20 },
])
const dragging = ref(false)

function log(event: any) {
  console.log(event)
}
</script>

<template>
  <div class="pt-24 sm:pt-32 max-w-7xl w-full ml-60">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-purple-dark sm:text-4xl mb-8 text-shadow-purple">Eisenhower Matrix</h2>
      </div>
      <div class="flex items-center justify-center relative">
        <img src="../assets/images/graph.png" alt="graphic" class="object-cover absolute max-w-7xl w-full">
        <div class="w-full grid grid-cols-2 gap-12 z-10">
          <div class="w-full overflow-y-auto h-60 rounded-tl-[3rem] rounded-br-[3rem] p-5 bg-purple border-solid border-2 border-purple hover:border-purple-light hover:cursor-pointer hover:shadow-box-shadow-inset transition-shadow duration-300">
            <div class="flex">
              <VueDraggableNext class="dragArea list-group w-full" :list="list1" group="items" @change="log">
                <div
                  class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
                  v-for="element in list1"
                  :key="element.id"
                >
                  {{ element.name }}
                </div>
              </VueDraggableNext>
            </div>
          </div>
          <div class="w-full overflow-y-auto h-60 rounded-tr-[3rem] rounded-bl-[3rem] p-5 bg-purple border-solid border-2 border-purple hover:border-purple-light hover:cursor-pointer hover:shadow-box-shadow-inset-reverse transition-shadow duration-300">
            <div class="flex">
              <VueDraggableNext class="dragArea list-group w-full" :list="list2" group="items" @change="log">
                <div
                  class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
                  v-for="element in list2"
                  :key="element.id"
                >
                  {{ element.name }}
                </div>
              </VueDraggableNext>
            </div>
          </div>
          <div class="w-full overflow-y-auto h-60 rounded-tr-[3rem] rounded-bl-[3rem] p-5 bg-purple border-solid border-2 border-purple hover:border-purple-light hover:cursor-pointer hover:shadow-box-shadow-inset-negative transition-shadow duration-300">
            <div class="flex">
              <VueDraggableNext class="dragArea list-group w-full" :list="list3" group="items" @change="log">
                <div
                  class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
                  v-for="element in list3"
                  :key="element.id"
                >
                  {{ element.name }}
                </div>
              </VueDraggableNext>
            </div>
          </div>
          <div class="w-full overflow-y-auto h-60 rounded-tl-[3rem] rounded-br-[3rem] p-5 bg-purple border-solid border-2 border-purple hover:border-purple-light hover:cursor-pointer hover:shadow-box-shadow-inset-negative-reverse transition-shadow duration-300">
            <div class="flex">
              <VueDraggableNext class="dragArea list-group w-full" :list="list4" group="items" @change="log">
                <div
                  class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
                  v-for="element in list4"
                  :key="element.id"
                >
                  {{ element.name }}
                </div>
              </VueDraggableNext>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>