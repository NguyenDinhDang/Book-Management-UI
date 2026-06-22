import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import SearchOffOutlinedIcon from '@mui/icons-material/SearchOffOutlined';
import Badge from './components/ui/Badge';
import Checkbox from './components/ui/Checkbox';
import EmptyState from './components/ui/EmptyState';

export default function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-6 p-8">
      <h1 className="text-xl font-bold">Test UI Components</h1>

      <div className="flex gap-2">
        <Badge label="Da doc" variant="success" />
        <Badge label="Chua doc" variant="warning" />
        <Badge label="Mac dinh" variant="default" />
      </div>

      <Checkbox
        checked={checked}
        label="Danh dau da doc"
        onChange={(value) => setChecked(value)}
      />
      <p className="text-sm text-gray-500">Trang thai: {checked ? 'true' : 'false'}</p>

      <div className="flex flex-wrap gap-3">
        <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
          <AddIcon fontSize="small" />
          Them sach
        </button>
        <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
          <EditOutlinedIcon fontSize="small" />
          Sua sach
        </button>
        <button className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50">
          <DeleteOutlinedIcon fontSize="small" />
          Xoa sach
        </button>
      </div>

      <EmptyState
        message="Khong co sach nao."
        icon={<LibraryBooksOutlinedIcon sx={{ fontSize: 40 }} />}
      />
      <EmptyState
        message="Khong tim thay ket qua phu hop."
        icon={<SearchOffOutlinedIcon sx={{ fontSize: 40 }} />}
      />
      <EmptyState message="Dung icon mac dinh" />
    </div>
  );
}
