<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <section class="p-8 rounded-3xl w-96 shadow-2xl bg-white">
      <title-comp text="Criar Conta"></title-comp>
      <form-sign-up></form-sign-up>
    </section>
  </main>
</template>

<script setup>
import TitleComp from "@/components/TitleComp.vue";
import FormSignUp from "@/components/forms/FormSignUp.vue";
</script>
