export interface DropdownProps {
  label: string;
  disabled?: boolean;
  defaultValue?: string;
  values: ReadonlyArray<string>;
  legend?: Record<string, string>;
  onSelect: (value: string) => void;
}
