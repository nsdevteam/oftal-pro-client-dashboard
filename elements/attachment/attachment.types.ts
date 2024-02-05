export interface AttachmentProps {
  label: string;
  files?: FileList;
  onChange: (file: FileList) => void;
}
