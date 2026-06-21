export interface Book {
  id: string;
  title: string;        // Tên sách
  author: string;       // Tác giả
  cover: string;        // URL ảnh bìa
  genre: string;        // Thể loại sách, ví dụ: "Fiction", "Non-fiction", "Science Fiction", "Fantasy", "Biography", "History", "Self-help", "Children's"
  price: number;        // Giá sách, ví dụ: 19.99
  isRead: boolean;
  purchasedAt: string;  // ISO string: "2024-01-15"
  rating?: number;      // Dấu ? = optional, có thể không có
}

export interface WishlistItem {
  id: string;
  title: string;
  author: string;
  cover: string;
  price?: number;
  addedAt: string;
}

// Union type: chỉ cho phép đúng 3 giá trị này
export type ReadFilter = 'all' | 'read' | 'unread';