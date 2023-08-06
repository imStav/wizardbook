<template>
  <nav class="sticky top-0 w-full py-4 backdrop-blur-2xl z-50">
    <div 
      class="w-fit mx-auto"
      flex="~"
    >
      <div 
        class="hover:text-white" 
        flex="~ row items-center"
      >
        <NuxtLink 
          to="/" 
          class="hover:text-white"
          text="xl blueGray"
          font="sans"
          decoration="none"
        >
          Accueil
        </NuxtLink>
        <div class="i-lucide-home ml-1 text-lg"></div>
      </div>
      
      <div 
        class="hover:text-white mx-6" 
        flex="~ row items-center"
      >
        <NuxtLink 
          to="/blog" 
          class="hover:text-white"
          text="xl blueGray"
          font="sans"
          decoration="none"
        >
          Grimoire
        </NuxtLink>
        <div class="i-lucide-book-marked ml-1 text-lg"></div>
      </div>

      <div 
        class="hover:text-white" 
        flex="~ row items-center"
      >
        <NuxtLink 
          to="/resources" 
          class="hover:text-white"
          text="xl blueGray"
          font="sans"
          decoration="none"
        >
          Runes
        </NuxtLink>
        <div class="i-lucide-key ml-1 text-lg"></div>
      </div>
    </div>
  </nav>

  <NuxtPage />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: black;
  color: #bed5e9;
}
</style>