<template>
  <div class="container md:w-[80%] mx-auto pt-5 pb-10 rounded-md text-white">
    <form>
      <h1>Register new student</h1>
      <div class="grid grid-cols-2 gap-5 mt-5">
        <input
          type="text"
          placeholder="Enter firstname"
          class="border-gray-300 text-gray-200 border bg-transparent px-3 py-2 rounded-md text-sm focus:border-yellow-500 focus:outline-none transition duration-300"
        />
        <input
          type="text"
          placeholder="Enter firstname"
          class="border-gray-300 text-gray-200 border bg-transparent px-3 py-2 rounded-md text-sm focus:border-yellow-500 focus:outline-none transition duration-300"
        />
        <input
          type="email"
          placeholder="Enter email"
          class="border-gray-300 text-gray-200 border bg-transparent px-3 py-2 rounded-md text-sm focus:border-yellow-500 focus:outline-none transition duration-300"
        />
      </div>
      <v-btn>Register</v-btn>
    </form>
  </div>
</template>

<script setup lang="ts"></script>
