export type Chat = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  muted?: boolean;
  pinned?: boolean;
  verified?: boolean;
};

export type Story = {
  id: string;
  name: string;
  avatar: string;
  seen: boolean;
  isMe?: boolean;
};

export type Message = {
  id: string;
  text: string;
  time: string;
  fromMe: boolean;
};

export const stories: Story[] = [
  { id: 'me', name: 'Ваша история', avatar: 'https://i.pravatar.cc/150?img=12', seen: false, isMe: true },
  { id: '1', name: 'Аня', avatar: 'https://i.pravatar.cc/150?img=5', seen: false },
  { id: '2', name: 'Максим', avatar: 'https://i.pravatar.cc/150?img=15', seen: false },
  { id: '3', name: 'Лера', avatar: 'https://i.pravatar.cc/150?img=32', seen: true },
  { id: '4', name: 'Игорь', avatar: 'https://i.pravatar.cc/150?img=51', seen: false },
  { id: '5', name: 'Соня', avatar: 'https://i.pravatar.cc/150?img=47', seen: true },
  { id: '6', name: 'Дима', avatar: 'https://i.pravatar.cc/150?img=60', seen: false },
];

export const chats: Chat[] = [
  {
    id: '1',
    name: 'Аня Кравцова',
    avatar: 'https://i.pravatar.cc/150?img=5',
    lastMessage: 'Отправила тебе фотки со вчера 📸',
    time: '12:41',
    unread: 3,
    online: true,
    pinned: true,
  },
  {
    id: '2',
    name: 'Дизайн-команда',
    avatar: 'https://i.pravatar.cc/150?img=68',
    lastMessage: 'Максим: макет готов, гляньте',
    time: '11:58',
    unread: 12,
    online: false,
    pinned: true,
  },
  {
    id: '3',
    name: 'Максим Орлов',
    avatar: 'https://i.pravatar.cc/150?img=15',
    lastMessage: 'Погнали в 19:00?',
    time: '10:20',
    unread: 0,
    online: true,
  },
  {
    id: '4',
    name: 'Лера ✈️',
    avatar: 'https://i.pravatar.cc/150?img=32',
    lastMessage: 'Ты: договорились!',
    time: '09:47',
    unread: 0,
    online: false,
    verified: true,
  },
  {
    id: '5',
    name: 'Игорь Петров',
    avatar: 'https://i.pravatar.cc/150?img=51',
    lastMessage: 'Голосовое сообщение · 0:34',
    time: 'вчера',
    unread: 1,
    online: false,
    muted: true,
  },
  {
    id: '6',
    name: 'Соня Белова',
    avatar: 'https://i.pravatar.cc/150?img=47',
    lastMessage: 'Хаха это точно 😂',
    time: 'вчера',
    unread: 0,
    online: true,
  },
  {
    id: '7',
    name: 'Дима Соколов',
    avatar: 'https://i.pravatar.cc/150?img=60',
    lastMessage: 'Скинул ссылку на трек',
    time: 'вт',
    unread: 0,
    online: false,
  },
  {
    id: '8',
    name: 'Мама',
    avatar: 'https://i.pravatar.cc/150?img=45',
    lastMessage: 'Позвони, когда сможешь ❤️',
    time: 'пн',
    unread: 0,
    online: true,
  },
];

export const messagesByChat: Record<string, Message[]> = {
  '1': [
    { id: 'm1', text: 'Привет! Как добрались?', time: '12:10', fromMe: false },
    { id: 'm2', text: 'Отлично, только приехали 🙌', time: '12:12', fromMe: true },
    { id: 'm3', text: 'Погода вообще огонь там', time: '12:12', fromMe: true },
    { id: 'm4', text: 'Отправила тебе фотки со вчера 📸', time: '12:41', fromMe: false },
  ],
  '2': [
    { id: 'm1', text: 'Максим: макет готов, гляньте', time: '11:58', fromMe: false },
    { id: 'm2', text: 'Класс, завтра обсудим на созвоне', time: '12:01', fromMe: true },
  ],
};

export const defaultMessages: Message[] = [
  { id: 'd1', text: 'Привет! 👋', time: '09:00', fromMe: false },
  { id: 'd2', text: 'Привет, как дела?', time: '09:02', fromMe: true },
];
