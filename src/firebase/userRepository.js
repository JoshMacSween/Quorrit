import { db } from './'

export async function getUser(uid) {
  const userRef = db.ref(`users/${uid}`)
  const userSnapshot = await userRef.once('value')
  return userSnapshot.val()
}

export function addUser(user) {
  const userRef = db.ref(`users/${user.uid}`)
  return userRef.set(user)
}

export function addPostToUser(userId, content) {
  const postsRef = db.ref(`posts/${userId}`)
  const itemRef = postsRef.push()
  itemRef.set({ content })
  return itemRef
}