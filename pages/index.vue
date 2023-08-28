<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/blog', limit: 3, sort: [{ date: -1 }] }
</script>

<template>
  <div class="grid sm:grid-cols-2 place-content-center place-items-center 2xl:w-1/2 w-11/12 md:w-2/3 mx-auto my-8">
    <div>
      <h1
      text="5xl white"
      font="bold display"
      >
        Wizard Book
      </h1>
      <p 
        text="blueGray"
        font="sans"
      >
        Le Grimoire du mage développeur
      </p>

      <div 
      class="mt-8"
      text="blueGray"
      font="sans"
      >
        <p>
          Découvrez les bases du développement <strong>front-end</strong> en passant par le <strong>HTML5</strong>, le <strong>CSS3</strong>, le <strong>JavaScript</strong> et bien d'autres choses encore...
        </p>
      </div>
    </div>

    <!-- <div class="hidden sm:block h-48 w-48 rounded-full bg-blueGray blur-3xl"></div> -->
  </div>

  <div class="grid gap-4 sm:flex items-center 2xl:w-1/2 w-11/12 md:w-2/3 mx-auto my-8">
    <div 
      class="text-black px-4 py-2 rounded-full w-fit duration-150" 
      bg="white hover:blueGray"
    >
      <NuxtLink 
        to="/blog"
        class="text-black"
        font="sans semibold"
        decoration="none"
      >
        Lire le Grimoire
      </NuxtLink>
      <!-- <div class="i-lucide-arrow-right ml-2"></div> -->
    </div>

    <div class="flex items-center ml-2 hover:text-white">
      <NuxtLink 
        to="/resources"
        class="text-blueGray hover:text-white"
        font="sans semibold"
        decoration="none"
      >
        Voir les Runes
      </NuxtLink>
      <div class="i-lucide-arrow-right ml-2"></div>
    </div>
  </div>

  <div class="2xl:w-1/2 w-11/12 md:w-2/3 mx-auto mt-24 mb-12">
    <h2
      text="3xl white"
      font="semibold display"
    >
      Les derniers articles
    </h2>
    <p 
      text="blueGray"
      font="sans"
    >
      Un Grimoire encore d'actualité
    </p>
  </div>

  <div class="sm:grid md:grid-cols-2 md:w-2/3 2xl:grid-cols-3 2xl:w-1/2 w-full gap-8 mx-auto mb-24">
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <div 
          class="p-4 sm:backdrop-blur-2xl card-border duration-150"
          flex="~ col"
          bg="sm:bluegray/10 transparent"
          font="sans"
        >
          <h2
            text="2xl white"
            font="display semibold"
          >
            {{ article.title }}
          </h2>
        
          <div 
            class="mt-1"
            flex="~"
          >
            <p 
              v-for="tag in article.tags" 
              class="mr-2 px-2 rounded-full"
              text="sm"
              bg="blueGray/25"
            >
              #{{ tag }}
            </p>
          </div>

          <div class="my-4">
            <p v-if="article.author">🧙 {{ article.author }}</p>
            <p v-if="article.date" class="opacity-50">Publié le {{ article.date }}</p>
          </div>
        
          <p class="">{{ article.description }}</p>

          <img 
            v-if="article.img" 
            :src="article.img" 
            alt="" 
            class="rounded-lg my-6 w-full h-36 object-cover"
          >
        
          <div
            class="text-white px-4 py-1.5 rounded-full w-fit duration-150 hover:text-black" 
            bg="transparent hover:blueGray"
            flex="~ self-end items-center"
            border="solid 1 blueGray/50"
          >
            <NuxtLink 
              :to="article._path"
              class="text-white hover:text-black"
              decoration="none"
            >
              Lire la suite
            </NuxtLink>
            <div class="i-lucide-arrow-right ml-2"></div>
          </div>
        </div>

      </div>
    </ContentList>
  </div>

  <div class="fixed -mb-48 bottom-0 h-[500px] w-[2000px] bg-gradient-to-t from-fuchsia-900 via-sky-600/50 to-transparent -z-10 blur-3xl"></div>

  <NuxtPage />
</template>