<template>
  <div class="2xl:w-1/2 w-11/12 md:w-2/3 mx-auto my-8">
    <h1
      text="5xl"
      font="bold display"
    >
      Wizard Book
    </h1>
    <p 
      text="blueGray"
      font="sans"
    >
      Le Grimoire du mage développeur
    </p>

    <div 
      class="mt-8"
      text="blueGray"
      font="sans"
    >
      <p>
        Cet ouvrage s'adresse aux débutants, aux initité(e)s, à celles et ceux souhaitant acquérir et / ou approfondir des connaisances dans le développement web, plus particulièrement dans le <strong>front-end</strong>. Découvrez les bases du <strong>HTML5</strong>, du <strong>CSS3</strong>, du <strong>JavaScript</strong> et bien d'autres choses encore...
      </p>

      <p class="my-4">
        Le but de cette ressource est de vous faire gagner un temps considérable dans vos travaux de recherches, dans votre quête ; le chemin pouvant parfois être tortureux.
      </p>
    </div>
  </div>

  <div class="2xl:w-1/2 w-11/12 md:w-2/3 mx-auto mb-8">
    <h2
      text="3xl"
      font="display semibold"
    >
      Centre de ressources
    </h2>
    <p 
      text="blueGray"
      font="sans"
    >
      Augmentez votre puissance
    </p>
  </div>

  <div class="sm:grid md:grid-cols-2 md:w-2/3 2xl:grid-cols-2 gap-8 2xl:w-1/2 w-11/12 mx-auto mb-24">
    <div 
      class="p-4 rounded-lg" 
      flex="~ col" 
      bg-gradient="to-t from-orange/20 to-stone/05"
    >
      <h2 
        class="mb-3"
        text="3xl"
        font="semibold display"
      >
        Le Grimoire
      </h2>
      <p text="blueGray" font="sans">
        Un recueil de notes et de savoirs visant à transmettre les connaissances de base pour maîtriser certains aspects du développement web
      </p>

      <div 
        class="hover:text-white mt-4 w-fit" 
        flex="~ self-end items-center"
      >
        <NuxtLink 
          to="/blog" 
          class="hover:text-white"
          text="blueGray"
          font="sans"
          decoration="none"
        >
          Accéder au Grimoire
        </NuxtLink>
        <div class="i-lucide-arrow-right ml-2"></div>
      </div>
    </div>

    <div class="my-6 sm:hidden"></div>

    <div 
      class="p-4 rounded-lg" 
      flex="~ col"
      bg-gradient="to-t from-indigo/20 to-fuchsia/05"
    >
      <h2 
        class="mb-3"
        text="3xl"
        font="semibold display"
      >
        Les Runes
      </h2>
      <p text="blueGray" font="sans">
        Une collection de Runes, chacune renfermant une ou plusieurs informations sur divers sujets. Un savoir à sauvegarder absolument
      </p>

      <div 
        class="hover:text-white mt-4 w-fit" 
        flex="~ self-end items-center"
      >
        <NuxtLink 
          to="/resources" 
          class="hover:text-white"
          text="blueGray"
          font="sans"
          decoration="none"
        >
          Accéder aux Runes
        </NuxtLink>
        <div class="i-lucide-arrow-right ml-2"></div>
      </div>
    </div>
  </div>

  <div class="fixed top-0 rotate-45 h-24 w-[500px] bg-gradient-to-l from-fuchsia-900/50 via-sky-600/50 to-indigo-500/50 -z-10 blur-3xl"></div>

  <NuxtPage />
</template>