<script setup lang="ts">
import { Trade } from '~/interfases/templates';
</script>

<template>
    <div class="container mt-20">
        <div>
            <h2 class="title text-center text-[45px]">Savdo yo’nalish turlari:</h2>
        </div>
        <div class="mt-10  pb-16 flex flex-wrap">
            <div class="w-3/12" v-for="(item, index) in Trade" :key="index">
                <li class="title">{{ item.title }}</li>
            </div>
        </div>
    </div>
</template>