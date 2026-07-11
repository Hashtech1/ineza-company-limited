import { XCircle } from "lucide-react";
import { Modal } from "./Modal";
import { Button } from "@/components/common/Button";

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export const ErrorModal = ({ isOpen, onClose, title = "Something went wrong", description }: ErrorModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} size="sm">
    <div className="flex flex-col items-center gap-3 py-4 text-center">
      <XCircle className="h-10 w-10 text-red-600" />
      <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
      {description && <p className="text-sm text-ink/60">{description}</p>}
      <Button onClick={onClose} variant="outline" className="mt-2">Close</Button>
    </div>
  </Modal>
);
