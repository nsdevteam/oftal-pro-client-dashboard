import { Links, Submenu } from '../interface';

import { FiFileText, FiCreditCard, FiSettings } from 'react-icons/fi';

export const menuLink: Links = [
  {
    id: 1,
    url: '/request',
    title: 'Pedido',
    icon: <FiFileText size={18} color="#FFF" style={{ margin: '0.5rem' }} />,
    submenu: 'Novo Pedido',
  },
  {
    id: 2,
    url: '/account',
    title: 'Contas',
    icon: <FiCreditCard size={18} color="#FFF" style={{ margin: '0.5rem' }} />,
    submenu: 'Dados do usuário',
  },
  {
    id: 3,
    url: '/setting',
    title: 'Configurações',
    icon: <FiSettings size={18} color="#FFF" style={{ margin: '0.5rem' }} />,
  },
];
