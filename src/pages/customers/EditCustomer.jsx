import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerForm from "../../components/customers/CustomerForm";
import { CustomersService } from "../../services/customers.service";

function EditCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    CustomersService.findById(id)
      .then(res => setCustomer(res))
      .catch(() => alert("Erro ao carregar clienteee"))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleUpdate(payload) {
    try {
      setLoading(true);
      await CustomersService.update(id, payload);
      navigate("/customers");
    } catch {
      alert("Erro ao atualizar cliente");
    } finally {
      setLoading(false);
    }
  }

  if (loading && !customer) {
    return <div className="text-center mt-5">Carregando...</div>;
  }

  return (
    <div className="container mt-4">
      <h3>Editar Cliente</h3>
      <CustomerForm
        initialData={customer}
        onSubmit={handleUpdate}
        loading={loading}
      />
    </div>
  );
}

export default EditCustomer;
