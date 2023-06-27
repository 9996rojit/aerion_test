import Section from '../sections/form';
import Table from '../sections/table';
import logo from '../public/logo.jpg';

function Home() {
  return (
    <div className="bg-gray-200 max-h-full">
      <div className="max-w-full">
        <div className="flex justify-center">
          <div>
            <img src={logo} alt="logo" />
            <h1 className="text-xl text-center">Daily Expense Book</h1>
          </div>
        </div>
      </div>
      <div>
        <Section />
      </div>
      <div className="form-wrapper ">
        <Table />
      </div>
    </div>
  );
}

export default Home;
