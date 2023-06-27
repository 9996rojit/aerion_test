/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from 'react-hook-form';
import { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Datepicker, Input, Select, TextArea } from '../../components';
import { category } from '../../data/dropDown.json';
import { DataContext } from '../../context';

const Index = () => {
  const location = useLocation();
  const { createData, expenseData, getSingleData, updateExpenseData } =
    useContext(DataContext);
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const id = location.search.split('=')[1];
  useEffect(() => {
    if (id) {
      getSingleData(id);
    }
  }, [location.search]);

  // Reseting form data field after data is updated
  useEffect(() => {
    if (!id) {
      resetField('category');
      resetField('date');
      resetField('quantity');
      resetField('amount');
      resetField('note');
      resetField('total');
    }
  }, [location]);

  // Using id for updating data in query and if id is
  // not present need to create new record
  const onSubmit = (data: {
    category: string;
    date: string;
    total: number;
    amount: number;
    quantity: number;
    note?: string;
  }) => {
    if (!id) {
      createData(data);
      navigate('/');
    } else {
      updateExpenseData(id, data);
      navigate('/');
    }
  };

  // checking amount data and quantity data to calculate total and set
  // in form
  const amountData = watch('amount');
  const quantityData = watch('quantity');

  if (amountData && quantityData) {
    setValue('total', quantityData * amountData);
  }

  // Update row data in form
  // Fetch data and update form state to update previous data
  useEffect(() => {
    if (expenseData && id) {
      setValue('category', expenseData.category);
      setValue('date', expenseData.date);
      setValue('quantity', expenseData.quantity);
      setValue('amount', expenseData.amount);
      setValue('total', expenseData.total);
      setValue('note', expenseData.notes);
    }
  }, [setValue, id, expenseData]);

  return (
    <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="block min-w-full min-h-full gap-2 md:flex">
          <div className="flex-1 ">
            <Select
              label="Category"
              id="category"
              options={category}
              register={register}
              errors={errors}
            />

            <Input
              label="Amount"
              id="amount"
              register={register}
              errors={errors}
              type="number"
            />
          </div>
          <div className="flex-1">
            <div>
              <Datepicker
                setSelectedDate={setSelectedDate}
                setValue={setValue}
              />
              <Input
                label="Quantity"
                id="quantity"
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className="flex-1">
            <div>
              <Input
                disabled
                label="Total"
                id="total"
                register={register}
                errors={errors}
                type="number"
                require={false}
              />

              <TextArea register={register} />
              <div className="max-w-full pt-2">
                <input
                  className={`p-2 text-end float-right ${
                    id ? 'bg-green-500' : 'bg-blue-500'
                  } rounded-md text-white z-40 cursor-pointer`}
                  type="submit"
                  value={`${id ? 'Update' : 'Submit'}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Index;
