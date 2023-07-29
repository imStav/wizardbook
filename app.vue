<template>
  <nav class="sticky top-0 dark:bg-black/10 dark:text-white backdrop-blur-xl py-4 z-50">
    <ContentNavigation v-slot="{ navigation }">
      <ul class="flex w-full justify-center">
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path" class="text-lg mx-2">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>

  <NuxtPage />
</template>
