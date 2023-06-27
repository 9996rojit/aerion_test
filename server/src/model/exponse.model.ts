import { Schema, model } from 'mongoose';
import { IExpense } from '@/types/exponse.type';

const expenseSchema = new Schema({
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  date: {
    type: String,
    required: [true, 'Date is required'],
  },
  quantity: {
    type: String,
    required: [true, 'Quantity is required'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
  },
  total: {
    type: Number,
    required: [true, 'Total is required'],
  },
  notes: {
    type: String,
  },
});

export default model<IExpense>('expense', expenseSchema);
