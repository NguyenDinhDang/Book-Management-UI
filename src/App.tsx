import { useState } from 'react';
import { type Book } from './types/books';
import { mockBooks } from './data/mockData';
import BookList from './components/books/BookList';

export default function App() {
  const [books, setBooks] = useState<Book[]>(mockBooks);

  // Hàm toggle: tìm sách theo id, lật isRead
  const handleToggleRead = (id: string) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Kho sách</h1>
      <BookList books={books} onToggleRead={handleToggleRead} />
    </div>
  );
}