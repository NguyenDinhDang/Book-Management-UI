import { Book, WishlistItem } from '../types/books';

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
    cover: '../public/assets/sapiens.jpg',
    genre: 'Philosophy',
    price: 150.000,
    isRead: true,
    purchasedAt: '5/11/2025',
    rating: 4.5
  }
];