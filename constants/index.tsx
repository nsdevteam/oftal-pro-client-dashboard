import { FiCreditCard, FiFileText } from 'react-icons/fi';

import { MenuProps } from '../interface';

export const MENU_ITEMS: MenuProps[] = [
  {
    url: '/cart',
    title: 'Pedido',
    icon: <FiFileText size={18} color="#FFF" style={{ margin: '0.5rem' }} />,
  },
  {
    url: '/orders',
    title: 'Encomendas',
    icon: <FiFileText size={18} color="#FFF" style={{ margin: '0.5rem' }} />,
  },
  {
    url: '/account',
    title: 'Contas',
    icon: <FiCreditCard size={18} color="#FFF" style={{ margin: '0.5rem' }} />,
  },
];
