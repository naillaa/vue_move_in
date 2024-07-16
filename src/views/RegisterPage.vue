<template>
  <div class="flex flex-row">
    <img class="h-screen" src="@/assets/delivery 2.png" alt="" />
    <form @submit.prevent="register">
      <!-- Gunakan Vue.js event handler -->
      <div class="flex px-[80px] pt-[50px] flex-col">
        <h1 class="font-bold text-[24px]">Register</h1>
        <div class="flex flex-row">
          <div class="flex flex-col mt-7 font-Open Sans">
            <input
              v-model="fullname"
              type="text"
              name="fullname"
              class="w-[500px] border rounded-xl bg-[#D6E4E5] mt-5 p-3 placeholder:-pl-[600px] placeholder:text-[black]"
              placeholder="Name"
            />
            <input
              v-model="email"
              type="email"
              name="email"
              class="w-[500px] border rounded-xl bg-[#D6E4E5] mt-5 p-3 placeholder:-pl-[600px] placeholder:text-[black]"
              placeholder="Email"
            />
            <input
              v-model="phone"
              type="number"
              name="phone"
              class="w-[500px] border rounded-xl bg-[#D6E4E5] mt-5 p-3 placeholder:-pl-[600px] placeholder:text-[black]"
              placeholder="Phone Number"
            />
            <input
              v-model="password"
              type="password"
              name="password"
              class="w-[500px] border rounded-xl bg-[#D6E4E5] mt-7 p-3 placeholder:-pl-[600px] placeholder:text-[black]"
              placeholder="Password"
            />
            <input
              v-model="password_confirmation"
              type="password"
              name="password_confirmation"
              class="w-[500px] border rounded-xl bg-[#D6E4E5] mt-7 p-3 placeholder:-pl-[600px] placeholder:text-[black]"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <button
          type="submit"
          class="bg-[#4FA095] mt-[50px] mb-3 text-white p-3 rounded-xl "
        >
          REGISTER
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from '@/axios';

export default {
  data() {
    return {
      fullname: '',
      email: '',
      phone: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    register() {
      axios.post('/register', {
        fullname: this.fullname,
        email: this.email,
        phone: this.phone,
        password: this.password,
        password_confirmation: this.password_confirmation
      })
      .then(response => {
        console.log(response.data);
        alert('User successfully registered');
        // Handle successful registration (e.g., redirect to login)
      })
      .catch(error => {
        console.error(error.response.data);
        alert('Error registering user');
      });
    }
  }
};
</script>

<style scoped>
/* CSS khusus untuk komponen ini bisa ditambahkan di sini */
</style>
