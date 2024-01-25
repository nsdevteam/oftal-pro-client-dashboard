export interface InputListProps {
  max?: number;
  min?: number;
  label: string;
  disabled?: boolean;
  defaultValue?: string;
  values: ReadonlyArray<number>;
  legend?: Record<string, string>;
  onSelect: (value: string) => void;
}
