import { useEffect, useState } from "react";
import { LoansService } from "../../services/loans.service";
import LoansTable from "../../components/loans/LoansTable";
import LoansSearch from "../../components/loans/LoansSearch";
import { useNavigate } from "react-router-dom";


export default function LoansList() {
  const [loans, setLoans] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadLoans();
  }, []);

  const loadLoans = async () => {
    setLoading(true);
    try {
      const data = await LoansService.list();
      setLoans(data);
    } catch (error) {
      alert("Erro ao carregar empréstimos");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja realmente excluir este cliente?")) return;

    try {
      await LoansService.delete(id);
      loadLoans();

    } catch (error) {
      alert("Erro ao excluir cliente");
    }
  };

  const handleEdit = (customer) => {

    navigate(`/loans/${customer.id}/edit`);
  };

  
  const handleCreate = () => {
      navigate("/loans/new");
  };

  const filteredLoans = loans.filter(
    (l) =>
      l.id.toLowerCase().includes(search.toLowerCase()) ||
      l.phone.includes(search)
  );


  return (
    <div className="container-fluid mt-4 px-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">📋 Empréstimos</h5>
          <button 
            className="btn btn-light btn-sm"
            onClick={handleCreate}
          >
            ➕ Novo Empréstimo
          </button>
        </div>

        <div className="card-body">
          <div className="row mb-3">
            <LoansSearch value={search} onChange={setSearch} />
          </div>

          <LoansTable
            loans={filteredLoans}
            loading={loading}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}
