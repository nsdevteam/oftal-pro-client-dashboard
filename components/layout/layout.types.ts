import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface LayoutProps {
  pageTitle: string;
  children: ReactNode;
}

export interface SidebarProps {
  isOpenMenu: boolean;
}

export interface HeaderProps {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}
