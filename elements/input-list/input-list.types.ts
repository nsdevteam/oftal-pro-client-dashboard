export interface InputListProps {
  label: string;
  disabled?: boolean;
  defaultValue?: string;
  onSelect: (value: string) => void;
}
