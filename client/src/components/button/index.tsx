interface IButtonProps {
  text?: string;
  type?: 'submit' | 'button' | 'reset';
  isOutlined?: boolean;
  btnColor?: string;
}

const Index = ({
  text = 'Submit',
  type = 'submit',
  isOutlined = false,
  btnColor = 'primary',
}: IButtonProps) => {
  return (
    <button className={`btn btn-${btnColor}`} type={type}>
      {text}
    </button>
  );
};

export default Index;
