
<template>
  <div class="bg-main text-primary font h-screen flex justify-center items-center bg-bg">
    <div class="shadow-lg h-[600px] w-[900px] bg-white flex flex-row rounded-xl">
      <nav class="bg-navbar bg-cover bg-no-repeat m-5 p-12 pr-24 rounded-lg text-white">
        <NavbarMain />
      </nav>
      <main class="flex flex-col ml-10 mt-14 pr-10 max-w-lg break-words">
        <MainInfo />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarMain from "@/components/Navbar/NavbarMain.vue"
import MainInfo from "@/components/Main/MainInfo.vue"

</script>