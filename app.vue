<template>
  <nav class="hidden lg:block sticky top-0 w-full py-4 backdrop-blur-2xl z-50">
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
          class="text-xl text-blueGray hover:text-white"
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
          class="text-xl text-blueGray hover:text-white"
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
          class="text-xl text-blueGray hover:text-white"
          font="sans"
          decoration="none"
        >
          Runes
        </NuxtLink>
        <div class="i-lucide-key ml-1 text-lg"></div>
      </div>
    </div>
  </nav>

  <nav class="lg:hidden sticky top-0 w-full py-3 backdrop-blur-2xl z-50">
    <div class="flex justify-between items-center 2xl:w-1/2 w-11/12 md:w-2/3 mx-auto">
      <div>
        <NuxtLink 
          to="/" 
          class="text-3xl text-blueGray hover:text-white"
          font="display bold"
          decoration="none"
        >
          W.
        </NuxtLink>
      </div>

      <div class="flex">
        <div class="mr-4 p-2 rounded-full bg-bluegray/30 hover:bg-bluegray/40">
          <NuxtLink 
          to="/blog" 
          class="text-xl text-blueGray hover:text-white"
          font="display semibold"
          decoration="none"
          >
          <div class="i-lucide-book-marked"></div>
          </NuxtLink>
        </div>
        
        <div class="p-2 rounded-full bg-bluegray/30">
          <NuxtLink 
          to="/resources" 
          class="text-xl text-blueGray hover:text-white"
          font="display semibold"
          decoration="none"
          >
          <div class="i-lucide-key"></div>
          </NuxtLink>
        </div>
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