<template>
  <!-- 
        Generates a card for each article contained in the 'blog' subfolder 
        (./content/blog) and displays front-matter data (title, date...) 
      -->
      <ContentList path="/blog" v-slot="{ list }">
        <div v-for="article in list" :key="article._path" class="">
          <NuxtLink :to="article._path">
            <div class="">
              <div class="">
                <h2 class="">{{ article.title }}</h2>
                <p v-if="article.tags" class="">#{{ article.tags[0] }}</p>

                <div class="">
                  <p v-if="article.author">{{ article.author }}</p>
                  <p v-if="article.date" class="">{{ article.date }}</p>
                </div>
                
                <p class="">{{ article.description }}</p>
              </div>

              <img :src="article.img" alt="" class="">
            </div>
          </NuxtLink>
        </div>
      </ContentList>
</template>