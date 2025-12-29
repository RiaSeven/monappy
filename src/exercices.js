export const exercices = [
  // --- SÉRIE 1 : VARIABLES ET OPÉRATIONS ---
  {
    id: 101,
    serie: "Variables & Opérations",
    titre: "Addition simple",
    consigne: "Créez deux variables <code>a</code> et <code>b</code> valant respectivement 5 et 10. Affichez leur somme.",
    code: "# Déclare tes variables ici\n\n# Affiche la somme",
    validation: { 
      type: "output_list", 
      values: ["15"] 
    }
  },
  {
    id: 102,
    serie: "Variables & Opérations",
    titre: "Concaténation",
    consigne: "Créez une variable <code>nom</code> contenant 'Python'. Affichez la phrase 'J'aime Python' en utilisant cette variable.",
    code: "nom = \"Python\"\n# Affichez le résultat",
    validation: { 
      type: "output_list", 
      values: ["J'aime Python"] 
    }
  },

  // --- SÉRIE 2 : FONCTIONS ---
  {
    id: 201,
    serie: "Fonctions",
    titre: "Fonction Carré",
    consigne: "Écrire une fonction <code>carre(n)</code> qui retourne le carré de n.",
    code: "def carre(n):\n    # Votre code ici\n    return 0",
    validation: { 
      type: "function", 
      tests: ["assert carre(2) == 4", "assert carre(5) == 25", "assert carre(-3) == 9"] 
    }
  },
  {
    id: 202,
    serie: "Fonctions",
    titre: "Salutation",
    consigne: "Écrire une fonction <code>saluer(nom)</code> qui retourne 'Bonjour {nom}'.",
    code: "def saluer(nom):\n    # Votre code ici\n    pass",
    validation: { 
      type: "function", 
      tests: ["assert saluer('Marie') == 'Bonjour Marie'", "assert saluer('Luc') == 'Bonjour Luc'"] 
    }
  },

  // --- SÉRIE 3 : CONDITIONS ---
  {
    id: 301,
    serie: "Conditions",
    titre: "Majeur ou Mineur",
    consigne: "Écrire une fonction <code>verif_age(age)</code> qui retourne 'Majeur' si age >= 18, sinon 'Mineur'.",
    code: "def verif_age(age):\n    # Utilisez if/else\n    pass",
    validation: { 
      type: "function", 
      tests: ["assert verif_age(18) == 'Majeur'", "assert verif_age(17) == 'Mineur'", "assert verif_age(20) == 'Majeur'"] 
    }
  },

  // --- SÉRIE 4 : BOUCLES FOR ---
  {
    id: 401,
    serie: "Boucles For",
    titre: "Compter jusqu'à 5",
    consigne: "Affichez les nombres de 1 à 5 (inclus) un par ligne.",
    code: "# Utilisez une boucle for et range()",
    validation: { 
      type: "output_list", 
      values: ["1", "2", "3", "4", "5"] 
    }
  },
  {
    id: 402,
    serie: "Boucles For",
    titre: "Multiples de 3",
    consigne: "Affichez les multiples de 3 entre 1 et 10 (donc 3, 6, 9).",
    code: "for i in range(1, 11):\n    # Condition ou pas de range",
    validation: { 
      type: "output_list", 
      values: ["3", "6", "9"] 
    }
  },

   // --- SÉRIE 5 : BOUCLES WHILE ---
   {
    id: 501,
    serie: "Boucles While",
    titre: "Compte à rebours",
    consigne: "Avec une boucle while, affichez 3, 2, 1, puis 'Partez!'.",
    code: "n = 3\nwhile n > 0:\n    # code\n    n = n - 1\nprint('Partez!')",
    validation: { 
      type: "output_list", 
      values: ["3", "2", "1", "Partez!"] 
    }
  }
];