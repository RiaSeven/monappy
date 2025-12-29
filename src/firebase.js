import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut,
  onAuthStateChanged 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  arrayUnion 
} from "firebase/firestore";

// --- 1. TA CONFIGURATION (Colle celle de la console Firebase ici) ---
const firebaseConfig = {  apiKey: "AIzaSyBGzMQwqbE1yPgoMfxvhgIeX7Qo0wBVJc4",  authDomain: "learnpython-1d8d0.firebaseapp.com",
projectId: "learnpython-1d8d0",
storageBucket: "learnpython-1d8d0.firebasestorage.app",
messagingSenderId: "975177947496",
appId: "1:975177947496:web:30410a3f24860816bc5edd"
  
};

// --- 2. INITIALISATION ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// --- 3. FONCTIONS D'AUTHENTIFICATION ---

// Se connecter avec Google
export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Erreur login:", error);
    throw error;
  }
}

// Se déconnecter
export async function logoutUser() {
  return signOut(auth);
}

// Surveiller si l'utilisateur est connecté ou pas
export function monitorAuthState(callback) {
  onAuthStateChanged(auth, callback);
}

// --- 4. GESTION DES DONNÉES UTILISATEUR (Firestore) ---

// Sauvegarder un exercice réussi
export async function saveExerciseSuccess(userId, exerciseId) {
  const userRef = doc(db, "users", userId);
  
  // arrayUnion permet d'ajouter l'ID sans créer de doublons
  // setDoc avec { merge: true } crée le document s'il n'existe pas
  await setDoc(userRef, {
    completed: arrayUnion(exerciseId),
    lastUpdate: new Date()
  }, { merge: true });
}

// Charger la progression
export async function getUserProgress(userId) {
  const userRef = doc(db, "users", userId);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    return docSnap.data().completed || []; // Retourne la liste des IDs réussis
  } else {
    return [];
  }
}