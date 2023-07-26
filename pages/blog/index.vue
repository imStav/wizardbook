<template>
  <div class="flex flex-col 2xl:w-1/2 w-2/3 mx-auto my-12">
    <h1 class="text-3xl font-bold ">Blog</h1>
    <p class="opacity-70">Lorem ipsum dolor sit amet</p>
  </div>

  <main class="sm:grid md:grid-cols-2 md:w-2/3 2xl:grid-cols-3 gap-8 2xl:w-1/2 w-2/3 mx-auto mb-24">
    <!-- 
      Generates a card for each article contained in the 'blog' subfolder 
      (./content/blog) and displays front-matter data (title, date...) 
    -->
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="p-4 border rounded-lg dark:bg-indigo-900/90 dark:text-indigo-100">
        <NuxtLink :to="article._path">
          <div class="flex flex-col">
            <h2 class="text-2xl font-semibold">{{ article.title }}</h2>
            
            <div class="flex mt-1">
              <p v-for="tag in article.tags" class="dark:bg-white/30 mr-2 px-2 rounded-full text-sm opacity-50">#{{ tag }}</p>
            </div>

            <div class="my-4">
              <p v-if="article.author">{{ article.author }}</p>
              <p v-if="article.date" class="opacity-50">Published {{ article.date }}</p>
            </div>
            
            <p class="">{{ article.description }}</p>
          </div>

          <img v-if="article.img" :src="article.img" alt="" class="">
        </NuxtLink>
      </div>
    </ContentList>
  </main>
</template>