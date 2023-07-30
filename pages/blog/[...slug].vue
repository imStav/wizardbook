<template>
    <div class="flex flex-col w-11/12 md:w-2/3 xl:w-2/6 mx-auto my-8">
      <div class="mb-8">
        <NuxtLink to="/blog" class="hover:text-white duration-200">Retour</NuxtLink>
      </div>
      <!-- 
      Allows to access and render markdown files content  
      and their front-matter data (title, date...)
      -->
      <ContentDoc v-slot="{ doc }">
        <div>
          <h1 class="text-4xl font-bold">{{ doc.title }}</h1>
          
          <div class="flex mt-1">
            <p v-for="tag in doc.tags" class="dark:bg-white/30 mr-2 px-2 rounded-full text-sm opacity-50">#{{ tag }}</p>
          </div>
        
          <div class="flex flex-col my-4">
            <p v-if="doc.author">{{ doc.author }}</p>
            <p v-if="doc.date" class="mt-1 opacity-70">{{ doc.date }}</p>
          </div>

          <p v-if="doc.description" class="opacity-70 italic">{{ doc.description }}</p>

          <img v-if="doc.img" :src="`../${doc.img}`" alt="" class="rounded-lg mt-4 w-full h-48 object-cover">
        </div>

        <ContentRenderer :value="doc" class="mt-12 prose prose-invert" />
      </ContentDoc>
    </div>
</template>
  