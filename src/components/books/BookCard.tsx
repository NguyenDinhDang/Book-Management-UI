import { type Book } from '../../types/books';
import BookBadge from './BookBadge';
import Checkbox from '../ui/Checkbox';

interface BookCardProps {
  book: Book;                        // toàn bộ object Book
  onToggleRead: (id: string) => void; // callback: báo lên cha id nào được toggle
}

export default function BookCard({ book, onToggleRead }: BookCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-4 hover:shadow-md transition-shadow">

      {/* Ảnh bìa */}
      <img
        src={book.cover}
        alt={book.title}
        className="w-16 h-24 object-cover rounded-md shrink-0 bg-gray-100"
        onError={(e) => {
          // Fallback nếu ảnh lỗi
          (e.target as HTMLImageElement).src = 'https://placehold.co/64x96?text=📚';
        }}
      />

      {/* Nội dung */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <h3 className="font-semibold text-gray-800 truncate">{book.title}</h3>
          <p className="text-sm text-gray-500">{book.author}</p>
          <p className="text-xs text-gray-400 mt-1">{book.genre}</p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <BookBadge isRead={book.isRead} />
          <Checkbox
            checked={book.isRead}
            label="Đã đọc"
            onChange={() => onToggleRead(book.id)} // truyền id lên cha
          />
        </div>
      </div>

    </div>
  );
}