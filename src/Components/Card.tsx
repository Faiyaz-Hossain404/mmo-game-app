import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`border border-white text-white rounded p-4 transform transition-all duration-300 hover:scale-105 hover:ring-2 hober:ring-white hover:ring-opacity-50 ${className}`}
    >
      {children}
    </div>
  );
}
