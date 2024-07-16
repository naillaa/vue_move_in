<template>
  <div class="bg-[#D6E4E5] fixed w-full top-0 z-50 shadow-2xl">
    <div class="py-2 flex w-full items-center">
      <div class="flex justify-between w-full mx-[50px]">
        <div class="flex flex-row items-center">
          <img class="h-[63px]" src="@/assets/Move3.png" alt="Logo" />
          <h1 class="pl-3 text-[20px] font-bold text-[#035397]">Move.In</h1>
        </div>
        <div class="pt-2 items-center flex">
          <router-link
            to="/login"
            class="mx-5 px-[60px] hover:bg-[#42877e] py-2 rounded-full bg-[#4FA095]"
            >Login</router-link
          >
          <router-link
            to="/register"
            class="hover:bg-[#42877e] px-[40px] py-2 rounded-full bg-[#4FA095]"
            >Sign Up</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderHome',
};
</script>

<style scoped></style>
