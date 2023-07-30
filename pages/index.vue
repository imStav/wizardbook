<template>
  <div class="flex flex-col 2xl:w-1/2 w-11/12 md:w-2/3 mx-auto my-8">
    <h1 class="text-5xl font-bold dark:text-slate-50">Wizard Book</h1>
    <p class="opacity-70 dark:text-slate-50">Le Grimoire du mage développeur</p>

    <div class="mt-8">
      <p>
        Cet ouvrage s'adresse aux débutants, aux initité(e)s, à celles et ceux souhaitant acquérir et / ou approfondir des connaisances dans le développement web, plus particulièrement dans le <strong>front-end</strong>. Découvrez les bases du <strong>HTML5</strong>, du <strong>CSS3</strong>, du <strong>JavaScript</strong> et bien d'autres choses encore...
      </p>

      <p class="my-4">
        Le but de cette ressource est de vous faire gagner un temps considérable dans vos travaux de recherches, dans votre quête ; le chemin pouvant parfois être tortureux.
      </p>
    </div>
  </div>

  <div class="2xl:w-1/2 w-11/12 md:w-2/3 mx-auto mb-8">
    <h2 class="text-3xl font-semibold">Centre de ressources</h2>
    <p class="opacity-70 dark:text-slate-50">Augmentez votre puissance</p>
  </div>

  <main class="sm:grid md:grid-cols-2 md:w-2/3 2xl:grid-cols-2 gap-8 2xl:w-1/2 w-11/12 mx-auto mb-24">
    <div class="flex flex-col p-4 border dark:border-slate-500/30 rounded-lg dark:bg-gradient-to-t dark:from-amber-600/20 dark:text-slate-200 dark:hover:bg-gradient-to-t dark:hover:from-amber-600/30 dark:hover:border-slate-500/50 duration-200">
      <h2 class="text-3xl font-semibold mb-4">Le Grimoire</h2>
      <p class="opacity-70">Un recueil de notes et de savoirs visant à transmettre les connaissances de base pour maîtriser certains aspects du développement web</p>

      <NuxtLink to="/blog" class="self-end w-fit border-b border-dotted duration-200 hover:text-white mt-4">Accéder au Grimoire</NuxtLink>
    </div>

    <div class="my-6 sm:hidden">

    </div>

    <div class="flex flex-col p-4 border dark:border-slate-500/30 rounded-lg dark:bg-gradient-to-t dark:from-indigo-600/20 dark:text-slate-200 dark:hover:bg-gradient-to-t dark:hover:from-indigo-600/30 dark:hover:border-slate-500/50 duration-200">
      <h2 class="text-3xl font-semibold mb-4">Les Runes</h2>
      <p class="opacity-70">Une collection de Runes, chacune renfermant une ou plusieurs informations sur divers sujets. Un savoir à sauvegarder absolument</p>

      <NuxtLink to="/resources" class="self-end w-fit border-b border-dotted duration-200 hover:text-white mt-4">Accéder aux Runes</NuxtLink>
    </div>
  </main>

  <div class="fixed top-0 rotate-45 h-24 w-[500px] bg-gradient-to-l from-fuchsia-900/50 via-sky-600/50 to-indigo-500/50 -z-10 blur-3xl"></div>

  <NuxtPage />
</template>