<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';
</script>

<template>
  <div class="pt-24 sm:pt-32 max-w-7xl w-full ml-60">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-purple-dark sm:text-4xl mb-8 text-shadow-purple">Eisenhower Matrix</h2>
      </div>
      <Sidebar />
      <div class="flex items-center justify-center relative">
        <img src="../assets/images/graph.png" alt="graphic" class="object-cover absolute max-w-7xl w-full">
        <div class="w-full grid grid-cols-2 gap-12 z-10">
          <div class="w-full h-60 rounded-tl-[3rem] rounded-br-[3rem] p-10 text-[3rem] bg-purple border-solid border-2 border-purple hover:border-purple-light hover:cursor-pointer hover:shadow-box-shadow-inset transition-shadow duration-300">Important Urgent</div>
          <div class="w-full h-60 rounded-tr-[3rem] rounded-bl-[3rem] p-10 text-[3rem] bg-purple border-solid border-2 border-purple hover:border-purple-light hover:cursor-pointer hover:shadow-box-shadow-inset-reverse transition-shadow duration-300">Important non-urgent</div>
          <div class="w-full h-60 rounded-tr-[3rem] rounded-bl-[3rem] p-10 text-[3rem] bg-purple border-solid border-2 border-purple hover:border-purple-light hover:cursor-pointer hover:shadow-box-shadow-inset-negative transition-shadow duration-300">Urgent unimportant</div>
          <div class="w-full h-60 rounded-tl-[3rem] rounded-br-[3rem] p-10 text-[3rem] bg-purple border-solid border-2 border-purple hover:border-purple-light hover:cursor-pointer hover:shadow-box-shadow-inset-negative-reverse transition-shadow duration-300">Urgent important</div>
        </div>
      </div>
    </div>
  </div>
</template>