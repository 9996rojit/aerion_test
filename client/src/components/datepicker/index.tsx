/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Label } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
// @ts-ignore
import Datepicker from 'tailwind-datepicker-react';

interface IDatePickerProps {
  setSelectedDate: any;
  setValue: any;
}

const Index = ({ setSelectedDate, setValue }: IDatePickerProps) => {
  const options = {
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date('2030-01-01'),
    minDate: new Date('1950-01-01'),
    defaultDate: new Date(),
    language: 'en',
  };
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setValue('date', format(new Date(), 'yyyy-MM-dd'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = (selectedDate: Date) => {
    console.log(
      '🚀🚀🚀 ~ file: index.tsx:30 ~ handleChange ~ selectedDate:',
      format(selectedDate, 'yyyy-MM-dd')
    );
    setSelectedDate(selectedDate);
    setValue('date', format(selectedDate, 'yyyy-MM-dd'));
  };

  const handleClose = (state: boolean) => {
    setShow(state);
  };
  return (
    <div className="max-w-full" id="select">
      <div className="mb-2 block">
        <Label htmlFor="date" value="Select your date" />
      </div>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
};

export default Index;
