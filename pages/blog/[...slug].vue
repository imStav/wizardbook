<template>
    <div 
      class="w-11/12 md:w-2/3 xl:w-2/6 mx-auto my-8"
      flex="~ col"
      font="sans"
    >
      <div 
        class="hover:text-white mb-8"
        flex="~ items-center"
      >
        <div class="i-lucide-arrow-left mr-2"></div>
        <NuxtLink 
          to="/blog" 
          class="text-blueGray hover:text-white"
          decoration="none"
        >
          Retour
        </NuxtLink>
      </div>
      <!-- 
      Allows to access and render markdown files content  
      and their front-matter data (title, date...)
      -->
      <ContentDoc v-slot="{ doc }">
        <div>
          <h1 text="5xl" font="bold display">{{ doc.title }}</h1>
          
          <div class="flex mt-2">
            <p 
              v-for="tag in doc.tags"
              class="mr-2 px-2 rounded-full"
              text="sm"
              bg="blueGray/25"
            >
              #{{ tag }}
            </p>
          </div>
        
          <div class="flex flex-col my-4">
            <p v-if="doc.author">🧙 {{ doc.author }}</p>
            <p 
              v-if="doc.date"
              text="blueGray"
            >
              {{ doc.date }}
            </p>
          </div>

          <p 
            v-if="doc.description" 
            text="blueGray"
            font="italic"
          >
            {{ doc.description }}
          </p>

          <img 
            v-if="doc.img" 
            :src="`../${doc.img}`" 
            alt="" 
            class="rounded-lg mt-4 w-full h-48 object-cover"
          >
        </div>

        <div>
          <ContentRenderer :value="doc" class="mt-10 prose" />
        </div>
      </ContentDoc>
    </div>
</template>
  