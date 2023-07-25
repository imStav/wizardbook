<template>
  <nav class="border-b py-2">
    <ContentNavigation v-slot="{ navigation }">
      <ul class="flex w-full justify-center">
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path" class="font-medium text-xl mx-2">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>

  <NuxtPage />
</template>
