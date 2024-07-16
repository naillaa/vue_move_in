<template>
  <div>
    @include('layout.headerLogin')
    <div class="flex flex-col justify-center w-full mt-[200px]">
      <h1 class="font-bold text-[25px] mx-[120px]">Profile</h1>
      <form
        @submit.prevent="submitForm"
        class="flex flex-row mt-[50px] justify-center"
      >
        <div class="flex flex-col font-Open Sans">
          <input
            v-model="fullname"
            type="text"
            name="fullname"
            class="w-[600px] placeholder:text-black border rounded-md bg-[#D6E4E5] mt-2 p-3 placeholder:-pl-[600px]"
            placeholder="Full Name"
          />
          <input
            v-model="username"
            type="text"
            name="username"
            class="w-[600px] border placeholder:text-black rounded-md bg-[#D6E4E5] mt-5 p-3 placeholder:-pl-[600px]"
            placeholder="Username"
          />
          <input
            v-model="phone"
            type="number"
            name="phone"
            class="w-[600px] placeholder:text-black border rounded-md bg-[#D6E4E5] mt-5 p-3 placeholder:-pl-[600px]"
            placeholder="Phone Number"
          />
          <input
            v-model="address"
            type="text"
            name="address"
            class="w-[600px] placeholder:text-black border rounded-md bg-[#D6E4E5] mt-5 p-3 placeholder:-pl-[600px]"
            placeholder="Address"
          />
        </div>
        <div class="flex flex-col ml-[100px] font-Open Sans">
          <input
            v-model="birth_date"
            type="date"
            name="birth_date"
            class="w-[600px] placeholder:text-black border rounded-md mt-2 bg-[#D6E4E5] p-3 placeholder:-pl-[600px]"
            placeholder="Birth Date dd/mm/yy"
          />
          <input
            v-model="password"
            type="password"
            name="password"
            class="w-[600px] placeholder:text-black border rounded-md bg-[#D6E4E5] mt-5 p-3 placeholder:-pl-[600px] @error('password') is-invalid @enderror"
            placeholder="Password"
          />
          <div class="invalid-feedback text-red-500">
            {{ $message }}
          </div>
          <input
            v-model="confirm_password"
            type="password"
            name="confirm_password"
            class="w-[600px] placeholder:text-black border rounded-md bg-[#D6E4E5] mt-5 p-3 placeholder:-pl-[600px]"
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            class="text-center bg-[#4FA095] rounded-lg mt-5 p-3 text-white font-bold"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProfile',
  data() {
    return {
      fullname: '{{ $user->fullname }}', // Sesuaikan dengan variabel dari Blade
      username: '{{ $user->username }}', // Sesuaikan dengan variabel dari Blade
      phone: '{{ $user->phone }}', // Sesuaikan dengan variabel dari Blade
      address: '{{ $user->address }}', // Sesuaikan dengan variabel dari Blade
      birth_date: '{{ $user->birth_date }}', // Sesuaikan dengan variabel dari Blade
      password: '', // Untuk keamanan, tidak menampilkan password dari Blade
      confirm_password: '', // Untuk keamanan, tidak menampilkan password dari Blade
    };
  },
  methods: {
    submitForm() {
      // Lakukan submit form di sini jika diperlukan
      console.log('Form submitted!');
      // Anda dapat menambahkan logika lainnya sesuai kebutuhan
    },
  },
};
</script>

<style scoped>
/* Gaya tambahan jika diperlukan */
</style>
