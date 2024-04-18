<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
const user = ref("");

onMounted(() => {
  try {
    if (userStore.userLogged()) {
      user.value = userStore.getUser();
    } else {
      setTimeout(() => {
        router.push("/sign-in");
      }, 2000);
    }
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <main
    class="bg-black text-white w-screen h-screen flex justify-center items-center text-3xl font-bold"
  >
    <div v-if="userStore.userLogged()">
      {{ user }}
    </div>
    <div v-else>
      <div class="loader"></div>
      <p>Carregando ...</p>
    </div>
  </main>
</template>

<style scoped>
.victory {
  background: url(../assets/victory.jpg) no-repeat center center;
}
</style>
