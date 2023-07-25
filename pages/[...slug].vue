<template>
    <div class="flex border w-2/4 xl:w-2/6 mx-auto my-24">
        <!-- 
        Allows to access and render markdown files content  
        and their front-matter data (title, date...)
      -->
      <ContentDoc v-slot="{ doc }">
        <div>
          <h1 class="">{{ doc.title }}</h1>
          <p v-if="doc.tags" class="">#{{ doc.tags[0] }}</p>
        </div>
        
        <div class="">
          <p v-if="doc.author">{{ doc.author }}</p>
          <p v-if="doc.date" class="">{{ doc.date }}</p>
        </div>

        <p v-if="doc.description" class="">{{ doc.description }}</p>
        <ContentRenderer :value="doc" class="" />
      </ContentDoc>
    </div>
</template>
  