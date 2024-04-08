import {Result} from '../../src/constants/Interfaces';
import firestore from '@react-native-firebase/firestore';

const isDuplicate = (newDocument: Result, documents: Result[]) => {
  return documents.some(doc => {
    doc.description === newDocument.description;
  });
};

const imagesSearch = async (searchValue: string[]) => {
  const results: Result[] = [];
  for (const element of searchValue) {
    try {
      const querySnapshot = await firestore()
        .collection('results')
        .where('searchableDescription', 'array-contains', element.toLowerCase())
        .where('image', '!=', '')
        .get();
      querySnapshot.forEach(documentSnapshot => {
        const data = documentSnapshot.data();

        const newDocument = {
          id: documentSnapshot.id,
          url: data.url,
          title: data.title,
          name: data.name,
          description: data.description,
          image: data.image,
        };

        if (isDuplicate(newDocument, results)) return;

        results.push(newDocument);
      });
    } catch (error) {
      console.error('Error fetching documents: ', error);
    }
  }
  return results;
};

export default imagesSearch;
