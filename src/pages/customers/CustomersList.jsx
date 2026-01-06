import { useEffect, useState } from "react";
import { CustomersService } from "../../services/customers.service";
import CustomersTable from "../../components/customers/CustomersTable";
import CustomersSearch from "../../components/customers/CustomersSearch";
import { useNavigate } from "react-router-dom";


export default function CustomersList() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    setLoading(true);
    try {
      const data = await CustomersService.list();
      setCustomers(data);
    } catch (error) {
      alert("Erro ao carregar clientes");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja realmente excluir este cliente?")) return;

    try {
      await CustomersService.delete(id);
      loadCustomers();

    } catch (error) {
      alert("Erro ao excluir cliente");
    }
  };

  const handleEdit = (customer) => {

    navigate(`/customers/${customer.id}/edit`);
  };

  
  const handleCreate = () => {
      navigate("/customers/new");
  };

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );


  return (
    <div className="container-fluid mt-4 px-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">📋 Clientes</h5>
          <button 
            className="btn btn-light btn-sm"
            onClick={handleCreate}
          >
            ➕ Novo Cliente
          </button>
        </div>

        <div className="card-body">
          <div className="row mb-3">
            <CustomersSearch value={search} onChange={setSearch} />
          </div>

          <CustomersTable
            customers={filteredCustomers}
            loading={loading}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}
