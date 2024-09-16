import React from 'react'
import { logout } from '../store/authLoginReducer';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user}!</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Dashboard