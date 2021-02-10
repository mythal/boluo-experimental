import { ClassNameProps } from '../common';
import TextField from '@material-ui/core/TextField';

interface Props extends ClassNameProps {}

export function InputsPage({ className }: Props) {
  return (
    <div className={className}>
      <TextField id="outlined-basic" label="Outlined" />
    </div>
  );
}
