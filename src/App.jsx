import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CustomersList from "./pages/customers/CustomersList";
import CreateCustomer from "./pages/customers/CreateCustomer";
import EditCustomer from "./pages/customers/EditCustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/customers" />} />

        <Route path="/customers" element={<CustomersList />} />
        <Route path="/customers/new" element={<CreateCustomer />} />
        <Route path="/customers/:id/edit" element={<EditCustomer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
