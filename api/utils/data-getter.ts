import { onSnapshot, query } from 'firebase/firestore';

import { getCollection, mapQueryParams } from '.';
import { IQueryParams } from './utils.protocol';

const dataGetter =
  <T>(collectionName: string) =>
  (queryParams?: IQueryParams): Promise<ReadonlyArray<T>> =>
    new Promise((resolve, rejected) =>
      onSnapshot(
        !queryParams
          ? getCollection(collectionName)
          : query(
              getCollection(collectionName),
              ...mapQueryParams(queryParams)
            ),
        (snapshot) => {
          const data = snapshot.docs.map((doc) => doc.data() as T);
          resolve(data);
        },
        (error) => rejected(error)
      )
    );

export default dataGetter;
