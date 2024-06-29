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
    <NuxtImg src="/feedback.png" class="absolute w-full" />
  </div>
  <div class="bg-[#D66235] dark:bg-[#D66235]">
    <div class="container">
      <div>
        <h2 class="title text-center text-[45px]">Ariza qoldirish.</h2>
      </div>
      <div class="mt-5 mb-3 flex flex-wrap justify-center items-center">
        <div class="bg-primary">
          <form @submit.prevent="onSubmit">
            <div class="fieldset">
              <label for="name">ISM</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div class="fieldset">
              <label for="email">Telefon raqam</label>
              <input type="tel" id="email" name="email" required />
            </div>

            <div class="fieldset">
              <label for="message">Yo’nalish</label>
              <select id="message">
                <option
                  v-for="(item, idx) in Trade"
                  :key="idx"
                  :value="item.title"
                >
                  {{ item.title }}
                </option>
              </select>
            </div>

            <button type="submit">Jo'n</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


    </div>
    </div>
    </div>
  </div>
  <div class="relative h-[97px]">
    <NuxtImg src="/Wave 2.png" class="absolute w-full" />
  </div>
</template>