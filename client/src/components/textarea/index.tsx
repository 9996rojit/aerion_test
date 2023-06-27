import { Label, Textarea } from 'flowbite-react';

interface ITextareaProps {
  label?: string;
  id?: string;
  register: any;
}
const Index = ({ label = 'Note', id = 'note', register }: ITextareaProps) => {
  return (
    <div className="max-w-full" id="textarea">
      <div className="mb-2 block">
        <Label htmlFor={id} value={`Your ${label}`} />
      </div>
      <Textarea
        {...register(id)}
        color="success"
        id={id}
        placeholder={`Leave a ${label}...`}
        rows={1}
      />
    </div>
  );
};

export default Index;
