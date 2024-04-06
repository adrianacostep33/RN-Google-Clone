import {Result} from '../../src/constants/Interfaces';
import firestore from '@react-native-firebase/firestore';

const isDuplicate = (newDocument: Result, documents: Result[]) => {
  return documents.some(doc => {
    doc.description === newDocument.description;
  });
};

const search = async (searchValue: string) => {
  console.log({searchValue});

  const results: Result[] = [];
  for (const element of searchValue) {
    firestore()
      .collection('results')
      .where('searchableDescription', 'array-contains', element.toLowerCase())
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          const data = documentSnapshot.data();

          console.log({data});

          const newDocument = {
            id: documentSnapshot.id,
            url: data.url,
            title: data.title,
            name: data.name,
            description: data.description,
            image: data.image,
            tags: data.tags,
          };

          if (isDuplicate(newDocument, results)) return;

          results.push(newDocument);
        });
      });
  }
  return results;
};

export default search;