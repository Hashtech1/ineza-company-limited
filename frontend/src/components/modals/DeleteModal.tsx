import { ConfirmDialog } from "./ConfirmDialog";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName?: string;
  isLoading?: boolean;
}

export const DeleteModal = ({ isOpen, onClose, onConfirm, itemName, isLoading }: DeleteModalProps) => (
  <ConfirmDialog
    isOpen={isOpen}
    onClose={onClose}
    onConfirm={onConfirm}
    title={`Delete ${itemName ?? "this item"}?`}
    description="This action can't be undone."
    confirmLabel="Delete"
    isLoading={isLoading}
    danger
  />
);
