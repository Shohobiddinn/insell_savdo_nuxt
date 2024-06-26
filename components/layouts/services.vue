<script setup lang="ts">
import { templates } from '~/interfases/templates';



</script>

<template>
    <div>
        <h2 class="text-center text-Primary text-[45px] font-bold">Bizning Xizmatlar</h2>
        <div class="py-5 flex flex-wrap gap-5">
            <div class="card bg-Primary w-3/12 flex flex-col flex-auto justify-center items-center rounded-2xl relative shadow-lg"
                v-for="(item, index) in templates" :key="index">
                <div class="py-8 pb-[120px]">
                    <NuxtImg :src="item.img" width="100" />

                </div>
                <div class="flex items-center w-[100%] gap-3 bg-white px-5 h-[100px] rounded-b-2xl absolute bottom-0">
                    <h2 class="text-[50px] text-Primary font-bold">{{ index + 1 }}</h2>
                    <p class="text-Primary text-[35px] leading-0 font-semibold">{{ item.text }}</p>
                </div>
            </div>

        </div>
    </div>
</template>