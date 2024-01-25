export interface InputListProps {
  label: string;
  disabled?: boolean;
  defaultValue?: string;
  values: ReadonlyArray<number>;
  legend?: Record<string, string>;
  onSelect: (value: string) => void;
}
