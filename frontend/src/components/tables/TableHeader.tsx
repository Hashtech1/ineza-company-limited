import { ReactNode } from "react";

interface TableHeaderProps {
  columns: string[];
  actionsColumn?: ReactNode;
}

/**
 * Standalone header row, useful when building a table body manually
 * instead of via <DataTable />.
 */
export const TableHeader = ({ columns, actionsColumn }: TableHeaderProps) => (
  <thead className="border-b border-ink/10 bg-moss-50/60">
    <tr>
      {columns.map((col) => (
        <th key={col} className="whitespace-nowrap px-4 py-3 text-left font-medium text-ink/60">
          {col}
        </th>
      ))}
      {actionsColumn && <th className="px-4 py-3" />}
    </tr>
  </thead>
);
