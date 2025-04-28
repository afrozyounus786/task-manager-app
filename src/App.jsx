import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser');

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
     setUser(userData.role);
     setLoggedInUserData(userData.data);
    }
  },[])
  const userData = (user, password) => {
    if (user === 'admin@gmail.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const employee = authData.employees.find((e) => user === e.email && password === e.password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee }));
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      {!user ? (
        <Login userData={userData} />
      ) : user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
