// Sélectionnez toutes les sections
var sections = document.querySelectorAll('.present section');

// Parcourez chaque section
sections.forEach(function(section) {
    // Vérifiez si la section a la classe "active"
    if (!section.classList.contains('active')) {
        // Cachez la section si elle n'a pas la classe "active"
        section.classList.add('hidden');
    }
});


// // Sélectionner tous les liens avec la classe "next"
// var nextLinks = document.querySelectorAll('.next');

// // Ajouter un gestionnaire d'événement à chaque lien "next"
// nextLinks.forEach(function(link) {
//     link.addEventListener('click', function(event) {
//         // Empêcher le comportement par défaut du lien
//         event.preventDefault();

//         // Récupérer l'ID de la section cible depuis l'attribut href
//         var targetSectionId = link.getAttribute('href').substring(1);

//         // Sélectionner la section cible
//         var targetSection = document.getElementById(targetSectionId);

//         // Vérifier si la section cible existe
//         if (targetSection) {
//             // Cacher toutes les sections en leur ajoutant la classe "hidden"
//             document.querySelectorAll('section').forEach(function(section) {
//                 section.classList.add('hidden');
//             });

//             // Retirer la classe "hidden" de la section cible
//             targetSection.classList.remove('hidden');
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // Ajouter la classe 'hidden' à toutes les sections sauf la première
//     const sections = document.querySelectorAll("section");
//     sections.forEach((section, index) => {
//       if (index !== 0) {
//         section.classList.add("hidden");
//       }
//     });
  
    document.addEventListener("DOMContentLoaded", function () {
        // Ajouter un écouteur d'événement à tous les liens avec la classe 'next'
        const nextLinks = document.querySelectorAll(".next");
        nextLinks.forEach((link) => {
          link.addEventListener("click", function (event) {
            // Empêcher le comportement par défaut du lien
            event.preventDefault();
      
            // Trouver la section active
            const activeSection = document.querySelector(".present section.active");
      
            // Cacher la section active
            activeSection.classList.remove("active");
      
            // Trouver la section suivante
            const nextSection = activeSection.nextElementSibling;
      
            // Si la section suivante n'existe pas, revenir à la première section
            const newSection = nextSection ? nextSection : document.querySelector(".present section:first-child");
      
            // Afficher la nouvelle section avec une classe d'animation aléatoire
            const animations = ["fade", "slide-left", "slide-right", "slide-up", "slide-down"];
            const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
            newSection.classList.add("active", randomAnimation);
      
            // Cacher la section active après l'animation
            setTimeout(() => {
              activeSection.classList.remove("active");
            }, 500); // Ajustez le délai selon la durée de l'animation
          });
        });
      });

