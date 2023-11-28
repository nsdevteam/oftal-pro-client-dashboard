import { initializeApp } from 'firebase/app';
import {
  getAuth,
  sendPasswordResetEmail,
  signOut,
  updatePassword,
} from 'firebase/auth';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useState } from 'react';

const useFirebase = () => {
  const [requestDBInfo, setRequestDBInfo] = useState();
  const router = useRouter();

  const handleFirebaseConfig = () => {
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    };

    initializeApp(firebaseConfig);
  };

  const handleFetchRequestData = () => {
    const db = getFirestore();
    const colRef = collection(db, 'request');

    getDocs(colRef)
      .then((snapshot) => {
        const requestInfo: any = [];
        snapshot.docs.forEach((doc) => {
          requestInfo.push({ ...doc.data(), id: doc.id });
        });

        setRequestDBInfo(requestInfo);
      })
      .catch((err) => {
        console.log('====================================');
        console.log('>> Error message :: ', err.message);
        console.log('====================================');
      });
  };

  const handleAddNewRequest = () => {
    const db = getFirestore();
    const colRef = collection(db, 'request');

    addDoc(colRef, {
      jobRefence: '67SJDMN',
      patientName: 'Patricia Silva',
    }).then(() => {
      //reset function
    });
  };

  const handleLogOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      router.push('/');
      console.log('User logged out successfully!');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleUpdatePassword = (email: string) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const newPassword = String(Math.random());

    if (!user) return;

    updatePassword(user, newPassword)
      .then(() => {
        router.push('/reset-password-notification');
      })
      .catch((error) => {
        console.log('error reseting password', error);
      });

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        console.log('>> error sending email :: ', error);
        // ..
      });
  };

  return {
    requestDBInfo,
    handleFirebaseConfig,
    handleFetchRequestData,
    handleAddNewRequest,
    handleLogOut,
    handleUpdatePassword,
  };
};

export default useFirebase;
