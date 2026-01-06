import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CustomersList from "./pages/customers/CustomersList";
import CreateCustomer from "./pages/customers/CreateCustomer";
import EditCustomer from "./pages/customers/EditCustomer";

import LoansList from "./pages/loans/LoansList";
import CreateLoan from "./pages/loans/CreateLoan";
import EditLoan from "./pages/loans/EditLoan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/customers" />} />

        <Route path="/customers" element={<CustomersList />} />
        <Route path="/customers/new" element={<CreateCustomer />} />
        <Route path="/customers/:id/edit" element={<EditCustomer />} />

        <Route path="/loans" element={<LoansList />} />
        <Route path="/loans/new" element={<CreateLoan />} />
        <Route path="/loans/:id/edit" element={<EditLoan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
