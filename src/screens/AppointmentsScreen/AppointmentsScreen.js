import React, { useEffect, useState } from 'react'
import { Pressable, Text, View, TextInput, FlatList} from 'react-native'
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../firebaseConfig';
import { signOut } from "firebase/auth";
import styles from './styles'
import { collection, setDoc, onSnapshot, doc, query, where, orderBy, serverTimestamp, deleteDoc, getDoc} from "firebase/firestore"; 



export default function AppointmentsScreen(props) {
  const navigation = props.navigation;
  const [noteText, setNoteText] = useState('')
  const [notes, setNotes] = useState([])
  //const userID = props.extraData.uid
 // const notesCollection = collection(FIREBASE_DB, 'notes');

// Applying useEffect to retrieve all the notes from the database
// useEffect(() => {

//   if (!userID) {
//     // No hay userID, por lo tanto no intentar escuchar cambios
//     return;
//   }

//   const notesCollection = collection(FIREBASE_DB, 'notes');
//   const q = query(notesCollection, where("authorID", "==", userID), orderBy('createdAt', 'desc'));
//   const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     const newNotes = [];
//     querySnapshot.forEach((doc) => {
//       newNotes.push({ id: doc.id, ...doc.data() });
//     });
//     setNotes(newNotes);
//   });
//   return () => unsubscribe();  // Esto asegura que se limpie el observador si el componente se desmonta
// }, [userID]);

const onAddButtonPress = async () => {
  if (noteText && noteText.length > 0) {
   // const timestamp = serverTimestamp()
    // May need to provide the id of the new note here
    const newNote = {
      text: noteText,
      authorID: userID,
      createdAt: timestamp,
    };

    // try {
    //   await setDoc(doc(notesCollection), newNote);

    // } catch (error) {
    //   // Handle errors here
    //   console.error('Error adding new note:', error);
    // }

    // Clear the text input field
    setNoteText('');
  }
}

// const onDeleteNote = async (noteId)=>{
//   await deleteDoc(doc(FIREBASE_DB, "notes", noteId));
//   console.log("La nota fue eliminada exitosamente");
// }

// const onUpdateNote = async (noteId) =>{
//   const noteDocRef = doc(FIREBASE_DB, "notes", noteId);
//   const existingNote = await getDoc(noteDocRef);

//   const updatedNote = {
//     ...existingNote.data(),
//     text: noteText,
//     updatedAt: serverTimestamp(),
//   };

//   await setDoc(noteDocRef, updatedNote);
//     // Clear the text input field after updating the note
//     setNoteText('');
// }

// const functionSignOut = () => {
//   signOut(FIREBASE_AUTH).then(() => {
//     // Sign-out successful.
//     console.log("Sign out successful");
//     setNotes([])
//     navigation.navigate("Login");
//   }).catch((error) => {
//     // An error happened.
//     console.error('Sign-out error:', error);
//   });
// }

const appointments = [
  {date: "Martes 09 de enero de 2024", ID: "186726276"},
  {date: "Miercoles 21 de enero de 2024", ID: "18672sd76"}
]

const renderEntity = ({ item }) => {
  return (
    <View style={styles.appointmentContainer}>
      <Text style={styles.dateText}>
        {item.date}
      </Text>
      <Text style={styles.dateText}>
        {item.ID}
      </Text>
      <Pressable style={styles.buttonUpdate} onPress={()=>onUpdateNote(item.id)}>
        <Text style={styles.buttonText}>VER DETALLES</Text>
      </Pressable>
    </View>
  )
}
  
  return (
    <View style={styles.container}>
    <Text style={styles.textHome}>Hello, How can we help?</Text>
    <View style={styles.listContainer}>
      <FlatList
        data={appointments}
        renderItem={renderEntity}
        keyExtractor={(item) => item.id}
        removeClippedSubviews={true}
      />
    </View>
  </View>
  )
}