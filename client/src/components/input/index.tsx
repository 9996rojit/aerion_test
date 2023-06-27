import { Label, TextInput } from 'flowbite-react';

export interface IInputProps {
  label: string;
  id: string;
  errors?: any;
  register: any;
  type?: string;
  disabled?: boolean;
  require?: boolean;
}

const Index = ({
  label,
  id,
  errors,
  register,
  type = 'text',
  disabled = false,
  require = true,
}: IInputProps) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label
          color={errors[id] ? 'failure' : 'success'}
          htmlFor={id}
          value={label}
        />
      </div>
      <TextInput
        type={type}
        color={errors[id] ? 'failure' : 'success'}
        disabled={disabled}
        helperText={
          errors[id] ? (
            <span className="font-normal">{label} is Required</span>
          ) : null
        }
        {...register(id, { required: require })}
        id={id}
        placeholder={`Please enter ${label}`}
      />
    </div>
  );
};

export default Index;
