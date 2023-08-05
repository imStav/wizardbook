<template>
  <div class="2xl:w-1/2 w-11/12 md:w-2/3 mx-auto my-8">
    <h1
      text="5xl"
      font="display"
    >
      Les Runes
    </h1>
    <p 
      class=""
      text="blueGray"
      font="sans"
    >
      Une collection à sauvegarder 🔮
    </p>
  </div>

  <!-- <div class="fixed bottom-0 right-0 h-48 w-[3000px] bg-gradient-to-l from-amber-900/40 to-yellow-500/40 -z-10 blur-3xl"></div> -->

  <div class="fixed bottom-0 right-0 h-48 w-[3000px] bg-gradient-to-l from-indigo-900/30 to-fuchsia-500/30 -z-10 blur-3xl"></div>

  <main class="sm:grid md:grid-cols-2 md:w-2/3 2xl:grid-cols-3 gap-8 2xl:w-1/2 w-11/12 mx-auto mb-24">
    <!-- 
      Generates a card for each article contained in the 'blog' subfolder 
      (./content/blog) and displays front-matter data (title, date...) 
    -->
    <ContentList path="/resources" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="">
          <div 
            class="p-4 rounded-lg backdrop-blur-2xl"
            flex="~ col"
            bg-gradient="to-t from-stone/05 to-blueGray/10"
            font="sans"
          >
            <h2
              text="2xl"
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
                bg="blueGray/30 "
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
              class="rounded-lg my-4 w-full h-36 object-cover"
            >
            
            <div
              class="hover:text-white mt-4 w-fit" 
              flex="~ self-end items-center"
            >
              <NuxtLink 
              :to="article._path"
              text="blueGray hover:white"
              decoration="none"
              >
                Lire la suite
              </NuxtLink>
              <div class="i-lucide-arrow-right ml-2"></div>
            </div>
          </div>

          <div class="my-6 sm:hidden"></div>
      </div>
    </ContentList>
  </main>
</template>