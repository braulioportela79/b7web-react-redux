import { useAppSelector } from './redux/hooks/useAppSelector';
function App() {
  const user = useAppSelector((state) => state.user);

  return (
    <div>
      My name is: {user.name} and I am {user.age} years old. <br />
      Theme: ...
      <br />
      <input type='text' value={user.name} />
      <hr />
      <button>Switch Theme</button>
    </div>
  );
}

export default App;
