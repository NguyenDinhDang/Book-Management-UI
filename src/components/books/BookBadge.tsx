interface BookBadgeProps {
  isRead: boolean;
}

export default function BookBadge({ isRead }: BookBadgeProps) {
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
        isRead
          ? 'bg-green-100 text-green-700'
          : 'bg-orange-100 text-orange-600'
      }`}
    >
      {isRead ? '✓ Đã đọc' : '○ Chưa đọc'}
    </span>
  );
}