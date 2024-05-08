import { FiCreditCard, FiFileText } from 'react-icons/fi';

import { MenuProps } from '../interface';

export const menuLink: MenuProps[] = [
  {
    id: 1,
    url: '/cart',
    title: 'Pedido',
    icon: <FiFileText size={18} color="#FFF" style={{ margin: '0.5rem' }} />,
  },
  {
    id: 1,
    url: '/orders',
    title: 'Encomendas',
    icon: <FiFileText size={18} color="#FFF" style={{ margin: '0.5rem' }} />,
  },
  {
    id: 2,
    url: '/account',
    title: 'Contas',
    icon: <FiCreditCard size={18} color="#FFF" style={{ margin: '0.5rem' }} />,
  },
];
