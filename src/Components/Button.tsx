interface IButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ label, onClick, className }: IButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
}
