import { CheckCircle2 } from "lucide-react";
import { Modal } from "./Modal";
import { Button } from "@/components/common/Button";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export const SuccessModal = ({ isOpen, onClose, title = "Success", description }: SuccessModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} size="sm">
    <div className="flex flex-col items-center gap-3 py-4 text-center">
      <CheckCircle2 className="h-10 w-10 text-moss-700" />
      <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
      {description && <p className="text-sm text-ink/60">{description}</p>}
      <Button onClick={onClose} className="mt-2">Done</Button>
    </div>
  </Modal>
);
