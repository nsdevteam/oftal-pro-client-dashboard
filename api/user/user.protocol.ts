import { IQueryParams, IResponse, TOnSnapshot } from 'burnbase/firestore';
import { UpdateData } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';

import { IClient } from '../../interface';

export type TGetUser = (docId: string) => Promise<IClient>;

export type TGetUsers = TOnSnapshot<IResponse<ReadonlyArray<IClient>>>;

export type TUpdateUser = (
  docId: string,
  docData: UpdateData<IClient>
) => Promise<void>;

export type TGetUsersSize = (
  setter: Dispatch<SetStateAction<number>>,
  queryParams?: IQueryParams
) => void;
