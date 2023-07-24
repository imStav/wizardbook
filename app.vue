<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>

  <div>
    <ContentDoc v-slot="{ doc }">
      <!-- <h1 class="">{{ doc.title }}</h1> -->
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>
