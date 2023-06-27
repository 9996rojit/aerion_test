import { Request, Response } from 'express';
import {
  createExpenseService,
  getAllExpensesService,
  getExpenseDataById,
  updateExpenseService,
} from '@/service';
import expenseSchema from '@/model/exponse.model';
import { Http400Error } from '@/middleware';

const getExpense = async (req: Request, res: Response) => {
  const getExpenses = await getAllExpensesService(expenseSchema);
  res.status(200).json(getExpenses);
};

const createExpense = async (req: Request, res: Response) => {
  console.log(req.body)
  const exponseData = {
    category: req.body.category,
    date: req.body.date,
    quantity: req.body.quantity,
    amount: parseInt(req.body.amount),
    total: req.body.total,
    notes: req.body.note,
  };
  const exponse = await createExpenseService(expenseSchema, exponseData);
  res.status(200).json(exponse);
};

const updateExpense = async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) throw new Http400Error('Please provide id to update expense');
  const exponseData = {
    category: req.body.category,
    date: req.body.date,
    quantity: req.body.quantity,
    amount: req.body.amount,
    total: req.body.total,
    notes: req.body.note,
  };
  const expense = await updateExpenseService(expenseSchema, id, exponseData);
  res.status(200).json(expense);
};

const getExpenseById = async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) throw new Http400Error('Please provide id to update expense');
  const expenseDataByid = await getExpenseDataById(expenseSchema, id)
  res.status(200).json(expenseDataByid)
}

export { getExpense, createExpense, updateExpense, getExpenseById };
