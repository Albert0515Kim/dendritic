import { getAuth } from 'firebase/auth';
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';

export const getPremiumStatus = async (app) => {
  const auth = getAuth(app);
  const userId = auth.currentUser?.uid;
  if (!userId) throw new Error('User not logged in');

  const db = getFirestore(app);
  const subscriptionsRef = collection(db, 'customers', userId, 'subscriptions');
  const activeOrTrialing = query(
    subscriptionsRef,
    where('status', 'in', ['trialing', 'active'])
  );

  return new Promise((resolve, reject) => {
    const unsubscribe = onSnapshot(
      activeOrTrialing,
      (snapshot) => {
        resolve(snapshot.docs.length > 0);
        unsubscribe();
      },
      (error) => {
        unsubscribe();
        reject(error);
      }
    );
  });
};
