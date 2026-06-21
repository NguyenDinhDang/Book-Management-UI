import { type Book, type WishlistItem } from '../types/books';

export const mockBooks: Book[] = [
  {
    id: '1',
    title: 'Thép đã tôi thế đấy',
    author: 'Nikolai Ostrovsky',
    cover: '../public/assets/t13y.jpg',
    genre: 'Communist Literature',
    price: 120.000,
    isRead: true,
    purchasedAt: '25/9/2025',
    rating: 4.5
  },
  {
    id: '2',
    title: 'Điều kỳ diệu của tiệm tạp hóa Namiya',
    author: 'Keigo Higashino',
    cover: '../public/assets/k17a.jpg',
    genre: 'Fiction',
    price: 130.000,
    isRead: true,
    purchasedAt: '15/10/2025',
    rating: 4.0
  },
  {
    id: '3',
    title: 'Khởi sự triết học',
    author: 'Sharon Kayne',
    cover: '../public/assets/k12c.jpg',
    genre: 'Philosophy',
    price: 150.000,
    isRead: true,
    purchasedAt: '5/11/2025',
    rating: 4.5
  }
];

export const mockWishlist: WishlistItem[] = [
    {
    id: '1',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    cover: 'https://covers.openlibrary.org/b/id/8739161-M.jpg',
    price: 300.000,
    addedAt: '10/12/2025',
  },
  {
    id: '2',
    title: 'The Pragmatic Programmer',
    author: 'David Thomas',
    cover: 'https://covers.openlibrary.org/b/id/8739111-M.jpg',
    price: 300.000,
    addedAt: '10/12/2025',
  },
  {
    id: '3',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://covers.openlibrary.org/b/id/10521270-M.jpg',
    price: 250.000,
    addedAt: '10/12/2025',  
  },
  {
    id: '4',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    cover: 'https://covers.openlibrary.org/b/id/8739151-M.jpg',
    price: 350.000,
    addedAt: '10/12/2025',
  },
  {
    id: 'w1',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    cover: 'https://covers.openlibrary.org/b/id/8739191-M.jpg',
    price: 350000,
    addedAt: '2024-07-01',
  },
  {
    id: 'w2',
    title: 'System Design Interview',
    author: 'Alex Xu',
    cover: 'https://covers.openlibrary.org/b/id/8739201-M.jpg',
    price: 280000,
    addedAt: '2024-07-10',
  },
];
