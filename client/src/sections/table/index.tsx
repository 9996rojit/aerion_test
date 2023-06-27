import { useContext } from 'react';
import { Table } from '../../components';
import { tableData } from '../../data/dropDown.json';
import { DataContext } from '../../context';

const Index = () => {
  // Using context api to get data
  const { data } = useContext(DataContext);
  return (
    <Table
      tableHeader={tableData}
      tableBody={data?.DocumentData}
      totalData={data?.TotalData}
    />
  );
};

export default Index;
