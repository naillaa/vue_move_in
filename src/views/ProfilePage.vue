<template>
  <div>
    <HeaderLogin />
    <div class="flex flex-col justify-center w-full mt-20">
      <h1 class="font-bold text-2xl mx-20">Profile</h1>
      <form>
        <div class="flex flex-row mt-10 justify-center">
          <div class="flex flex-col font-Open Sans">
            <input
              disabled
              v-model="fullname"
              type="text"
              name="fullname"
              class="w-600 placeholder-text-black border rounded-md bg-[#D6E4E5] mt-2 p-3"
              placeholder="Full Name"
            />
            <input
              disabled
              v-model="username"
              type="text"
              name="username"
              class="w-600 border placeholder-text-black rounded-md bg-[#D6E4E5] mt-5 p-3"
              placeholder="Username"
            />
            <input
              disabled
              v-model="phone"
              type="number"
              name="phone"
              class="w-600 placeholder-text-black border rounded-md bg-[#D6E4E5] mt-5 p-3"
              placeholder="Phone Number"
            />
          </div>
          <div class="flex flex-col ml-100 font-Open Sans">
            <input
              disabled
              v-model="address"
              type="text"
              name="address"
              class="w-600 placeholder-text-black border rounded-md bg-[#D6E4E5] mt-2 p-3"
              placeholder="Address"
            />
            <input
              disabled
              v-model="birthDate"
              type="date"
              name="birth_date"
              class="w-600 placeholder-text-black border rounded-md mt-5 bg-[#D6E4E5] p-3"
              placeholder="Birth Date dd/mm/yy"
            />
            <input
              disabled
              v-model="password"
              type="password"
              name="password"
              class="w-600 placeholder-text-black border rounded-md bg-[#D6E4E5] mt-5 p-3"
              placeholder="Password"
            />
            <a
              href="/profile/edit"
              class="text-center bg-[#4FA095] rounded-lg mt-5 p-3 text-white font-bold"
              >EDIT PROFILE</a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import HeaderLogin from '@/components/HeaderLogin.vue';

export default {
  components: {
    HeaderLogin,
  },
  data() {
    return {
      fullname: "{{ $user->fullname }}",
      username: "{{ $user->username }}",
      phone: "{{ $user->phone }}",
      address: "{{ $user->address }}",
      birthDate: "{{ $user->birth_date }}",
      password: "{{ $user->password }}",
    };
  },
};
</script>

<style scoped>
/* CSS khusus untuk komponen ini bisa ditambahkan di sini */
</style>
