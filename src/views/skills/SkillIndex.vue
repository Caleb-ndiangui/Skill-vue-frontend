
<template>
<div class="mt-10"> 
 <div class="relative overflow-x-auto">
    <RouterLink class="px-4 py-2 mb-2 bg-indigo-600 hover:bg-indigo-800 text-white rounded-lg float-right" to="/skills/create">add Skill</RouterLink>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Id
                </th>
                <th scope="col" class="px-6 py-3">
                    name
                </th>
                <th scope="col" class="px-6 py-3">
                    slug
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="skill in skills" :key="skill.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {{skill.id}}
                </td>
                <td class="px-6 py-4">
                    {{skill.name}}
                </td>
                <td class="px-6 py-4">
                    {{skill.slug}}
                </td>
                <td class="px-6 py-4">
                    <RouterLink class="px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 text-white rounded" :to="{name:'skilledit', params:{id:skill.id}}">edit</RouterLink>
                    <button type="button" @click="DestroySkill(skill.id)" class=" px-4 py-2  bg-red-600 hover:bg-red-800 text-white rounded">Delete</button>
                </td>
            </tr>
           
        </tbody>
    </table>
</div>
</div> 
</template>

<script setup>

import { onMounted } from 'vue';
import useSkills from '../../composables/skill';
const { skills , getSkills, DestroySkill} = useSkills();

onMounted( () => getSkills());

</script>
