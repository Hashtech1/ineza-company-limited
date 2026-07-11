import { SearchBar } from "@/components/forms/SearchBar";
import { Select } from "@/components/common/Select";
import { QueryParams } from "@/types/common.types";

const DEPARTMENTS = [
  { label: "All departments", value: "" },
  { label: "Operations", value: "operations" },
  { label: "Fleet & Logistics", value: "fleet" },
  { label: "Human Resources", value: "hr" },
  { label: "Training", value: "training" },
];

interface JobFilterBarProps {
  params: QueryParams;
  onChange: (params: QueryParams) => void;
}

export const JobFilterBar = ({ params, onChange }: JobFilterBarProps) => (
  <div className="flex flex-col gap-3 sm:flex-row">
    <SearchBar
      placeholder="Search open roles…"
      defaultValue={params.search as string}
      onChange={(e) => onChange({ ...params, search: e.target.value })}
      className="flex-1"
    />
    <Select
      options={DEPARTMENTS}
      className="sm:w-56"
      onChange={(e) => onChange({ ...params, department: e.target.value })}
    />
  </div>
);
