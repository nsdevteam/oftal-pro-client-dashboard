import { DropdownProps } from '../../elements/dropdown/dropdown.types';
import { IClient } from '../../interface';

export interface DropdownFieldProps
  extends Pick<
    DropdownProps,
    'label' | 'values' | 'legend' | 'disabled' | 'defaultValue'
  > {
  name: keyof IClient;
}
