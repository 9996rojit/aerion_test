import { Table } from 'flowbite-react';

import { Link, createSearchParams } from 'react-router-dom';

interface ITableProps {
  tableHeader: string[];
  tableBody: any;
  totalData: any;
}

export default function StripedRows({
  tableHeader,
  tableBody,
  totalData,
}: ITableProps) {
  return (
    <Table striped className="min-w-full divide-y">
      <Table.Head>
        <Table.HeadCell>S.N.</Table.HeadCell>
        {tableHeader.map((item: string) => (
          <Table.HeadCell key={item}>{item}</Table.HeadCell>
        ))}
        <Table.HeadCell>
          <span className="sr-only">Action</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {tableBody?.map((tableItem: any, index: number) => (
          <Table.Row
            key={tableItem.category + index}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell>{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {tableItem.category}
            </Table.Cell>
            <Table.Cell>{tableItem.date}</Table.Cell>
            <Table.Cell className="none md:block">{tableItem.notes}</Table.Cell>
            <Table.Cell>{tableItem.quantity}</Table.Cell>
            <Table.Cell>{tableItem.amount}</Table.Cell>
            <Table.Cell>{tableItem.total}</Table.Cell>
            <Table.Cell>
              <Link
                to={{
                  pathname: '/',
                  search: `?${createSearchParams({
                    // eslint-disable-next-line no-underscore-dangle
                    id: `${tableItem._id}`,
                  })}`,
                }}
              >
                <button
                  type="button"
                  className="p-2 bg-lime-500 text-white rounded-md hover:bg-lime-300 hover:text-black hover:ease-in-out delay-120"
                >
                  Edit
                </button>
              </Link>
            </Table.Cell>
          </Table.Row>
        ))}
        <Table.Row className="bg-white dark:border-gray-700 font-semibold dark:bg-gray-800">
          <Table.Cell />
          <Table.Cell />
          <Table.Cell />
          <Table.Cell> Total Expense </Table.Cell>
          <Table.Cell>{totalData?.totalQuantity}</Table.Cell>
          <Table.Cell>{totalData?.totalAmount}</Table.Cell>
          <Table.Cell>{totalData?.totalExpense}</Table.Cell>
          <Table.Cell />
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
