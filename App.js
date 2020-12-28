import React from 'react';
import Botao from './src/botao';
import CustomSelect from './src/select';

const obj = [
  {
    label: 'abner fonseca',
    value: 'AB',
  },
  {
    label: 'abner fonseca2',
    value: 'AB2',
  },
  {
    label: 'abner fonseca3',
    value: 'AB3',
  },
];

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [selectItem, setSelectItem] = React.useState('');

  console.log(selectItem);
  return (
    <>
      <Botao />
      <CustomSelect
        options={obj}
        value={selectItem.label}
        setValue={setSelectItem}
      />
    </>
  );
};

export default App;
