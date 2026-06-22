// 1. Định nghĩa Props: component này nhận những gì?
interface BadgeProps {
  label: string;
  variant: 'success' | 'warning' | 'default';
}

// 2. Component nhận props, destructure ra dùng
export default function Badge({ label, variant }: BadgeProps) {
  // Map variant → class Tailwind tương ứng
  const colorMap = {
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    default: 'bg-gray-100 text-gray-600',
  };

  return (
    <span className={`text-xs font-medium px-2 py-1 rounded-full ${colorMap[variant]}`}>
      {label}
    </span>
  );
}