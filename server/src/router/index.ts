import express, { Router } from 'express';
import { tryCatchWrapper } from '@/middleware';
import { getExpense, createExpense, updateExpense, getExpenseById } from '@/controller';

export function routerHandler(): Router {
  const router = express.Router();
  router.get('/', tryCatchWrapper(getExpense));
  router.get('/:id', tryCatchWrapper(getExpenseById));
  router.post('/', tryCatchWrapper(createExpense));
  router.put('/:id', tryCatchWrapper(updateExpense));

  return router;
}
