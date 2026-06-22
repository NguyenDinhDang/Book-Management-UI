interface CheckboxProps {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void; // hàm callback, nhận boolean
}

export default function Checkbox({ checked, label, onChange }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)} // gọi callback từ cha
        className="w-4 h-4 accent-indigo-600"
      />
      <span className="text-sm text-gray-600">{label}</span>
    </label>
  );
}