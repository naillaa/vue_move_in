<template>
  <div class="flex flex-row">
    <img class="h-screen" src="@/assets/delivery.png" alt="" />
    <form @submit.prevent="loginUser">
      <div class="flex px-[80px] pt-[200px] flex-col">
        <h1 class="font-bold text-[24px]">Login</h1>
        <div class="flex flex-row">
          <div class="flex flex-col mt-7 font-Open Sans">
            <input
              v-model="email"
              type="email"
              name="email"
              class="w-[500px] border rounded-xl bg-[#D6E4E5] mt-5 p-3 placeholder:text-[black]"
              placeholder="Email"
            />
            <input
              v-model="password"
              type="password"
              name="password"
              class="w-[500px] border rounded-xl bg-[#D6E4E5] mt-7 p-3 placeholder:text-[black]"
              placeholder="Password"
            />
          </div>
        </div>
        <button
          type="submit"
          class="bg-[#4FA095] mt-[50px] mb-3 text-white p-3 rounded-xl"
        >
          LOGIN
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['loginUser']),
    async loginUser() {
      try {
        await this.loginUser({ email: this.email, password: this.password });
        alert('Login successful');
        this.router.push({ path: '/home' });
      } catch (error) {
        console.error(error);
        alert('Login failed');
      }
    },
  },
};
</script>

<style scoped>
/* CSS khusus untuk komponen ini bisa ditambahkan di sini */
</style>
