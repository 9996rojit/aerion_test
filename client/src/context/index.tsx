/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Expense {
  _id?: string;
  category: string;
  date: string;
  total: number;
  amount: number;
  quantity: number;
  note?: string;
}

interface ResponseData {
  DocumentData: Expense[];
  TotalData: {
    _id: undefined;
    TotalAmount: number | undefined;
    TotalQuantity: number | undefined;
    TotalExpense: number | undefined;
  };
}

interface DataContextValue {
  expenseData: Expense | undefined;
  data: Expense[];
  createData: (newData: string) => void;
  getSingleData: (id: string) => void;
  updateExpenseData: (
    id: string,
    data: {
      category: string;
      date: string;
      total: number;
      amount: number;
      quantity: number;
      note?: string;
    }
  ) => void;
}

interface IChildrenProps {
  children: React.ReactNode;
}

export const DataContext = createContext<DataContextValue | null>(null);

export const DataProvider = ({ children }: IChildrenProps) => {
  const [data, setData] = useState<ResponseData>();
  const [expenseData, setExpenseData] = useState<Expense>();

  // Creating service for fetching expense data and pass it to component
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5656/api/v1/');
      const resData: ResponseData = await response.json();
      setData({
        DocumentData: resData.DocumentData,
        TotalData: resData.TotalData[0],
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Error fetching data:', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Creating service for creating new expense data
  const createData = async (newData: string) => {
    try {
      const response = await fetch('http://localhost:5656/api/v1/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      const createdData: Expense = await response.json();
      setData({
        DocumentData: { ...data?.DocumentData, createdData },
        TotalData: { ...data?.TotalData },
      });
      toast.success('Data fetched successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      console.error('Error creating data:', error);
      toast.error('Error creating data:', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  // Getting data by id for updating purpose
  const getSingleData = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5656/api/v1/${id}`);
      const createdData: Expense = await response.json();
      setExpenseData(createdData);
      toast.success('Data fetched successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Error fetching data:', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  // Service for updating expense data
  const updateExpenseData = async (id: string, updateExpenseData: Expense) => {
    try {
      const response = await fetch(`http://localhost:5656/api/v1/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateExpenseData),
      });
      const createdData: Expense = await response.json();
      setData((prevData: ResponseData) => {
        return {
          DocumentData: prevData?.DocumentData?.map((item) =>
            item._id === id ? createdData : item
          ),
          TotalData: prevData?.TotalData,
        };
      });
      toast.success('Data updated successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      console.error('Error upating data:', error);
      toast.error('Error upating data:', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  // Passing service and value through context
  const contextValue: DataContextValue = {
    data,
    expenseData,
    createData,
    getSingleData,
    updateExpenseData,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
