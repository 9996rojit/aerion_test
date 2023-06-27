import { Label, Select } from 'flowbite-react';
import { IInputProps } from '../input';

interface IOptions {
  id: number;
  name: string;
}

interface ISelectProps extends IInputProps {
  options: IOptions[];
  register: any;
  errors: any;
}

const Index = ({ id, label, options, register, errors }: ISelectProps) => {
  return (
    <div className="max-w-full" id="select">
      <div className="mb-2 block">
        <Label htmlFor={id} value={`Select your ${label}`} />
      </div>
      <Select
        id={id}
        color={errors[id] ? 'failure' : 'success'}
        {...register(id, { required: true })}
        helperText={
          errors[id] ? (
            <span className="font-normal">{label} is Required</span>
          ) : null
        }
      >
        <option value="">Please select {label}</option>
        {options.map((item: IOptions) => (
          <option key={item.id}>{item.name}</option>
        ))}
      </Select>
    </div>
  );
};

export default Index;
