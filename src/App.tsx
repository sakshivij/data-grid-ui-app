import React from 'react';
import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import { useGetUsersQuery } from './components/users/usersGridSlice';
import { UserGrid } from './components/users/UserGrid';

function App() {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  return (
    <div className="App">
      <UserGrid data={users ? users : []} />
    </div>
  );
}

export default App;
