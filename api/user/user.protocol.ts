import { IQueryParams, IResponse, TOnSnapshot } from 'burnbase/firestore';

import { IClient } from '../../interface';

export type TGetUser = (docId: string) => Promise<IClient>;

export type TGetUsers = TOnSnapshot<IResponse<ReadonlyArray<IClient>>>;

export type TUpdateUser = (
  docId: string,
  docData: Partial<IClient>
) => Promise<void>;

export type TGetUsersSize = (queryParams?: IQueryParams) => void;
