import { IExpense } from '@/types/exponse.type';

const getAllExpensesService = async (model: any): Promise<IExpense> => {
  const expenseData = await model.aggregate([
    [
      {
        '$facet': {
          'DocumentData': [
            {
              '$match': {}
            }
          ],
          'TotalData': [
            {
              '$group': {
                '_id': null,
                'totalAmount': {
                  '$sum': {
                    '$toInt': '$amount'
                  }
                },
                'totalQuantity': {
                  '$sum': {
                    '$toInt': '$quantity'
                  }
                },
                'totalExpense': {
                  '$sum': {
                    '$toInt': '$total'
                  }
                }
              }
            }
          ]
        }
      }
    ]
  ]);
  return expenseData?.[0];
};

const createExpenseService = async (model: any, data: IExpense) => {
  const newExpense = new model(data);
  const createedExpenseData = await newExpense.save();
  return createedExpenseData;
};

const updateExpenseService = async (model: any, id: string, data: IExpense) => {
  const expenseData = await model.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        ...data,
      },
    }
  );
  return expenseData;
};

const getExpenseDataById = async (model: any, id: string) => {
  const data = await model.findById(id)
  return data
}

export { getAllExpensesService, createExpenseService, updateExpenseService, getExpenseDataById };
