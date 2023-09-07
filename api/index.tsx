import { Links, Submenu, Notification } from '../interface';

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

export const notification: Notification = [
  {
    id: 1,
    title: 'Pedido',
    description:
      'Olá Maria, o seu pedido já está disponível para levantamento.',
    createdAt: 'Terça-feira, 10:20',
    currentDate: 'Feb 12, 2024',
  },
  {
    id: 2,
    title: 'Endereço errado',
    description: 'Olá Maria, o  endereço fornecido não está disponível.',
    createdAt: 'Sexta-feira, 14:55',
    currentDate: 'Nov 29, 2024',
  },
  {
    id: 3,
    title: 'Concluír pagamento',
    description: 'Olá Maria, precisa concluir o pagamento para completar.',
    createdAt: 'Quinta-feira, 19:55',
    currentDate: 'Jan 9, 2024',
  },
  {
    id: 4,
    title: 'Compra suspensa',
    description: 'Olá Maria, infelizmente a sua compra está suspensa.',
    createdAt: 'Sexta-feira, 14:55',
    currentDate: 'Aug 19, 2024',
  },
  {
    id: 5,
    title: 'Compra entregue',
    description: 'Olá Maria, sua compra foi entregue.',
    createdAt: 'Quinta-feira, 17:05',
    currentDate: 'Aug 23, 2024',
  },
  {
    id: 6,
    title: 'Conta suspensa',
    description: 'Olá Maria, infelizmente a sua compra está suspensa.',
    createdAt: 'Segunda-feira, 20:23',
    currentDate: 'janeiro 20, 2022',
  },
  {
    id: 7,
    title: 'Pagamento negado',
    description: 'Olá Maria, verifique o seu pagamento.',
    createdAt: 'Sexta-feira, 22:55',
    currentDate: 'Aug 19, 2024',
  },
  {
    id: 8,
    title: 'Compra imcompleta',
    description: 'Olá Maria, infelizmente a sua compra está suspensa.',
    createdAt: 'Sexta-feira, 19:10',
    currentDate: 'Feveiro 02, 2024',
  },
  {
    id: 4,
    title: 'Adicionaste o novo endereço',
    description: 'Olá Maria, infelizmente a sua compra está suspensa.',
    createdAt: 'Domingo, 4:55',
    currentDate: 'Julho 19, 2024',
  },
];
