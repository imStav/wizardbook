<template>
  <nav class="sticky top-0 w-full py-4 backdrop-blur-2xl z-50">
    <div class="w-fit mx-auto">
      <NuxtLink to="/" class="hover:text-white duration-200 border-b border-dotted">Accueil</NuxtLink>
      <NuxtLink to="/blog" class="mx-4 hover:text-white duration-200 border-b border-dotted">Grimoire</NuxtLink>
      <NuxtLink to="/resources" class="hover:text-white duration-200 border-b border-dotted">Runes</NuxtLink>
    </div>
  </nav>

  <NuxtPage />
</template>