export interface DropdownProps {
  label?: string;
  disabled?: boolean;
  values: ReadonlyArray<string>;
  defaultValue?: string | number;
  legend?: Record<string, string>;
  onSelect: (value: string) => void;
}
