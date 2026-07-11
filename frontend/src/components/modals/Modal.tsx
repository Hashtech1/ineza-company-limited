import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

const SIZE = { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-2xl" };

export const Modal = ({ isOpen, onClose, title, children, size = "md" }: ModalProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className={`relative z-10 w-full ${SIZE[size]} rounded-xl2 bg-bone p-6 shadow-card`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mb-4 flex items-center justify-between">
          {title && <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>}
          <button onClick={onClose} aria-label="Close" className="rounded-full p-1 hover:bg-ink/5">
            <X className="h-5 w-5 text-ink/60" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};
