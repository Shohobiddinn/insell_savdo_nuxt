<script setup lang="ts">
import YouTube from 'vue3-youtube';

</script>

<template>
    <div class="container mx-auto pt-3 pb-2">
        <div class="flex justify-between items-start">
            <div class="col">
                <h2 class="title text-3xl mb-3">
                    Dastur haqida
                </h2>
                <p class="paragrf">
                    INSELL Savdo Platformasi 15 turdagi savdo do'konlari ish jarayonlari uchun mahsus ishlab chiqilgan
                    bo'lib, barcha yo'nalishlarni o'ziga hosligi hisobga olingan. Boshqa savdo dasturlaridan farqli
                    INSELL Savdo Platformasi shablon emas.
                </p>
                <p class="paragrf mt-4"> Bundan tashqari, Dasturga qo’shimcha va o’zgartirishlar
                    kiritish xizmati mavjud. Bu xizmatdan foydalanib, “MAHSUS DASTUR” ni premium foydalanuvchi sifati
                    o’zingiz istaganingizdek buyurtma berishingiz mumkin.
                </p>
            </div>
            <div class="col">
                <div class="rounded-3xl  overflow-hidden">

                    <SharedYoutubeVideo videoUrl="https://youtu.be/uv0LekSBlAc?si=kmilK5t0Kp9RrjUw" />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>