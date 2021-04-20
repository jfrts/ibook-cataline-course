<template>
  <header class="grid justify-center">
    <nav
      class="shadow-lg bg-gray-900 w-96 h-16 px-10 rounded-full items-center"
    >
      <ul class="flex items-center justify-evenly h-full">
        <li>
          <Logo />
        </li>
        <li>
          <NuxtLink
            to="/"
            class="text-gray-100 relative font-medium hover:text-gray-300"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="text-gray-100 relative font-medium hover:text-gray-300"
          >
            Sobre
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.nuxt-link-exact-active:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  background: white;
  left: 0;
  bottom: -26px;
}
</style>
