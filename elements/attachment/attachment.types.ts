export interface AttachmentProps {
  label: string;
  files?: FileList;
  disabled: boolean;
  onChange: (file: FileList) => void;
}
