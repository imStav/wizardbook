<template>
  <div class="2xl:w-1/2 w-11/12 md:w-2/3 mx-auto my-8">
    <h1
      text="5xl white"
      font="display"
    >
      Le Grimoire
    </h1>
    <p 
      text="blueGray"
      font="sans"
    >
      Un recueil de notes et de savoirs
    </p>
  </div>

  <main class="grid sm:grid md:grid-cols-2 md:w-2/3 2xl:grid-cols-3 2xl:w-1/2 w-11/12 gap-8 mx-auto mb-24">
    <!-- 
      Generates a card for each article contained in the 'blog' subfolder 
      (./content/blog) and displays front-matter data (title, date...) 
    -->
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path">
          <div 
            class="p-4 backdrop-blur-3xl card-border duration-150 rounded-lg"
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
              class="rounded-lg mt-6 w-full h-36 object-cover"
            >
          </div>
        </NuxtLink>
      </div>
    </ContentList>
  </main>

  <div class="fixed -mb-48 bottom-0 h-[500px] w-[2000px] bg-gradient-to-t from-yellow-900 via-amber-600/50 to-transparent -z-10 blur-3xl"></div>
</template>