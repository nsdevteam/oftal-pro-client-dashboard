import { Links, Submenu, Notification, Refraction } from '../interface';

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

export const address: Address = [
  {
    id: 1,
    province: 'Luanda',
    city: 'Futungo de Belas',
    street: 'Rua do Pantanal',
    apt: 'Casa S/N',
  },
  {
    id: 2,
    province: 'Huambo',
    city: 'Centralidade do Lossambo',
    street: 'Rua do 24',
    apt: 'Edificio PD3, apart 135',
  },
  {
    id: 3,
    province: 'Luanda',
    city: 'Vila Alice',
    street: 'Rua do Queirós Galvão',
    apt: 'Casa 12',
  },
  {
    id: 4,
    province: 'Cabinda',
    city: 'Mbanza Congo',
    street: 'Rua 4 de Abril ',
    apt: 'Casa 345',
  },
];

export const indiceOfRefraction: Refraction = [
  {
    id: 1,
    value: '1.5',
  },
  {
    id: 2,
    value: '1.5 lenticular +',
  },
  {
    id: 3,
    value: '1,56',
  },
  {
    id: 4,
    value: '1,56 UV420 Bluecut',
  },
  {
    id: 5,
    value: '1,56 BI-Concavo',
  },
  {
    id: 6,
    value: '1,56 UV420 Bluecut',
  },
  {
    id: 7,
    value: '1,59 Policabonato',
  },
  {
    id: 8,
    value: '1.6',
  },
  {
    id: 10,
    value: '1,6 UV420 Bluecut',
  },
  {
    id: 11,
    value: '1.67',
  },
  {
    id: 12,
    value: '1,67 UV420 Bluecut',
  },
  ,
  {
    id: 13,
    value: '1,74',
  },
  {
    id: 14,
    value: '1,74 UV420 Bluecut',
  },
];

export const geometry: Refraction = [
  {
    id: 1,
    value: 'Unifocal Fabrico',
  },
  {
    id: 2,
    value: 'Anti-fadiga BOOST',
  },
  {
    id: 3,
    value: 'Progressiva free-form DYNAMIC',
  },
  {
    id: 4,
    value: 'Progressiva free-form EXTENDED',
  },
  {
    id: 5,
    value: 'Bifocal free-form INVISIBLE',
  },
  {
    id: 6,
    value: 'Bifocal',
  },
];
