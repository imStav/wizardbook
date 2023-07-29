<template>
    <div class="flex flex-col w-2/4 xl:w-2/6 mx-auto my-24">
      <div class="mb-8">
        <NuxtLink to="/blog">Go back</NuxtLink>
      </div>
      <!-- 
      Allows to access and render markdown files content  
      and their front-matter data (title, date...)
      -->
      <ContentDoc v-slot="{ doc }">
        <h1 class="text-4xl font-bold">{{ doc.title }}</h1>
          
        <div class="flex mt-1">
            <p v-for="tag in doc.tags" class="dark:bg-white/30 mr-2 px-2 rounded-full text-sm opacity-50">#{{ tag }}</p>
        </div>
        
        <div class="flex flex-col my-4">
          <p v-if="doc.author">{{ doc.author }}</p>
          <p v-if="doc.date" class="mt-1 opacity-70">{{ doc.date }}</p>
        </div>

        <p v-if="doc.description" class="opacity-70 italic">{{ doc.description }}</p>

        <ContentRenderer :value="doc" class="mt-12" />
      </ContentDoc>
    </div>
</template>
  