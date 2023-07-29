<template>
  <div class="flex flex-col 2xl:w-1/2 w-2/3 mx-auto my-12">
    <h1 class="text-3xl font-bold dark:text-slate-50">Blog</h1>
    <p class="opacity-70 dark:text-slate-50">Lorem ipsum dolor sit amet</p>
  </div>

  <div class="fixed bottom-0 right-0 h-48 w-[3000px] bg-gradient-to-l from-indigo-900/50 to-fuchsia-500/50 -z-10 blur-3xl"></div>

  <main class="sm:grid md:grid-cols-2 md:w-2/3 2xl:grid-cols-3 gap-8 2xl:w-1/2 w-2/3 mx-auto mb-24">
    <!-- 
      Generates a card for each article contained in the 'blog' subfolder 
      (./content/blog) and displays front-matter data (title, date...) 
    -->
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="p-4 border dark:border-slate-500/30 rounded-lg dark:bg-gradient-to-t dark:from-indigo-800/20 dark:text-slate-200 dark:hover:bg-gradient-to-t dark:hover:from-indigo-800/30 dark:hover:border-slate-500/50 duration-200">
          <div class="flex flex-col">
            <h2 class="text-2xl font-semibold">{{ article.title }}</h2>
            
            <div class="flex mt-1">
              <p v-for="tag in article.tags" class="dark:bg-white/20 mr-2 px-2 rounded-full text-sm opacity-50">#{{ tag }}</p>
            </div>

            <div class="my-4">
              <p v-if="article.author">🧙 {{ article.author }}</p>
              <p v-if="article.date" class="opacity-50">Published {{ article.date }}</p>
            </div>
            
            <p class="">{{ article.description }}</p>

            <img v-if="article.img" :src="article.img" alt="" class="rounded-lg my-4 w-full h-36 object-cover">
            
            <NuxtLink :to="article._path" class="self-end w-fit border-b border-transparent hover:border-current duration-200">Read more</NuxtLink>
          </div>
      </div>
    </ContentList>
  </main>
</template>