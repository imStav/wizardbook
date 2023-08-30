<template>
  <nav class="sticky top-0 w-full py-3 backdrop-blur-2xl z-50">
    <div class="flex justify-between items-center 2xl:w-1/2 w-11/12 md:w-2/3 mx-auto">
      <div>
        <NuxtLink 
          to="/" 
          class="text-3xl text-blueGray hover:text-white"
          font="display bold"
          decoration="none"
        >
          W<span class="text-xl">izarBook.</span>
        </NuxtLink>
      </div>

      <div class="flex items-center">
        <div class="flex items-center mr-4 hover:text-white">
          <NuxtLink 
          to="/blog" 
          class="text-xl text-blueGray hover:text-white mr-1"
          font="display semibold"
          decoration="none"
          >
            Grimoire
          </NuxtLink>
          <div class="i-lucide-book-marked"></div>
        </div>
        
        <div class="flex items-center hover:text-white">
          <NuxtLink 
          to="/resources" 
          class="text-xl text-blueGray hover:text-white mr-1"
          font="display semibold"
          decoration="none"
          >
            Runes
          </NuxtLink>
          <div class="i-lucide-key"></div>
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
  text-decoration: none;
}

a {
  color: currentColor;
}

body {
  background-color: black;
  color: #bed5e9;
}

/* Global card styles & effects */
.card-border {
  border: solid 1px #80808017;

  &:hover {
    border: solid 1px #80808056;
  }
}
</style>