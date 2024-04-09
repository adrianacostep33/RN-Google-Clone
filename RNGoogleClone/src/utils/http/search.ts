import firestore from '@react-native-firebase/firestore';
import {isDuplicate} from '../isDuplicate';
import {Result} from '../../constants/Interfaces';

const search = async (
  searchType: 'default' | 'images' | 'news',
  searchValue: string[],
) => {
  const results: Result[] = [];
  for (const element of searchValue) {
    try {
      let querySnapshot = firestore()
        .collection('results')
        .where(
          'searchableDescription',
          'array-contains',
          element.toLowerCase(),
        );

      if (searchType === 'images') {
        querySnapshot = querySnapshot.where('image', '!=', '');
      } else if (searchType === 'news') {
        querySnapshot = querySnapshot.where('tag', '==', 'news');
      }

      const snapshot = await querySnapshot.get();
      snapshot.forEach(documentSnapshot => {
        const data = documentSnapshot.data();

        const newDocument = {
          id: documentSnapshot.id,
          url: data.url,
          title: data.title,
          name: data.name,
          description: data.description,
          image: data.image,
          ...(searchType === 'news' && {imageContent: data.imageContent}),
        };

        if (!isDuplicate(newDocument, results)) {
          results.push(newDocument);
        }
      });
    } catch (error) {
      console.error('Error fetching documents: ', error);
    }
  }
  return results;
};

export default search;
