// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb-vrPSA1uAGOh5cRYATexrSLOcExM1cQ",
  authDomain: "skillmatch-26a70.firebaseapp.com",
  projectId: "skillmatch-26a70",
  storageBucket: "skillmatch-26a70.firebasestorage.app",
  messagingSenderId: "443188525766",
  appId: "1:443188525766:web:1ec03196411e81f5b0b5c7",
  measurementId: "G-JZC2PJSSH5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Utility function for password hashing
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Export Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
const analytics = firebase.analytics();

export { auth, db, analytics, hashPassword };
