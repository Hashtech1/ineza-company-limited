import { useRef, useState } from "react";
import { UploadCloud, FileText, X } from "lucide-react";
import { ProgressBar } from "@/components/feedback/ProgressBar";

interface FileUploadFieldProps {
  onFileSelect: (file: File | null) => void;
  accept?: string;
  progress?: number;
}

export const FileUploadField = ({ onFileSelect, accept = ".pdf,.doc,.docx", progress }: FileUploadFieldProps) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFileName(file?.name ?? null);
    onFileSelect(file);
  };

  const clear = () => {
    setFileName(null);
    onFileSelect(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div>
      <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed border-ink/15 px-6 py-8 text-center hover:border-moss-500">
        <input ref={inputRef} type="file" accept={accept} className="hidden" onChange={handleChange} />
        {fileName ? (
          <div className="flex items-center gap-2 text-sm text-ink/80">
            <FileText className="h-5 w-5 text-moss-700" />
            {fileName}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                clear();
              }}
            >
              <X className="h-4 w-4 text-ink/40 hover:text-red-600" />
            </button>
          </div>
        ) : (
          <>
            <UploadCloud className="h-6 w-6 text-ink/40" />
            <span className="text-sm text-ink/60">Click to upload or drag a file here</span>
            <span className="text-xs text-ink/40">PDF, DOC up to 5MB</span>
          </>
        )}
      </label>
      {progress !== undefined && progress > 0 && progress < 100 && (
        <div className="mt-2"><ProgressBar value={progress} /></div>
      )}
    </div>
  );
};
