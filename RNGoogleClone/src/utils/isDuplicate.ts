import {Result} from '../constants/Interfaces';

export const isDuplicate = (newDocument: Result, documents: Result[]) => {
  return documents.some(doc => {
    doc.description === newDocument.description;
  });
};
