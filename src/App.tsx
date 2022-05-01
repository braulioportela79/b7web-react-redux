import { useDispatch } from 'react-redux';
import { setName, setAge } from './redux/reducers/userReducer';

import { useAppSelector } from './redux/hooks/useAppSelector';
import React from 'react';

function App() {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);

  const changeName = (newName: string) => dispatch(setName(newName));
  const changeAge = (newAge: number) => dispatch(setAge(newAge));

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value);
  };

  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeAge(parseInt(e.target.value));
  };

  return (
    <div>
      My name is: {user.name} and I am {user.age} years old. <br />
      Theme: ...
      <br />
      <input type='text' value={user.name} onChange={handleNameInput} />
      <input type='text' value={user.age} onChange={handleAgeInput} />
      <hr />
      <button>Switch Theme</button>
    </div>
  );
}

export default App;
