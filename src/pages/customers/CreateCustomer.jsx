import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerForm from "../../components/customers/CustomerForm";
import { CustomersService } from "../../services/customers.service";

function CreateCustomer() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleCreate(data) {
    try {
      setLoading(true);
      await CustomersService.create(data);
      navigate("/customers");
    } catch (e) {
      alert("Erro ao criar cliente");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mt-4">
      <h3>Novo Cliente</h3>
      <CustomerForm onSubmit={handleCreate} loading={loading} />
    </div>
  );
}

export default CreateCustomer;
