<template>
    <div class="mt-12">
        <ul >
            <li></li>
        </ul>
      <form  class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="StoreSkill(form)">
         <div class="space-y-4">
            <label for="default-input" class="block mb-2 text-sm font-medium text-white dark:text-gray-900">Name</label>
            <div v-if="errors.name">
                 <span class="text-sm text-red-400 ">{{ errors.name[0] }}</span>
            </div>
             <input type="text" v-model="form.name" class=" bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
         </div>
         <div class="space-y-4 mt-4">
            <label for="default-input" class="block mb-2 text-sm font-medium text-white dark:text-gray-900">slug</label>
            <div v-if="errors.slug">
                 <span class="text-sm text-red-400 ">{{ errors.slug[0] }}</span>
            </div>
             <input type="text" v-model="form.slug" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
         </div>
         <div class="mt-4">
           <button type="submit" class=" px-4 py-2  bg-green-600 hover:bg-green-800 text-white rounded">Add</button>
         </div>
      </form>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import useSkills from '../../composables/skill';

const { StoreSkill , errors } = useSkills();

const form = reactive({
    name:'',
    slug:''
})
</script>