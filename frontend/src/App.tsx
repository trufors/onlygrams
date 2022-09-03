import { Route, Routes } from "react-router-dom"
import React from "react"
import Layout from "./layout"
import MainPage from "./pages/MainPage"
import PromotePage from "./pages/PromotePage"
import OffersPage from "./pages/OffersPage"
import PaymentPage from "./pages/PaymentPage"
import ProfiPage from "./pages/ProfiPage"
import TasksForm from "./pages/ProfiPage/components/TasksForm"
import ThanksForm from "./pages/ProfiPage/components/ThanksForm"

const App: React.FC = () => {
  // {/* <img src="api/file/1662217996374heic1806b_1.jpg" /> */}

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/promote" element={<PromotePage />} />
        <Route path="/tasks" element={<ProfiPage />} />
        <Route path="/create" element={<TasksForm />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/thanks" element={<ThanksForm />} />
      </Route>
    </Routes>
  )
}

export default App
