<template>
  <div class="flex flex-col 2xl:w-1/2 w-11/12 md:w-2/3 mx-auto my-8">
    <h1 class="text-5xl font-bold dark:text-slate-50">Les Runes</h1>
    <p class="opacity-70 dark:text-slate-50">Une collection à sauvegarder 🔮</p>
  </div>

  <!-- <div class="fixed bottom-0 right-0 h-48 w-[3000px] bg-gradient-to-l from-amber-900/40 to-yellow-500/40 -z-10 blur-3xl"></div> -->

  <div class="fixed bottom-0 right-0 h-48 w-[3000px] bg-gradient-to-l from-indigo-900/40 to-fuchsia-500/40 -z-10 blur-3xl"></div>

  <main class="sm:grid md:grid-cols-2 md:w-2/3 2xl:grid-cols-3 gap-8 2xl:w-1/2 w-11/12 mx-auto mb-24">
    <!-- 
      Generates a card for each article contained in the 'blog' subfolder 
      (./content/blog) and displays front-matter data (title, date...) 
    -->
    <ContentList path="/resources" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="p-4 border dark:border-slate-500/30 rounded-lg dark:bg-gradient-to-t dark:from-indigo-800/20 dark:text-slate-200 dark:hover:bg-gradient-to-t dark:hover:from-indigo-800/30 dark:hover:border-slate-500/50 duration-200 h-fit">
          <div class="flex flex-col">
            <h2 class="text-2xl font-semibold">{{ article.title }}</h2>
            
            <div class="flex mt-1">
              <p v-for="tag in article.tags" class="dark:bg-white/20 mr-2 px-2 rounded-full text-sm opacity-50">#{{ tag }}</p>
            </div>

            <div class="my-4">
              <p v-if="article.author">🧙 {{ article.author }}</p>
              <p v-if="article.date" class="opacity-50">Publié le {{ article.date }}</p>
            </div>
            
            <p class="">{{ article.description }}</p>
            
            <NuxtLink :to="article._path" class="self-end w-fit border-b border-dotted duration-200 hover:text-white mt-4">Voir la ressource</NuxtLink>
          </div>
      </div>
    </ContentList>
  </main>
</template>