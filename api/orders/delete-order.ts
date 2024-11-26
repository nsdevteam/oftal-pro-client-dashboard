import { deleteDoc,doc } from 'firebase/firestore';
import { db } from '../init';


const deleteOrder = async (docId: string): Promise<void> =>{
  try{
    const documentRef = doc(db,'orders',docId);
    await deleteDoc(documentRef);
    console.log(`Document with ID ${docId} deleted successfully.`);    
  }catch(error){
    console.error("Error deleting document:", error);
    throw new Error("Failed to delete document.");
  }
}   


export default deleteOrder;
