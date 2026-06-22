import Badge from './components/ui/Badge';
import Checkbox from './components/ui/Checkbox';
import EmptyState from './components/ui/EmptyState';
import { useState } from 'react';

export default function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="p-8 flex flex-col gap-6">
      <h1 className="text-xl font-bold">Test UI Components</h1>

      {/* Test Badge */}
      <div className="flex gap-2">
        <Badge label="Đã đọc" variant="success" />
        <Badge label="Chưa đọc" variant="warning" />
        <Badge label="Mặc định" variant="default" />
      </div>

      {/* Test Checkbox */}
      <Checkbox
        checked={checked}
        label="Đánh dấu đã đọc"
        onChange={(val) => setChecked(val)}
      />
      <p className="text-sm text-gray-500">Trạng thái: {checked ? 'true' : 'false'}</p>

      {/* Test EmptyState */}
      <EmptyState message="Không có sách nào." icon="📚" />
      <EmptyState message="Dùng icon mặc định" /> {/* không truyền icon */}
    </div>
  );
}