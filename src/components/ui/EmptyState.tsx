import type { ReactNode } from 'react';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

interface EmptyStateProps {
  message: string;
  icon?: ReactNode;
}

export default function EmptyState({
  message,
  icon = <MailOutlinedIcon fontSize="large" />,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
      <span className="mb-3 flex items-center justify-center text-4xl">{icon}</span>
      <p className="text-sm">{message}</p>
    </div>
  );
}
