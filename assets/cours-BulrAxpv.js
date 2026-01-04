import"./navbar-BzfwsQoF.js";import{H as b,r as x}from"./tokyo-night-dark-GurZlr__.js";const f=[{id:0,category:"Introduction",title:"Bienvenue sur Python",content:`
                    <p>Bienvenue dans le monde de la programmation ! Ce premier chapitre est ta porte d'entrée. Tu vas découvrir ce qu'est Python et pourquoi c'est le langage roi au lycée.</p>
                    
                    <h3>Petite histoire</h3>
                    <p>Python a été créé au début des années 1990 par <strong>Guido van Rossum</strong>. Anecdote : son nom ne vient pas du serpent, mais du groupe d'humoristes <em>Monty Python</em> ! 🐍</p>
                    

                    <h3>Pourquoi Python ?</h3>
                    <p>Il est populaire car il est <strong>simple à apprendre</strong> tout en étant très puissant. On l'utilise pour :</p>
                    <ul>
                        <li>Le Développement Web</li>
                        <li>L'Intelligence Artificielle (IA)</li>
                        <li>L'Analyse de Données</li>
                        <li>Les Jeux Vidéo (ex: <em>Civilization IV</em>)</li>
                    </ul>

                    <div class="bg-blue-500/10 border-l-4 border-blue-500 p-4 my-6 rounded-r">
                        <h4 class="text-blue-400 font-bold text-sm uppercase mb-1">Objectif Lycée (SNT/NSI)</h4>
                        <p class="text-sm m-0 text-slate-300">L'idée n'est pas de devenir un expert instantanément, mais d'acquérir la <strong>pensée algorithmique</strong> : décomposer un problème complexe en étapes simples.</p>
                    </div>
                `},{id:1,category:"Concepts",title:"Langage & Interpréteur",content:`
                    <h3>Qu'est-ce qu'un langage ?</h3>
                    <p>C'est un moyen de donner des ordres à l'ordinateur. Python est un langage <strong>interprété</strong>. </p>
                    <p>Cela signifie qu'un programme (l'interpréteur) lit ton code ligne par ligne et l'exécute immédiatement. C'est différent des langages <em>compilés</em> (comme C++) qui traduisent tout d'un coup.</p>

                    <h3>Deux façons de coder</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                        <div class="glass-card p-4 bg-white/5">
                            <h4 class="text-cyan-400 font-bold">1. L'Interpréteur (Console)</h4>
                            <p class="text-sm text-slate-400 mt-2">Tu tapes une commande, tu as la réponse directe. Idéal pour tester une idée.</p>
                            <pre class="mt-2"><code class="language-python">>>> 3 + 4
7</code></pre>
                        </div>
                        <div class="glass-card p-4 bg-white/5">
                            <h4 class="text-purple-400 font-bold">2. L'Éditeur (Script)</h4>
                            <p class="text-sm text-slate-400 mt-2">Pour écrire des programmes longs. On sauvegarde le fichier en <code>.py</code>.</p>
                        </div>
                    </div>
                `},{id:2,category:"Outils Web",title:"Basthon (En Ligne)",content:`
                    <p><strong>Basthon</strong> (Bac À Sable pour pyTHON) fonctionne directement dans ton navigateur. Pas d'installation, respect de la vie privée (le code reste sur ton ordi).</p>
                    
                    <h3>Les deux modes</h3>
                    <ul>
                        <li><strong>Basthon-Console :</strong> L'interface classique. À gauche le code, à droite le résultat.</li>
                        <li><strong>Basthon-Notebook :</strong> Un "calepin" interactif (basé sur Jupyter) pour mélanger texte, images et code. Très utilisé par les scientifiques.</li>
                    </ul>

                    

                    <h3>Fonctionnalités clés</h3>
                    <p>Tu trouveras des boutons pour <strong>Exécuter</strong> (flèche), <strong>Télécharger</strong> ton script ou le <strong>Partager</strong> via une URL unique.</p>
                `},{id:3,category:"Outils Local",title:"EduPython & NumWorks",content:`
                    <h3>EduPython (PC)</h3>
                    <p>C'est le couteau suisse du lycée. Une distribution "clé en main" qui contient tout : éditeur, console et bibliothèques (maths, jeux, graphiques...).</p>
                    <p><strong>Avantage :</strong> Tu peux l'installer sur une clé USB et l'emmener partout !</p>

                    <hr class="border-white/10 my-8">

                    <h3>La Calculatrice NumWorks</h3>
                    <p>Elle utilise <strong>MicroPython</strong>. Voici comment l'utiliser :</p>
                    
                    <ol class="list-decimal list-inside space-y-2 text-slate-300">
                        <li>Va dans le menu <strong>Python</strong>.</li>
                        <li>"Ajouter un script" pour écrire ton code.</li>
                        <li>Touche <strong class="text-yellow-400">Toolbox</strong> : Accès rapide aux boucles et fonctions.</li>
                        <li>Touche <strong class="text-yellow-400">Var</strong> : Pour retrouver tes variables.</li>
                        <li>Lance le script avec "Exécuter".</li>
                    </ol>
                    
                `},{id:4,category:"Pratique",title:"Premiers Exemples",content:`
                    <h3>1. Le "Hello World" (Basthon)</h3>
                    <p>Le classique absolu. Tape ceci dans l'éditeur :</p>
                    <pre><code class="language-python">print("Bonjour le monde !")
# Dans la console, tape :
print("Python, c'est cool !")</code></pre>

                    <h3>2. Calcul d'Aire (EduPython)</h3>
                    <p>Un script simple avec des variables :</p>
                    <pre><code class="language-python"># Calcul de l'aire d'un rectangle
longueur = 10
largeur = 5
aire = longueur * largeur

print(f"L'aire est de {aire}")</code></pre>

                    <h3>3. Fonction Carré (NumWorks)</h3>
                    <p>Définissons une fonction mathématique simple :</p>
                    <pre><code class="language-python">def carre(x):
    return x * x

print("Utilisez carre(nombre) dans la console")</code></pre>
                    <p>Ensuite, dans la console de la calculatrice, tape <code>carre(5)</code> pour obtenir 25.</p>
                `},{id:5,category:"Les Variables",title:"Le concept de la 'Boîte'",content:`
                    <p>Imagine des boîtes LEGO. Pour t'y retrouver, tu mets une étiquette sur chacune : "Rouges", "Bleues", "Roues". En Python, c'est pareil !</p>
                    
                    <p>Une <strong>variable</strong> est un espace mémoire avec un nom (l'étiquette) qui contient une valeur.</p>

                    <h3>Règles de Nommage (Syntaxe)</h3>
                    <ul class="space-y-2">
                        <li>✅ <strong>Autorisé :</strong> Lettres, chiffres, tiret bas <code>_</code>.</li>
                        <li>❌ <strong>Interdit :</strong> Espaces, caractères spéciaux (@, %, $), commencer par un chiffre.</li>
                        <li>🐍 <strong>Convention :</strong> On utilise le <em>snake_case</em> (tout en minuscule, mots séparés par des _).</li>
                    </ul>
                    <pre><code class="language-python"># Bons exemples
score_joueur = 100
vie_restante = 3

# Mauvais exemples
Score Joueur = 100  # Espace interdit
1ere_place = True   # Ne pas commencer par un chiffre</code></pre>
                `},{id:6,category:"Les Types",title:"Data Types",content:`
                    <p>Python devine le type de donnée automatiquement (Typage dynamique). Voici les 4 fantastiques :</p>
                    

[Image of python data types chart]


                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                        <div class="glass-card p-3 bg-white/5">
                            <strong class="text-cyan-400">int</strong> (Entier)<br>
                            <code>age = 16</code>
                        </div>
                        <div class="glass-card p-3 bg-white/5">
                            <strong class="text-purple-400">float</strong> (Flottant)<br>
                            <code>prix = 19.99</code><br>
                            <em class="text-xs text-slate-400">Attention au point !</em>
                        </div>
                        <div class="glass-card p-3 bg-white/5">
                            <strong class="text-yellow-400">str</strong> (String)<br>
                            <code>nom = "Alice"</code>
                        </div>
                        <div class="glass-card p-3 bg-white/5">
                            <strong class="text-green-400">bool</strong> (Booléen)<br>
                            <code>game_over = False</code>
                        </div>
                    </div>

                    <h3>Conversions (Transtypage)</h3>
                    <p>On peut transformer un type en un autre :</p>
                    <pre><code class="language-python">x = "10"       # C'est un texte
y = int(x) + 5 # On le convertit en entier pour calculer (15)</code></pre>
                `},{id:7,category:"Action",title:"L'Affectation",content:`
                    <p>Le signe <code>=</code> ne veut pas dire "égal" comme en maths (ça c'est <code>==</code>). Il veut dire <strong>"Prends la valeur à droite et mets-la dans la boîte à gauche"</strong>.</p>

                    <h3>L'Incrémentation</h3>
                    <p>C'est l'action d'augmenter une variable. Très utilisé dans les jeux (score, niveau...).</p>
                    <pre><code class="language-python">score = 0
score = score + 1  # Score vaut 1
score += 10        # Raccourci ! Score vaut 11</code></pre>

                    <h3>La Permutation Magique</h3>
                    <p>Python permet d'échanger deux valeurs en une ligne (impossible dans beaucoup d'autres langages !) :</p>
                    <pre><code class="language-python">a = 5
b = 10
a, b = b, a  # Hop ! a vaut 10, b vaut 5</code></pre>
                `},{id:8,category:"Calculs",title:"Opérations & Maths",content:`
                    <p>Les classiques : <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>.</p>
                    <p>Les spéciaux :</p>
                    <ul>
                        <li><code>//</code> : Division entière (ex: <code>10 // 3</code> donne 3)</li>
                        <li><code>%</code> : Modulo / Reste (ex: <code>10 % 3</code> donne 1)</li>
                        <li><code>**</code> : Puissance (ex: <code>2 ** 3</code> donne 8)</li>
                    </ul>

                    <h3>Le Module Math</h3>
                    <p>Pour aller plus loin ($sqrt{x}$, $pi$, cosinus...), on importe le module <code>math</code>.</p>
                    
                    <pre><code class="language-python">import math

print(math.pi)        # 3.1415...
print(math.sqrt(16))  # 4.0</code></pre>
                `},{id:9,category:"Strings",title:"Manipuler du Texte",content:`
                    <p>On peut "additionner" du texte. On appelle ça la <strong>concaténation</strong>.</p>
                    <pre><code class="language-python">prenom = "Luke"
message = "Je suis ton père, " + prenom
# Résultat : "Je suis ton père, Luke"</code></pre>

                    <div class="bg-red-500/10 border-l-4 border-red-500 p-4 my-6 rounded-r">
                        <h4 class="text-red-400 font-bold text-sm uppercase mb-1">Attention aux types !</h4>
                        <p class="text-sm m-0 text-slate-300">Impossible d'additionner un Texte et un Nombre directement. Il faut convertir le nombre : <code>"Age : " + str(16)</code>.</p>
                    </div>
                `},{id:10,category:"Les Fonctions",title:"Le concept : La Recette",content:`
                    <p>Imagine que tu doives réécrire 10 fois le même code pour calculer un prix TTC. C'est long et risqué. La solution ? Les <strong>Fonctions</strong>.</p>
                    
                    <h3>L'Analogie de la Recette</h3>
                    <ul class="space-y-2 mt-4">
                        <li>📜 <strong>Le Nom :</strong> "Gâteau au Chocolat" (Nom de la fonction)</li>
                        <li>🥚 <strong>Ingrédients :</strong> Oeufs, Farine (Paramètres)</li>
                        <li>🥣 <strong>Préparation :</strong> Mélanger, Cuire (Instructions)</li>
                        <li>🍰 <strong>Résultat :</strong> Le Gâteau (Valeur de retour / Return)</li>
                    </ul>

                    <p class="mt-4">En résumé : Une fonction est un bloc de code nommé qui fait une tâche précise et qu'on peut réutiliser à l'infini.</p>
                `},{id:11,category:"Syntaxe",title:"Définir & Appeler",content:`
                    <h3>1. La Définition (Créer la recette)</h3>
                    <p>On utilise le mot-clé <code>def</code>. Attention à l'indentation !</p>
                    <pre><code class="language-python">def saluer():
    print("Bonjour !")  # Ce code appartient à la fonction</code></pre>

                    <h3>2. L'Appel (Cuisiner)</h3>
                    <p>La définition ne fait rien tant qu'on ne l'appelle pas avec des parenthèses.</p>
                    <pre><code class="language-python">saluer()  # Affiche "Bonjour !"</code></pre>
                `},{id:12,category:"Input/Output",title:"Paramètres & Return",content:`
                    <h3>Les Paramètres (Entrées)</h3>
                    <p>Ce sont des variables qu'on donne à la fonction pour qu'elle travaille.</p>
                    <pre><code class="language-python">def dire_bonjour(nom):  # 'nom' est le paramètre
    print(f"Salut {nom}")

dire_bonjour("Alice")   # "Alice" est l'argument</code></pre>

                    <h3>Le Return (Sortie)</h3>
                    <div class="bg-red-500/10 border-l-4 border-red-500 p-4 my-6 rounded-r">
                        <h4 class="text-red-400 font-bold text-sm uppercase mb-1">Print vs Return</h4>
                        <p class="text-sm m-0 text-slate-300">
                            <strong>Print :</strong> Affiche à l'écran (le boulanger te crie le prix).<br>
                            <strong>Return :</strong> Renvoie la valeur pour qu'elle soit réutilisée par le programme (le boulanger te donne le gâteau).
                        </p>
                    </div>
                    <pre><code class="language-python">def addition(a, b):
    return a + b  # Renvoie le résultat

resultat = addition(5, 3) # resultat vaut 8</code></pre>
                `},{id:13,category:"Avancé",title:"Scope (Portée)",content:`
                    <p>C'est la règle de visibilité des variables. Imagine que chaque fonction est une maison fermée à clé.</p>

                    <h3>Variables Locales</h3>
                    <p>Créées DANS la fonction. Elles n'existent pas dehors. Elles sont détruites quand la fonction finit.</p>

                    <h3>Variables Globales</h3>
                    <p>Créées DEHORS. Tout le monde peut les lire (mais pas les modifier facilement).</p>

                    <pre><code class="language-python">x = "Global"

def test():
    x = "Local"  # Celle-ci gagne à l'intérieur !
    print(x)

test()    # Affiche "Local"
print(x)  # Affiche "Global"</code></pre>
                `},{id:14,category:"Documentation",title:"Docstrings",content:`
                    <p>C'est la notice d'utilisation de ta fonction. On l'écrit entre triples guillemets juste après le <code>def</code>.</p>
                    <pre><code class="language-python">def aire_carre(c):
    """
    Calcule l'aire d'un carré.
    Paramètre c : côté du carré
    """
    return c * c</code></pre>
                    <p>C'est une super habitude à prendre pour le bac NSI !</p>
                `},{id:15,category:"Logique",title:"Vrai ou Faux ?",content:`
                    <p>Pour qu'un programme prenne des décisions, il doit savoir si une information est Vraie (<strong>True</strong>) ou Fausse (<strong>False</strong>). C'est le type <strong>Booléen</strong>.</p>
                    [Image of light switch on off boolean]

                    <h3>Les Comparateurs</h3>
                    <p>Ils servent à poser des questions à l'ordinateur :</p>
                    <ul class="grid grid-cols-2 gap-2 text-sm mt-2">
                        <li class="bg-white/5 p-2 rounded border border-white/10"><code>==</code> : Égal à</li>
                        <li class="bg-white/5 p-2 rounded border border-white/10"><code>!=</code> : Différent de</li>
                        <li class="bg-white/5 p-2 rounded border border-white/10"><code>&lt;</code> : Plus petit</li>
                        <li class="bg-white/5 p-2 rounded border border-white/10"><code>&gt;=</code> : Plus grand ou égal</li>
                    </ul>

                    <div class="bg-red-500/10 border-l-4 border-red-500 p-4 my-4 rounded-r">
                        <h4 class="text-red-400 font-bold text-sm uppercase mb-1">Attention au Piège !</h4>
                        <p class="text-sm m-0 text-slate-300">
                            <code>=</code> (Un seul égal) c'est pour <strong>l'affectation</strong> (mettre dans la boîte).<br>
                            <code>==</code> (Double égal) c'est pour <strong>comparer</strong>.
                        </p>
                    </div>
                `},{id:16,category:"Logique",title:"Opérateurs Logiques",content:`
                    <p>Parfois, une seule condition ne suffit pas. On les combine avec <code>and</code>, <code>or</code> et <code>not</code>.</p>
                    [Image of python truth tables logic]

                    <h3>En résumé :</h3>
                    <ul class="space-y-2 mt-2">
                        <li>🤝 <strong>AND (ET) :</strong> Il faut que TOUT soit vrai.<br><em class="text-slate-500 text-xs">Ex: Avoir le permis ET être à jeun.</em></li>
                        <li>🤷 <strong>OR (OU) :</strong> Il suffit qu'UN SEUL soit vrai.<br><em class="text-slate-500 text-xs">Ex: Payer par carte OU en espèces.</em></li>
                        <li>immo <strong>NOT (NON) :</strong> Inverse le résultat.<br><em class="text-slate-500 text-xs">Ex: Si ce n'est pas (not) fermé, c'est ouvert.</em></li>
                    </ul>
                `},{id:17,category:"Structure",title:"Si... Sinon... (If/Else)",content:`
                    <p>C'est l'aiguillage du train. Le code part dans une direction ou une autre.</p>
                    [Image of if else statement flowchart]

                    <h3>La Syntaxe Sacrée</h3>
                    <pre><code class="language-python">age = 16

if age >= 18:
    print("Majeur")   # Bloc exécuté si Vrai
else:
    print("Mineur")   # Bloc exécuté si Faux</code></pre>

                    <p class="text-sm mt-2 text-slate-400">⚠️ <strong>L'indentation</strong> (le décalage vers la droite) est obligatoire ! C'est elle qui dit à Python ce qui est "dans" le if.</p>
                `},{id:18,category:"Structure",title:"Le Elif (Sinon Si)",content:`
                    <p>Quand on a plus de deux choix, on utilise <code>elif</code> (contraction de "Else If").</p>
                    
                    <h3>Exemple : Cinéma</h3>
                    <pre><code class="language-python">if age < 12:
    prix = 5
elif age < 18:  # Si pas < 12, mais < 18
    prix = 8
else:           # Pour tous les autres
    prix = 12</code></pre>
                    <p>Python s'arrête à la première condition vraie qu'il trouve !</p>
                `},{id:19,category:"Pratique",title:"Année Bissextile",content:`
                    <p>Un exemple classique de logique complexe combinée.</p>
                    <p>Une année est bissextile si :</p>
                    <ul class="list-disc list-inside text-sm text-slate-400 mb-2">
                        <li>Divisible par 4 ET pas par 100</li>
                        <li>OU ALORS Divisible par 400</li>
                    </ul>
                    <pre><code class="language-python"># Le symbole % (modulo) donne le reste de la division
if (annee % 4 == 0 and annee % 100 != 0) or (annee % 400 == 0):
    print("Bissextile")
else:
    print("Non bissextile")</code></pre>
                `},{id:20,category:"Les Boucles",title:"La Boucle For",content:`
                    <p>Imagine devoir écrire 100 fois "Je ne bavarderai pas". En Python, on ne l'écrit qu'une fois, et on dit à l'ordinateur de le répéter.</p>
                    

[Image of for loop flowchart]


                    <h3>Le concept d'Itération</h3>
                    <p>Une boucle <code>for</code> permet de parcourir une <strong>séquence</strong> (une liste, un mot, une suite de nombres) élément par élément.</p>

                    <pre><code class="language-python"># Pour chaque fruit dans la liste...
for fruit in ["Pomme", "Banane", "Cerise"]:
    print(fruit)  # ... je l'affiche !</code></pre>
                `},{id:21,category:"Les Boucles",title:"La Fonction Range()",content:`
                    <p>C'est l'outil n°1 pour répéter une action un nombre précis de fois. Elle génère une suite de nombres.</p>
                    

                    <h3>Les 3 variantes :</h3>
                    <ul class="space-y-2 mt-2 text-sm">
                        <li><code>range(5)</code> : De 0 à 4 (5 exclu !). <span class="text-slate-500">-> 0, 1, 2, 3, 4</span></li>
                        <li><code>range(2, 6)</code> : De 2 à 5. <span class="text-slate-500">-> 2, 3, 4, 5</span></li>
                        <li><code>range(0, 10, 2)</code> : De 0 à 9 par pas de 2. <span class="text-slate-500">-> 0, 2, 4, 6, 8</span></li>
                    </ul>

                    <pre><code class="language-python">for i in range(3):
    print("Hip Hip Hourra !")</code></pre>
                `},{id:22,category:"Itération",title:"Parcourir des Données",content:`
                    <p>On peut utiliser <code>for</code> sur presque tout :</p>
                    
                    <h3>Sur une chaîne de caractères (String)</h3>
                    
                    <pre><code class="language-python">mot = "Python"
for lettre in mot:
    print(lettre) # Affiche P, puis y, puis t...</code></pre>

                    <h3>Sur une Liste (List)</h3>
                    <pre><code class="language-python">notes = [12, 15, 8]
somme = 0
for n in notes:
    somme = somme + n # On cumule les valeurs</code></pre>
                `},{id:23,category:"Contrôle",title:"Break & Continue",content:`
                    <p>Parfois, on veut perturber la boucle.</p>
                    

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div class="glass-card p-3 bg-red-500/10 border border-red-500/30">
                            <strong class="text-red-400">BREAK</strong><br>
                            Stop tout ! On sort de la boucle immédiatement.<br>
                            <em class="text-xs">Utile quand on a trouvé ce qu'on cherchait.</em>
                        </div>
                        <div class="glass-card p-3 bg-yellow-500/10 border border-yellow-500/30">
                            <strong class="text-yellow-400">CONTINUE</strong><br>
                            Passe le tour ! On saute ce qui reste et on passe à l'itération suivante.<br>
                            <em class="text-xs">Utile pour filtrer des valeurs.</em>
                        </div>
                    </div>
                `},{id:24,category:"Expert",title:"Enumerate & Imbrication",content:`
                    <h3>Avoir l'index ET la valeur</h3>
                    <p>La fonction <code>enumerate()</code> est magique pour savoir où on est :</p>
                    <pre><code class="language-python">liste = ["a", "b", "c"]
for index, valeur in enumerate(liste):
    print(f"Case {index} contient {valeur}")</code></pre>

                    <h3>Boucles Imbriquées (Inception)</h3>
                    <p>Une boucle dans une boucle. Utile pour les grilles ou les tables de multiplication.</p>
                    <pre><code class="language-python">for x in range(3):
    for y in range(3):
        print(f"Pixel {x},{y}")</code></pre>
                `},{id:25,category:"Les Boucles",title:"La Boucle While",content:`
                    <p>La boucle <code>for</code> est parfaite quand on connaît le nombre de tours. Mais si on ne sait pas ?</p>
                    <p>Exemple : <em>"Continue de manger <strong>tant que</strong> tu as faim."</em></p>
                    [Image of while loop flowchart]

                    <h3>La Syntaxe</h3>
                    <pre><code class="language-python">faim = True
while faim:
    print("Miam !")
    # Il faut quelque chose pour arrêter la faim
    # sinon la boucle est infinie !</code></pre>
                `},{id:26,category:"Sécurité",title:"Le Cycle I.T.U.",content:`
                    <p>Pour éviter la <strong>Boucle Infinie</strong> (le programme qui plante), respecte toujours ces 3 étapes :</p>
                    
                    <ul class="space-y-3 mt-4 text-sm">
                        <li class="glass-card p-2 border-l-4 border-green-500">
                            <strong>1. Initialisation :</strong> Créer la variable avant la boucle.<br>
                            <code>compteur = 0</code>
                        </li>
                        <li class="glass-card p-2 border-l-4 border-yellow-500">
                            <strong>2. Test :</strong> La condition du while.<br>
                            <code>while compteur < 5:</code>
                        </li>
                        <li class="glass-card p-2 border-l-4 border-red-500">
                            <strong>3. Mise à jour (CRUCIAL) :</strong> Changer la variable DANS la boucle.<br>
                            <code>compteur = compteur + 1</code>
                        </li>
                    </ul>
                `},{id:27,category:"Usage",title:"While vs For",content:`
                    <p>Quand choisir laquelle ?</p>
                    [Image of for loop vs while loop comparison]

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <h4 class="text-cyan-400 font-bold">Boucle FOR</h4>
                            <p class="text-xs text-slate-400">"Je sais combien de fois"</p>
                            <ul class="text-xs list-disc pl-4 mt-1">
                                <li>Parcourir une liste</li>
                                <li>Compter de 1 à 10</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-purple-400 font-bold">Boucle WHILE</h4>
                            <p class="text-xs text-slate-400">"Je sais quand m'arrêter"</p>
                            <ul class="text-xs list-disc pl-4 mt-1">
                                <li>Attendre une saisie valide</li>
                                <li>Jeu (tant que pas game over)</li>
                                <li>Chercher sans savoir où c'est</li>
                            </ul>
                        </div>
                    </div>
                `},{id:28,category:"Avancé",title:"While True & Break",content:`
                    <p>Parfois, on crée volontairement une boucle infinie <code>while True</code>, et on la casse de l'intérieur avec <code>break</code>.</p>
                    [Image of infinite loop break concept]
                    
                    <pre><code class="language-python">while True:
    reponse = "Stop" # (Simulé ici)
    if reponse == "Stop":
        break # Sortie de secours !</code></pre>
                    <p class="text-xs text-slate-400 mt-2">C'est très utilisé pour les menus de jeux vidéo.</p>
                `},{id:29,category:"Maths",title:"Suite de Syracuse",content:`
                    <p>Un grand classique du <code>while</code> : la conjecture de Collatz (ou Syracuse).</p>
                    <p>On prend un nombre <code>n</code> :</p>
                    <ul class="list-disc pl-4 text-sm text-slate-300">
                        <li>Si pair : on divise par 2</li>
                        <li>Si impair : on fait 3*n + 1</li>
                        <li>On répète <strong>tant que</strong> n != 1</li>
                    </ul>
                    <p class="mt-2 text-xs">On ne sait jamais à l'avance combien d'étapes ça va prendre !</p>
                `},{id:30,category:"Modules",title:"Le Hasard en Python",content:`
                    <p>Pour simuler un lancer de dés ou mélanger des cartes, on utilise le module <strong>random</strong>.</p>
                    <p>C'est un générateur <em>pseudo-aléatoire</em> : une suite de calculs complexes qui <em>ressemble</em> au hasard.</p>
                    

                    <h3>L'importation</h3>
                    <pre><code class="language-python">import random

# On accède ensuite aux fonctions avec le point :
x = random.randint(1, 6)</code></pre>
                `},{id:31,category:"Nombres",title:"Générer des Nombres",content:`
                    <p>Voici les 3 fonctions essentielles pour les nombres :</p>
                    <ul class="space-y-3 mt-4 text-sm">
                        <li class="glass-card p-2 border-l-4 border-blue-500">
                            <code>randint(a, b)</code><br>
                            Entier entre a et b <strong>inclus</strong>.<br>
                            <em class="text-xs text-slate-400">Ex: Dé à jouer (1, 6).</em>
                        </li>
                        <li class="glass-card p-2 border-l-4 border-purple-500">
                            <code>random()</code><br>
                            Flottant entre 0.0 et 1.0 (exclu).<br>
                            <em class="text-xs text-slate-400">Ex: Pourcentage de chance (0.3 = 30%).</em>
                        </li>
                        <li class="glass-card p-2 border-l-4 border-cyan-500">
                            <code>uniform(a, b)</code><br>
                            Flottant précis entre a et b.<br>
                            <em class="text-xs text-slate-400">Ex: Température (19.5, 22.0).</em>
                        </li>
                    </ul>
                `},{id:32,category:"Listes",title:"Listes & Hasard",content:`
                    <p>Python manipule très bien le hasard dans les listes.</p>
                    

                    <pre><code class="language-python">fruits = ["Pomme", "Banane", "Cerise", "Datte"]

# 1. Choisir UN seul élément
gagnant = random.choice(fruits)

# 2. Choisir un échantillon (sans remise)
podium = random.sample(fruits, 2) 

# 3. Mélanger la liste (modifie la liste !)
random.shuffle(fruits)</code></pre>
                `},{id:33,category:"Avancé",title:"La Graine (Seed)",content:`
                    <p>Parfois, on veut que le hasard soit... prévisible ! (Pour corriger des bugs ou partager une expérience scientifique).</p>
                    <p>On utilise <code>random.seed()</code>.</p>
                    <pre><code class="language-python">random.seed(42)
print(random.randint(0, 10)) # Donnera TOUJOURS le même nombre</code></pre>
                `},{id:34,category:"Simulation",title:"Méthode Monte Carlo",content:`
                    <p>On peut résoudre des problèmes mathématiques complexes en "bombardant" le problème de nombres aléatoires.</p>
                    
                    <p><strong>Exemple : Estimer Pi</strong></p>
                    <p>On tire des points au hasard dans un carré. La proportion de ceux qui tombent dans le cercle nous donne la valeur de Pi.</p>
                `},{id:35,category:"Data Viz",title:"Matplotlib : Le Peintre",content:`
                    <p>Pour tracer des courbes, des histogrammes ou des nuages de points, <strong>Matplotlib</strong> est la référence.</p>
                    <p>Il existe deux façons de l'utiliser, mais la méthode "Orientée Objet" est la plus puissante.</p>

                    <h3>L'Anatomie d'un Graphique</h3>
                    <p>Ne confondez plus jamais "Figure" et "Axes" !</p>
                    [Image of matplotlib plot anatomy diagram figure axes axis artists]
                    <ul class="text-sm space-y-1 mt-2">
                        <li>🖼️ <strong>Figure :</strong> Le cadre global (la fenêtre).</li>
                        <li>📈 <strong>Axes :</strong> La zone du graphique (où on dessine les données).</li>
                        <li>📏 <strong>Axis :</strong> Les axes x et y (les graduations).</li>
                    </ul>

                    <pre><code class="language-python">import matplotlib.pyplot as plt

# On prépare le cadre (fig) et la zone de dessin (ax)
fig, ax = plt.subplots()</code></pre>
                `},{id:36,category:"Graphiques",title:"Les 4 Fantastiques",content:`
                    <p>Les types de graphiques les plus courants :</p>
                    [Image of matplotlib chart types line bar scatter histogram]

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm">
                        <div class="glass-card p-2 border-l-4 border-blue-500">
                            <strong>ax.plot(x, y)</strong><br>
                            Courbes et lignes. Idéal pour les fonctions mathématiques ou l'évolution temporelle.
                        </div>
                        <div class="glass-card p-2 border-l-4 border-green-500">
                            <strong>ax.scatter(x, y)</strong><br>
                            Nuage de points. Pour voir la corrélation entre deux variables.
                        </div>
                        <div class="glass-card p-2 border-l-4 border-yellow-500">
                            <strong>ax.bar(x, height)</strong><br>
                            Barres. Pour comparer des catégories (ex: ventes par mois).
                        </div>
                        <div class="glass-card p-2 border-l-4 border-purple-500">
                            <strong>ax.hist(data)</strong><br>
                            Histogramme. Pour voir la répartition d'une seule variable (distribution).
                        </div>
                    </div>
                `},{id:37,category:"Style",title:"Personnalisation",content:`
                    <p>Un graphique sans titre ni légende est inutile. Voici comment habiller vos données :</p>
                    
                    <pre><code class="language-python">ax.set_title("Évolution du Bitcoin")
ax.set_xlabel("Temps")
ax.set_ylabel("Prix ($)")

ax.grid(True)     # Ajouter une grille
ax.legend()       # Afficher la légende</code></pre>

                    <p class="text-xs text-slate-400 mt-2">Astuce : Vous pouvez utiliser du LaTeX dans les titres en mettant un 'r' devant la chaîne : <code>r"$alpha > \beta$"</code>.</p>
                `},{id:38,category:"Layout",title:"Subplots (Grilles)",content:`
                    <p>Vous voulez plusieurs graphiques sur une même image ? Utilisez <code>subplots</code>.</p>
                    [Image of matplotlib subplots grid layout structure]

                    <pre><code class="language-python"># Créer une grille de 2 lignes, 1 colonne
fig, axs = plt.subplots(2, 1, figsize=(8, 6))

# axs est maintenant une liste !
axs[0].plot(x, y1, color="red")  # Graphique du haut
axs[1].plot(x, y2, color="blue") # Graphique du bas</code></pre>
                `},{id:39,category:"Bonus",title:"Seaborn",content:`
                    <p>Seaborn est une surcouche de Matplotlib. C'est plus beau par défaut et plus simple pour les statistiques complexes.</p>
                    <pre><code class="language-python">import seaborn as sns

# Un nuage de points avec régression en 1 ligne !
sns.regplot(x="taille", y="poids", data=df)</code></pre>
                `},{title:"Les Maths",content:"<p>Voici une formule : $$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$</p>"}],m=document.getElementById("course-sidebar-list"),y=document.getElementById("course-content-title"),u=document.getElementById("course-content-body"),v=document.getElementById("course-category-badge");let g=null;const L={delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],throwOnError:!1},d={},h=[];f.forEach(t=>{d[t.category]||(d[t.category]=[],h.push(t.category)),d[t.category].push(t)});const n=[];h.forEach(t=>{n.push(...d[t])});function q(){m.innerHTML="",Object.entries(d).forEach(([t,s],r)=>{const e=document.createElement("div");e.className="pb-2 mb-2 border-b border-white/5 group-wrapper",e.setAttribute("data-category",t);const o=document.createElement("button");o.className="flex items-center justify-between w-full px-4 py-3 text-xs font-bold tracking-wider uppercase transition cursor-pointer sidebar-header text-slate-400 hover:text-white",o.innerHTML=`
      <span>${t}</span>
      <svg class="w-4 h-4 transition-transform duration-200 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    `;const i=document.createElement("ul");i.className="hidden space-y-1 sidebar-list",o.onclick=()=>{const l=i.classList.contains("hidden");document.querySelectorAll(".sidebar-list").forEach(a=>a.classList.add("hidden")),document.querySelectorAll(".sidebar-header svg").forEach(a=>a.classList.remove("rotate-180")),l&&(i.classList.remove("hidden"),o.querySelector("svg").classList.add("rotate-180"))},s.forEach(l=>{const a=document.createElement("li"),c=document.createElement("button");c.className="w-full px-4 py-2 pl-6 text-sm text-left truncate transition border-l-2 border-transparent text-slate-400 hover:text-white hover:bg-white/5",c.textContent=l.title,c.setAttribute("data-id",l.id),c.addEventListener("click",()=>p(l)),a.appendChild(c),i.appendChild(a)}),e.appendChild(o),e.appendChild(i),m.appendChild(e)})}function C(){const t=document.getElementById("nav-buttons-container");if(!t||!g)return;const s=n.findIndex(o=>o.id===g.id),r=s>0?n[s-1]:null,e=s<n.length-1?n[s+1]:null;t.innerHTML=`
        <button id="btn-prev" class="px-4 py-2 text-xs font-bold uppercase rounded-lg border border-white/10 hover:bg-white/5 transition flex items-center gap-2 ${r?"text-slate-300":"opacity-50 cursor-not-allowed text-slate-500"}" ${r?"":"disabled"}>
            <span>←</span> Précédent
        </button>
        <button id="btn-next" class="px-4 py-2 text-xs font-bold uppercase rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/20 flex items-center gap-2 ${e?"":"opacity-50 cursor-not-allowed hidden"}" ${e?"":"disabled"}>
            Suivant <span>→</span>
        </button>
    `,r&&(document.getElementById("btn-prev").onclick=()=>p(r)),e&&(document.getElementById("btn-next").onclick=()=>p(e))}function p(t){g=t,y.textContent=t.title,v.textContent=t.category,u.innerHTML=t.content,u.querySelectorAll("pre code").forEach(e=>b.highlightElement(e)),x(u,L),document.querySelectorAll("#course-sidebar-list button[data-id]").forEach(e=>{e.classList.remove("border-indigo-500","text-white","bg-white/5"),e.classList.add("border-transparent","text-slate-400")});const s=document.querySelector(`#course-sidebar-list button[data-id="${t.id}"]`);if(s){s.classList.remove("border-transparent","text-slate-400"),s.classList.add("border-indigo-500","text-white","bg-white/5");const e=s.closest("ul");if(document.querySelectorAll(".sidebar-list").forEach(o=>{o!==e&&o.classList.add("hidden")}),document.querySelectorAll(".sidebar-header svg").forEach(o=>o.classList.remove("rotate-180")),e){e.classList.remove("hidden");const o=e.previousElementSibling;o&&o.querySelector("svg").classList.add("rotate-180")}}const r=u.closest(".overflow-y-auto");r&&(r.scrollTop=0),C()}q();n.length>0&&p(n[0]);
