import React from 'react'
import Link from './Link'
import "./App.css";
import { Outlet } from 'react-router-dom';
export default function Main() {
  return (
    <>
    <Link/>
    <Outlet/>
    </>
  )
}
