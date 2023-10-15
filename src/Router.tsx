import { Routes, Route, Navigate } from 'react-router-dom'
import { Checkout } from './pages/Home/Checkout'
import { Success } from './pages/Home/Success'
import { Home } from './pages/Home/Home'
import DefaultLayout from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path='/' element={<Home />}/>
        <Route index element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<Success />} />       
      </Route>
    </Routes>
  )
}
