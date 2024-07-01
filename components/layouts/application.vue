<script setup lang="ts">
import { Trade } from "~/interfases/templates";
const state = reactive({
  email: undefined,
  password: undefined,
});
const FORMSPARK_ACTION_URL = "https://submit-form.com/your-form-id";
async function onSubmit() {
  await fetch(FORMSPARK_ACTION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(state),
  });
  alert("Form submitted");
}
</script>
<template>
  <div class="relative h-[97px]">
  </div>
  <div class="bg-[#D66235] dark:bg-[#D66235] relative ">
    <NuxtImg src="/feedback.png" class="absolute w-full top-[-110px]" />
    <div class="container">
      <div>
        <h2 class="title text-center text-[45px]">Ariza qoldirish.</h2>
      </div>
      <div class="row mt-5">
        <div class="col bg-DarkPrimary p-4 rounded-md">
          <form @submit.prevent="onSubmit">
            <div class="fieldset">
              <label class="text-white" for="name">ISM</label>
              <input type="text" id="name" name="name" required class="form-control" />
            </div>

            <div class="fieldset">
              <label class="text-white" for="email">Telefon raqam</label>
              <input type="tel" id="email" name="email" required class="form-control" />
            </div>

            <div class="fieldset">
              <label class="text-white" for="message">Yo’nalish</label>
              <select id="message" class="form-control">
                <option value="" selected disabled>Yo'nalish tanlang</option>
                <option v-for="(item, idx) in Trade" :key="idx" :value="item.title">
                  {{ item.title }}
                </option>
              </select>
            </div>

            <button type="submit"
              class="btn bg-DarkPrimary  border-[2px] border-white text-white font-bold hover:text-Primary w-100 mt-3">Tasdiqlash</button>
          </form>
        </div>
        <div class="col">
          <h4 class="title text-[25px]">Shuningdek quyidagi raqam orqali biz bilan <br> bog’lanishingiz mumkin.</h4>

          <div class="mt-5 flex justify-center items-center flex-col">
            <a href="tel:+998335190901"
              class="w-[100px] h-[100px] rounded-md bg-white flex items-center justify-center text-Primary">
              <i class="fas fa-phone text-5xl"></i>
            </a>
            <a href="tel:+998335190901" class="title text-3xl mt-3">+998 (33) 519 09 01</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative h-[97px]">
    <NuxtImg src="/Wave 2.png" class="absolute w-full" />
  </div>
</template>
