export const exercices = [
  // --- SÉRIE 1 : VARIABLES ET OPÉRATIONS ---
  {
    id: 101,
    serie: "Variables & Opérations",
    titre: "Ma première variable",
    consigne: "Créez une variable nommée <code>score</code>, donnez-lui la valeur <strong>100</strong>, et affichez-la avec la fonction <code>print()",
    code: "# Créez la variable score\n\n# Affichez-la",
    validation: { 
      type: "output_list", 
      values: ["100"] 
    }
  },
  {
    id: 102,
    serie: "Variables & Opérations",
    titre: "Texte (String)",
    consigne: "Créez une variable <code>ville</code> contenant le texte \"Paris\". Affichez cette variable.",
    code: "# votre code ici",
    validation: { 
      type: "output_list", 
      values: ["Paris"] 
    }
  },
  {
    id: 103,
    serie: "Variables & Opérations",
    titre: "L'Addition",
    consigne: "On a deux pommes et trois poires. Créez les variables <code>pommes</code> et <code>poires</code> et affectez leur respectivement les valeurs 2 et 3. Affichez le total des fruits.",
    code: "# Affichez la somme",
    validation: { 
      type: "output_list", 
      values: ["5"] 
    }
  },
  {
    id: 104,
    serie: "Variables & Opérations",
    titre: "Soustraction (Calcul d'âge)",
    consigne: "Calculez l'âge d'une personne née en 2000 sachant que nous sommes en 2050. Affichez le résultat.",
    code: "naissance = 2000\nactuel = 2050\n\n# Calculez et affichez la différence",
    validation: { 
      type: "output_list", 
      values: ["50"] 
    }
  },
  {
    id: 105,
    serie: "Variables & Opérations",
    titre: "Multiplication",
    consigne: "Vous achetez 5 articles à 12€ l'unité. Calculez le prix total et affichez-le.",
    code: "prix = 12\nquantite = 5\n\nprint(prix * quantite)",
    validation: { 
      type: "output_list", 
      values: ["60"] 
    }
  },
  {
    id: 106,
    serie: "Variables & Opérations",
    titre: "La Division",
    consigne: "Divisez 20 par 4 et affichez le résultat. Notez que Python renvoie toujours un nombre à virgule (float) pour une division.",
    code: "a = 20\nb = 4\n# Affichez a divisé par b",
    validation: { 
      type: "output_list", 
      values: ["5.0"] 
    }
  },
  {
    id: 107,
    serie: "Variables & Opérations",
    titre: "Le Modulo (Reste)",
    consigne: "L'opérateur <code>%</code> donne le reste de la division entière. <br>Exemple : $10 \\% 3 = 1$ (car $3 \\times 3 = 9$, il reste 1).<br>Affichez le reste de 14 divisé par 5.",
    code: "print(14 % 5)",
    validation: { 
      type: "output_list", 
      values: ["4"] 
    }
  },
  {
    id: 108,
    serie: "Variables & Opérations",
    titre: "Puissance",
    consigne: "Pour calculer $5^3$ (5 puissance 3), on utilise l'opérateur <code>**</code>. Calculez et affichez le carré de 9 ($9^2$).",
    code: "n = 9\n# Affichez n puissance 2",
    validation: { 
      type: "output_list", 
      values: ["81"] 
    }
  },
  {
    id: 109,
    serie: "Variables & Opérations",
    titre: "Concaténation",
    consigne: "On peut 'additionner' du texte pour le coller. Créez <code>prenom = \"Bond\"</code>. Affichez la chaine \"James Bond\" en utilisant la variable.",
    code: "prenom = \"Bond\"\nprint(\"James \" + prenom)",
    validation: { 
      type: "output_list", 
      values: ["James Bond"] 
    }
  },
  {
    id: 110,
    serie: "Variables & Opérations",
    titre: "Conversion de type",
    consigne: "On ne peut pas additionner un texte et un nombre. Convertissez la chaine \"5\" en entier avec <code>int()</code> pour l'ajouter à 10. Affichez le résultat (15).",
    code: "chiffre_texte = \"5\"\nnombre = 10\n\n# resultat = int(chiffre_texte) + nombre\n# print(resultat)",
    validation: { 
      type: "output_list", 
      values: ["15"] 
    }
  },
  {
    id: 111,
    serie: "Variables & Opérations",
    titre: "Les f-strings",
    consigne: "La méthode moderne pour insérer des variables dans du texte est la f-string : <code>f\"Texte {variable}\"</code>.<br>Affichez 'J'ai 20 ans' en utilisant les variables.",
    code: "age = 20\nprint(f\"J'ai {age} ans\")",
    validation: { 
      type: "output_list", 
      values: ["J'ai 20 ans"] 
    }
  },
  {
    id: 112,
    serie: "Variables & Opérations",
    titre: "Échange de variables",
    consigne: "Échangez les valeurs de <code>a</code> et <code>b</code>. <code>a</code> doit valoir 2 et <code>b</code> doit valoir 1. Affichez <code>a</code> puis <code>b</code>.",
    code: "a = 1\nb = 2\n\n# Astuce Python : a, b = b, a\n\nprint(a)\nprint(b)",
    validation: { 
      type: "output_list", 
      values: ["2", "1"] 
    }
  },

  // --- SÉRIE 2 : FONCTIONS ---
  {
    id: 201,
    serie: "Fonctions",
    titre: "Première fonction",
    consigne: "Définissez une fonction nommée <code>hello</code> qui ne prend aucun paramètre et qui retourne la chaîne de caractères 'Bonjour le monde !'.",
    code: "def hello():\n    # Utilisez return\n    pass",
    validation: { 
      type: "function", 
      tests: ["assert hello() == 'Bonjour le monde !'"] 
    }
  },
  {
    id: 202,
    serie: "Fonctions",
    titre: "Le Double",
    consigne: "Écrivez une fonction <code>doubler(n)</code> qui prend un nombre en paramètre et retourne son double (nombre multiplié par 2).",
    code: "def doubler(n):\n    # Votre code ici\n    return 0",
    validation: { 
      type: "function", 
      tests: ["assert doubler(5) == 10", "assert doubler(0) == 0", "assert doubler(-3) == -6"] 
    }
  },
  {
    id: 203,
    serie: "Fonctions",
    titre: "Addition",
    consigne: "Écrivez une fonction <code>addition(a, b)</code> qui prend deux nombres et retourne leur somme.",
    code: "def addition(a, b):\n    # Retournez a + b\n    pass",
    validation: { 
      type: "function", 
      tests: ["assert addition(3, 4) == 7", "assert addition(10, -2) == 8"] 
    }
  },
  {
    id: 204,
    serie: "Fonctions",
    titre: "Aire du rectangle",
    consigne: "Créez une fonction <code>aire_rectangle(longueur, largeur)</code> qui calcule et retourne l'aire (longueur × largeur).",
    code: "def aire_rectangle(longueur, largeur):\n    return 0",
    validation: { 
      type: "function", 
      tests: ["assert aire_rectangle(10, 5) == 50", "assert aire_rectangle(3, 3) == 9"] 
    }
  },
  {
    id: 205,
    serie: "Fonctions",
    titre: "Conversion Minutes",
    consigne: "On veut convertir un nombre d'heures en minutes. Écrivez <code>heures_en_minutes(h)</code> sachant qu'une heure vaut 60 minutes.",
    code: "def heures_en_minutes(h):\n    # ...\n    pass",
    validation: { 
      type: "function", 
      tests: ["assert heures_en_minutes(1) == 60", "assert heures_en_minutes(2.5) == 150", "assert heures_en_minutes(0) == 0"] 
    }
  },
  {
    id: 206,
    serie: "Fonctions",
    titre: "Salutation Personnalisée",
    consigne: "Écrivez une fonction <code>bonjour(nom)</code> qui retourne la chaîne 'Bonjour {nom}, comment vas-tu ?'.",
    code: "def bonjour(nom):\n    # Utilisez la concaténation ou les f-strings f\"...\"\n    pass",
    validation: { 
      type: "function", 
      tests: ["assert bonjour('Alice') == 'Bonjour Alice, comment vas-tu ?'", "assert bonjour('Bob') == 'Bonjour Bob, comment vas-tu ?'"] 
    }
  },
  {
    id: 207,
    serie: "Fonctions",
    titre: "Périmètre",
    consigne: "L'utilisateur fournit le côté d'un carré. Créez une fonction <code>perimetre_carre(cote)</code> qui retourne le périmètre (côté × 4).",
    code: "def perimetre_carre(cote):\n    # Codez ici\n    pass",
    validation: { 
      type: "function", 
      tests: ["assert perimetre_carre(5) == 20", "assert perimetre_carre(1) == 4"] 
    }
  },
  {
    id: 208,
    serie: "Fonctions",
    titre: "Moyenne de 3 nombres",
    consigne: "Écrivez une fonction <code>moyenne(a, b, c)</code> qui retourne la moyenne mathématique de ces trois nombres.",
    code: "def moyenne(a, b, c):\n    # Attention aux parenthèses !\n    return 0",
    validation: { 
      type: "function", 
      tests: ["assert moyenne(10, 10, 10) == 10", "assert moyenne(0, 10, 20) == 10", "assert moyenne(5, 5, 20) == 10"] 
    }
  },
  {
    id: 209,
    serie: "Fonctions",
    titre: "Calcul TTC",
    consigne: "Écrivez une fonction <code>prix_ttc(prix_ht, taux)</code>. Le calcul est : $PrixHT \\times (1 + \\frac{taux}{100})$.",
    code: "def prix_ttc(prix_ht, taux):\n    # Exemple: prix_ttc(100, 20) doit donner 120\n    pass",
    validation: { 
      type: "function", 
      tests: ["assert prix_ttc(100, 20) == 120", "assert prix_ttc(50, 10) == 55", "assert prix_ttc(100, 0) == 100"] 
    }
  },
  {
    id: 210,
    serie: "Fonctions",
    titre: "Est Majeur ?",
    consigne: "La fonction doit retourner un <strong>Booléen</strong> (`True` ou `False`). Retournez `True` si l'âge est >= 18, sinon `False`.",
    code: "def est_majeur(age):\n    # Pas besoin de if, retournez directement la condition\n    pass",
    validation: { 
      type: "function", 
      tests: ["assert est_majeur(20) == True", "assert est_majeur(15) == False", "assert est_majeur(18) == True"] 
    }
  },
  {
    id: 211,
    serie: "Fonctions",
    titre: "Vitesse Moyenne",
    consigne: "La vitesse est la distance divisée par le temps ($v = d / t$). Créez la fonction <code>vitesse(d, t)</code>.",
    code: "def vitesse(distance, temps):\n    return 0",
    validation: { 
      type: "function", 
      tests: ["assert vitesse(100, 2) == 50", "assert vitesse(50, 1) == 50"] 
    }
  },
  {
    id: 212,
    serie: "Fonctions",
    titre: "Paramètre par défaut",
    consigne: "Python permet des valeurs par défaut. Complétez la fonction pour que si on n'indique pas de devise, ce soit '€' par défaut.",
    code: "def afficher_prix(valeur, devise='€'):\n    return str(valeur) + ' ' + devise\n    # Ne touchez rien, testez juste le code pour comprendre !",
    validation: { 
      type: "function", 
      tests: ["assert afficher_prix(10) == '10 €'", "assert afficher_prix(20, '$') == '20 $'"] 
    }
  },

 // --- SÉRIE 3 : CONDITIONS (IF / ELIF / ELSE) ---
  {
    id: 301,
    serie: "Conditions",
    titre: "Condition Simple (If)",
    consigne: "On a une variable <code>temperature</code>. Si elle est supérieure à 25, affichez 'Il fait chaud'. Sinon, ne faites rien.",
    code: "temperature = 30\n\n# Écrivez votre if ici",
    validation: { 
      type: "output_list", 
      values: ["Il fait chaud"] 
    }
  },
  {
    id: 302,
    serie: "Conditions",
    titre: "Else (Sinon)",
    consigne: "Écrivez une fonction <code>acces_club(age)</code>. Si l'âge est supérieur ou égal à 18, retournez 'Entrée autorisée', sinon retournez 'Entrée refusée'.",
    code: "def acces_club(age):\n    # Utilisez if et else\n    pass",
    validation: { 
      type: "function", 
      tests: ["assert acces_club(20) == 'Entrée autorisée'", "assert acces_club(17) == 'Entrée refusée'", "assert acces_club(18) == 'Entrée autorisée'"] 
    }
  },
  {
    id: 303,
    serie: "Conditions",
    titre: "Comparaison de texte",
    consigne: "Créez un système de mot de passe simple. Si la variable <code>mdp</code> vaut exactement 'PyThOn', affichez 'Accès OK', sinon affichez 'Accès refusé'. Attention aux majuscules.",
    code: "mdp = \"python\" # Essayez de changer ça\n\n# Votre test ici",
    validation: { 
      type: "output_list", 
      values: ["Accès refusé"] 
    }
  },
  {
    id: 304,
    serie: "Conditions",
    titre: "Elif (Signe d'un nombre)",
    consigne: "Écrivez une fonction <code>signe(n)</code> qui retourne 'Positif' si n > 0, 'Négatif' si n < 0, et 'Nul' si n vaut 0.",
    code: "def signe(n):\n    if n > 0:\n        return 'Positif'\n    # Ajoutez elif et else\n    pass",
    validation: { 
      type: "function", 
      tests: ["assert signe(10) == 'Positif'", "assert signe(-5) == 'Négatif'", "assert signe(0) == 'Nul'"] 
    }
  },
  {
    id: 305,
    serie: "Conditions",
    titre: "Opérateur AND (Intervalle)",
    consigne: "Vérifiez si le nombre <code>x</code> est compris entre 10 et 20 inclus ($10 \\leq x \\leq 20$). Si oui, affichez 'Dans la cible'.",
    code: "x = 15\n\n# Utilisez l'opérateur 'and' ou la chaîne de comparaison 10 <= x <= 20",
    validation: { 
      type: "output_list", 
      values: ["Dans la cible"] 
    }
  },
  {
    id: 306,
    serie: "Conditions",
    titre: "Pair ou Impair (Modulo)",
    consigne: "Utilisez l'opérateur modulo <code>%</code> pour vérifier si un nombre est pair. Écrivez la fonction <code>est_pair(n)</code> qui retourne <code>True</code> ou <code>False</code>.",
    code: "def est_pair(n):\n    # Rappel : un nombre est pair si le reste de sa division par 2 est 0\n    return False",
    validation: { 
      type: "function", 
      tests: ["assert est_pair(10) == True", "assert est_pair(7) == False", "assert est_pair(0) == True"] 
    }
  },
  {
    id: 307,
    serie: "Conditions",
    titre: "Opérateur OR (Voyelles)",
    consigne: "Écrivez une fonction <code>est_voyelle(lettre)</code> qui retourne True si la lettre est 'a', 'e', 'i', 'o', 'u' ou 'y'.",
    code: "def est_voyelle(lettre):\n    # Utilisez 'if lettre in ...' ou des 'or'\n    pass",
    validation: { 
      type: "function", 
      tests: ["assert est_voyelle('a') == True", "assert est_voyelle('z') == False", "assert est_voyelle('y') == True"] 
    }
  },
  {
    id: 308,
    serie: "Conditions",
    titre: "Le plus grand de 3",
    consigne: "Sans utiliser la fonction <code>max()</code>, écrivez une logique pour trouver le plus grand nombre parmi <code>a</code>, <code>b</code> et <code>c</code> et affichez-le.",
    code: "a = 15\nb = 42\nc = 8\n\n# Comparaisons successives\n\n# print(le_plus_grand)",
    validation: { 
      type: "output_list", 
      values: ["42"] 
    }
  },
  {
    id: 309,
    serie: "Conditions",
    titre: "Système de notation",
    consigne: "Convertissez une note sur 20 en appréciation. <br>>= 16: 'Très bien'<br>>= 14: 'Bien'<br>>= 10: 'Passable'<br>Sinon: 'Insuffisant'.",
    code: "def appreciation(note):\n    # Utilisez une chaîne de if / elif / else\n    return ''",
    validation: { 
      type: "function", 
      tests: ["assert appreciation(18) == 'Très bien'", "assert appreciation(15) == 'Bien'", "assert appreciation(12) == 'Passable'", "assert appreciation(8) == 'Insuffisant'"] 
    }
  },
  {
    id: 310,
    serie: "Conditions",
    titre: "Année Bissextile (Logique)",
    consigne: "Une année est bissextile si elle est divisible par 4, MAIS pas par 100, SAUF si elle est divisible par 400.<br>Écrivez la fonction <code>est_bissextile(annee)</code>.",
    code: "def est_bissextile(annee):\n    # if (cond1 and not cond2) or cond3:\n    return False",
    validation: { 
      type: "function", 
      tests: ["assert est_bissextile(2000) == True", "assert est_bissextile(2020) == True", "assert est_bissextile(1900) == False", "assert est_bissextile(2023) == False"] 
    }
  },
  {
    id: 311,
    serie: "Conditions",
    titre: "Calcul de remise",
    consigne: "Un magasin offre 10% de remise si l'achat dépasse 100€, et 20% si l'achat dépasse 500€. Calculez le prix final pour un achat de 600€.",
    code: "achat = 600\n\nif achat > 500:\n    # Appliquer 20%\nelif achat > 100:\n    # Appliquer 10%\n\nprint(achat)",
    validation: { 
      type: "output_list", 
      values: ["480.0"] 
    }
  },
  {
    id: 312,
    serie: "Conditions",
    titre: "Validité Triangle",
    consigne: "Pour qu'un triangle existe, la longueur de chaque côté doit être inférieure à la somme des deux autres.<br>Écrivez <code>triangle_valide(a, b, c)</code>.",
    code: "def triangle_valide(a, b, c):\n    # Vérifiez les 3 conditions\n    pass",
    validation: { 
      type: "function", 
      tests: ["assert triangle_valide(3, 4, 5) == True", "assert triangle_valide(1, 1, 10) == False", "assert triangle_valide(5, 5, 5) == True"] 
    }
  },

  // --- SÉRIE 4 : BOUCLES FOR ---
  {
    id: 401,
    serie: "Boucles For",
    titre: "Compter jusqu'à 5",
    consigne: "Utilisez une boucle <code>for</code> et la fonction <code>range()</code> pour afficher les nombres de 0 à 4.",
    code: "for i in range(5):\n    print(i)",
    validation: { 
      type: "output_list", 
      values: ["0", "1", "2", "3", "4"] 
    }
  },
  {
    id: 402,
    serie: "Boucles For",
    titre: "Bornes précises",
    consigne: "Affichez les nombres de 5 à 10 inclus ($[5, 10]$). N'oubliez pas que la borne de fin de <code>range</code> est exclue.",
    code: "# range(debut, fin_exclue)\nfor i in range(...):\n    print(i)",
    validation: { 
      type: "output_list", 
      values: ["5", "6", "7", "8", "9", "10"] 
    }
  },
  {
    id: 403,
    serie: "Boucles For",
    titre: "Nombres pairs",
    consigne: "Affichez tous les nombres pairs entre 0 et 10 inclus en utilisant le troisième paramètre de <code>range</code> (le pas).",
    code: "# range(debut, fin, pas)\nfor i in range(0, 11, 2):\n    print(i)",
    validation: { 
      type: "output_list", 
      values: ["0", "2", "4", "6", "8", "10"] 
    }
  },
  {
    id: 404,
    serie: "Boucles For",
    titre: "Compte à rebours",
    consigne: "Affichez le compte à rebours de 5 à 1 (5, 4, 3, 2, 1) en utilisant un pas négatif dans <code>range</code>.",
    code: "for i in range(5, 0, -1):\n    print(i)",
    validation: { 
      type: "output_list", 
      values: ["5", "4", "3", "2", "1"] 
    }
  },
  {
    id: 405,
    serie: "Boucles For",
    titre: "La Somme (Accumulateur)",
    consigne: "Calculez la somme des entiers de 1 à 100 ($1+2+...+100$) en utilisant une boucle <code>for</code> et une variable <code>total</code>.",
    code: "total = 0\nfor i in range(1, 101):\n    # Ajoutez i au total\n    pass\nprint(total)",
    validation: { 
      type: "output_list", 
      values: ["5050"] 
    }
  },
  {
    id: 406,
    serie: "Boucles For",
    titre: "Calcul de Factorielle",
    consigne: "La factorielle de $n$ ($n!$) est le produit des nombres de 1 à $n$.<br>Écrivez une fonction <code>factorielle(n)</code>.",
    code: "def factorielle(n):\n    resultat = 1\n    for i in range(1, n + 1):\n        resultat = resultat * i\n    return resultat",
    validation: { 
      type: "function", 
      tests: ["assert factorielle(5) == 120", "assert factorielle(3) == 6", "assert factorielle(1) == 1"] 
    }
  },
  {
    id: 407,
    serie: "Boucles For",
    titre: "Parcours de liste",
    consigne: "Voici une liste de fruits. Utilisez une boucle <code>for fruit in fruits</code> pour afficher chaque fruit en majuscules.",
    code: "fruits = ['pomme', 'poire', 'cerise']\n\nfor fruit in fruits:\n    # print(fruit.upper())",
    validation: { 
      type: "output_list", 
      values: ["POMME", "POIRE", "CERISE"] 
    }
  },
  {
    id: 408,
    serie: "Boucles For",
    titre: "Moyenne de classe",
    consigne: "Calculez la moyenne des notes de la liste donnée. Additionnez les notes, puis divisez par le nombre de notes (<code>len(notes)</code>).",
    code: "notes = [12, 15, 8, 20, 10]\nsomme = 0\n\n# Votre boucle ici\n\nprint(somme / len(notes))",
    validation: { 
      type: "output_list", 
      values: ["13.0"] 
    }
  },
  {
    id: 409,
    serie: "Boucles For",
    titre: "Le Maximum",
    consigne: "Sans utiliser la fonction <code>max()</code>, trouvez le plus grand nombre de la liste en parcourant les éléments.",
    code: "valeurs = [5, 12, 99, 7, 42]\nle_max = valeurs[0]\n\nfor v in valeurs:\n    # Si v est plus grand que le_max, on met à jour le_max\n    pass\nprint(le_max)",
    validation: { 
      type: "output_list", 
      values: ["99"] 
    }
  },
  {
    id: 410,
    serie: "Boucles For",
    titre: "Comptage de voyelles",
    consigne: "Écrivez une fonction qui compte le nombre de voyelles ('aeiouy') dans un mot donné.",
    code: "def compte_voyelles(mot):\n    compteur = 0\n    voyelles = \"aeiouy\"\n    for lettre in mot:\n        if lettre in voyelles:\n            compteur += 1\n    return compteur",
    validation: { 
      type: "function", 
      tests: ["assert compte_voyelles('python') == 2", "assert compte_voyelles('banane') == 3", "assert compte_voyelles('xyz') == 1"] 
    }
  },
  {
    id: 411,
    serie: "Boucles For",
    titre: "Table de multiplication",
    consigne: "Écrivez une fonction <code>table_mul(n)</code> qui retourne une liste contenant la table de multiplication de n (de 1 à 10).",
    code: "def table_mul(n):\n    resultats = []\n    for i in range(1, 11):\n        # Ajoutez (i * n) à la liste resultats\n        pass\n    return resultats",
    validation: { 
      type: "function", 
      tests: ["assert table_mul(5) == [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]", "assert table_mul(2) == [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]"] 
    }
  },
  {
    id: 412,
    serie: "Boucles For",
    titre: "Filtrage de données",
    consigne: "À partir de la liste <code>donnees</code>, créez une nouvelle liste <code>positives</code> ne contenant que les nombres strictement positifs.",
    code: "donnees = [-10, 15, 0, -5, 20, 3]\npositives = []\n\nfor x in donnees:\n    # Votre condition ici\n\nprint(positives)",
    validation: { 
      type: "output_list", 
      values: ["[15, 20, 3]"] 
    }
  },

  // --- SÉRIE 5 : BOUCLES WHILE ---
  {
    id: 501,
    serie: "Boucles While",
    titre: "Compte à rebours",
    consigne: "Initialisez une variable <code>n</code> à 5. Tant que <code>n</code> est supérieur à 0, affichez la valeur de <code>n</code>, puis décrémentez <code>n</code> de 1. Affichez 'Décollage !' à la fin.",
    code: "n = 5\n\n# Écrivez votre boucle while ici\n\nprint('Décollage !')",
    validation: {
      type: "output_list",
      values: ["5", "4", "3", "2", "1", "Décollage !"]
    }
  },
  {
    id: 502,
    serie: "Boucles While",
    titre: "Nombres pairs",
    consigne: "Affichez tous les nombres pairs strictement inférieurs à 10 en utilisant une boucle <code>while</code>. Commencez à 0.",
    code: "i = 0\nwhile i < 10:\n    # Affichez i puis augmentez-le\n    pass",
    validation: {
      type: "output_list",
      values: ["0", "2", "4", "6", "8"]
    }
  },
  {
    id: 503,
    serie: "Boucles While",
    titre: "La limite de 100",
    consigne: "On veut trouver le plus petit entier <code>n</code> tel que la somme des entiers de 1 à <code>n</code> dépasse 100. <br>Exemple: $1+2+3...$. <br>Écrivez le code pour trouver ce <code>n</code> et affichez-le.",
    code: "somme = 0\nn = 0\n\nwhile somme <= 100:\n    n = n + 1\n    somme = somme + n\n\nprint(n)",
    validation: {
      type: "output_list",
      values: ["14"]
    }
  },
  {
    id: 504,
    serie: "Boucles While",
    titre: "Puissances de 2",
    consigne: "Affichez les puissances de 2 ($2^0, 2^1, 2^2...$) tant que le résultat est inférieur à 1000.",
    code: "n = 1\nwhile n < 1000:\n    print(n)\n    # Multipliez n par 2",
    validation: {
      type: "output_list",
      values: ["1", "2", "4", "8", "16", "32", "64", "128", "256", "512"]
    }
  },
  {
    id: 505,
    serie: "Boucles While",
    titre: "Intérêts composés",
    consigne: "Vous placez 1000€. Chaque année, la somme augmente de 5% (multiplié par 1.05).<br>Créez une fonction <code>annees_pour_doubler(capital)</code> qui retourne le nombre d'années nécessaires pour que le capital double.",
    code: "def annees_pour_doubler(capital_depart):\n    capital_courant = capital_depart\n    cible = capital_depart * 2\n    annees = 0\n    \n    # Utilisez while ici\n    \n    return annees",
    validation: {
      type: "function",
      tests: ["assert annees_pour_doubler(1000) == 15", "assert annees_pour_doubler(100) == 15", "assert annees_pour_doubler(500) == 15"]
    }
  },
  {
    id: 506,
    serie: "Boucles While",
    titre: "Saisie validée",
    consigne: "Simulons une validation. On a une liste de nombres <code>valeurs</code>. Tant que le dernier élément de la liste est négatif, retirez-le (avec <code>.pop()</code>). Affichez la liste finale.",
    code: "valeurs = [10, 5, 3, -2, -8, -1]\n\n# Tant que la dernière valeur (valeurs[-1]) est < 0\n# Utilisez valeurs.pop()\n\nprint(valeurs)",
    validation: {
      type: "output_list",
      values: ["[10, 5, 3]"]
    }
  },
  {
    id: 507,
    serie: "Boucles While",
    titre: "Parcours sans For",
    consigne: "Sans utiliser de boucle <code>for</code>, affichez chaque lettre du mot 'PYTHON' sur une ligne séparée en utilisant un index <code>i</code> et une boucle <code>while</code>.",
    code: "mot = \"PYTHON\"\ni = 0\n\nwhile i < len(mot):\n    # Votre code\n    i += 1",
    validation: {
      type: "output_list",
      values: ["P", "Y", "T", "H", "O", "N"]
    }
  },
  {
    id: 508,
    serie: "Boucles While",
    titre: "Trouver l'élément",
    consigne: "Écrivez une fonction <code>trouver_index(liste, cible)</code> qui retourne l'index de la <code>cible</code> dans la <code>liste</code> en utilisant <code>while</code>. Retournez -1 si non trouvé.",
    code: "def trouver_index(liste, cible):\n    i = 0\n    while i < len(liste):\n        if liste[i] == cible:\n            return i\n        i += 1\n    return -1",
    validation: {
      type: "function",
      tests: ["assert trouver_index([10, 20, 30], 20) == 1", "assert trouver_index(['a', 'b'], 'z') == -1", "assert trouver_index([1, 2, 3], 1) == 0"]
    }
  },
  {
    id: 509,
    serie: "Boucles While",
    titre: "Conjecture de Syracuse",
    consigne: "Partez d'un nombre <code>n</code>. Tant que <code>n > 1</code> : si <code>n</code> est pair, divisez-le par 2. Sinon, multipliez-le par 3 et ajoutez 1. Affichez <code>n</code> à chaque étape.",
    code: "n = 10\nwhile n > 1:\n    # Votre logique ici\n    # N'oubliez pas la division entière //\n    print(int(n))",
    validation: {
      type: "output_list",
      values: ["5", "16", "8", "4", "2", "1"]
    }
  },
  {
    id: 510,
    serie: "Boucles While",
    titre: "PGCD (Algorithme d'Euclide)",
    consigne: "Le PGCD de deux nombres <code>a</code> et <code>b</code> se calcule ainsi : tant que <code>b</code> n'est pas nul, on remplace <code>a</code> par <code>b</code> et <code>b</code> par le reste de <code>a</code> divisé par <code>b</code> ($a \\% b$). Créez la fonction <code>pgcd(a, b)</code>.",
    code: "def pgcd(a, b):\n    while b != 0:\n        # Sauvegardez b temporairement si besoin\n        # ou utilisez l'affectation multiple: a, b = b, a % b\n        pass\n    return a",
    validation: {
      type: "function",
      tests: ["assert pgcd(48, 18) == 6", "assert pgcd(100, 10) == 10", "assert pgcd(17, 13) == 1"]
    }
  },
  {
    id: 511,
    serie: "Boucles While",
    titre: "Suite de Fibonacci",
    consigne: "La suite de Fibonacci commence par 0 et 1. Chaque terme suivant est la somme des deux précédents ($0, 1, 1, 2, 3, 5...$).<br>Trouvez et affichez le premier terme de cette suite qui est <strong>supérieur à 1000</strong>.",
    code: "a = 0\nb = 1\n\nwhile b <= 1000:\n    # Calculez le terme suivant\n    # Astuce: a, b = b, a + b\n    pass\n\nprint(b)",
    validation: {
      type: "output_list",
      values: ["1597"]
    }
  },
  {
    id: 512,
    serie: "Boucles While",
    titre: "Racine numérique",
    consigne: "La racine numérique s'obtient en additionnant les chiffres d'un nombre, puis en recommençant avec le résultat tant que celui-ci a plus d'un chiffre.<br>Exemple pour 942 : $9+4+2=15$ -> $1+5=6$.<br>Écrivez une fonction <code>racine_num(n)</code>.",
    code: "def racine_num(n):\n    while n > 9:\n        somme = 0\n        # Boucle pour additionner les chiffres de n\n        # Puis mettre le résultat dans n\n        pass\n    return n",
    validation: {
      type: "function",
      tests: ["assert racine_num(942) == 6", "assert racine_num(12345) == 6", "assert racine_num(9999) == 9"]
    }
  },
  {
  consigne: "<p>Utilisez la fonction suivante :</p><pre><code class='language-python'>def ma_fonction():\n    return True</code></pre>"
},
];