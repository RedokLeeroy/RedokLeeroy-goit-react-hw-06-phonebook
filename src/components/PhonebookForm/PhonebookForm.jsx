import { useState } from 'react';
import { FormSubmit } from './FormSubmit';
import { NameInput } from './NameInput';
import { PhoneInput } from './PhoneInput';
import { useDispatch, useSelector } from 'react-redux';
import { addAction } from 'redux/ItemsActions';
import { addItemSelector } from 'redux/items-selector';

//---------------------------------------------------------------------------------//

export const PhonebookForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(addItemSelector);
  console.log(contacts);

  const handSubmit = event => {
    event.preventDefault();
    const isHere = contacts.some(({ name }) => name === contacts.name);
    if (isHere) {
      alert(`Name already in contacts`);
      return;
    }
    dispatch(addAction(name, phone));
    setName('');
    setPhone('');
  };

  const handlerInput = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  return (
    <form onSubmit={handSubmit}>
      <NameInput value={name} name="name" func={handlerInput}></NameInput>
      <PhoneInput value={phone} name="phone" func={handlerInput}></PhoneInput>
      <FormSubmit title="Add contact"></FormSubmit>
    </form>
  );
};
