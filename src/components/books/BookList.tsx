// src/components/books/BookList.tsx

import { type Book } from '../../types/books';
import BookCard from './BookCard';
import EmptyState from '../ui/EmptyState';

interface BookListProps {
  books: Book[];                       // mảng các Book
  onToggleRead: (id: string) => void;  // truyền thẳng xuống BookCard
}

export default function BookList({ books, onToggleRead }: BookListProps) {
  // Nếu rỗng → hiện EmptyState thay vì list trống
  if (books.length === 0) {
    return <EmptyState message="Không có sách nào." icon="📚" />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <BookCard
          key={book.id}           // BẮT BUỘC khi dùng .map()
          book={book}
          onToggleRead={onToggleRead}
        />
      ))}
    </div>
  );
}