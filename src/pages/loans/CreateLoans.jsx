import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoanForm from "../../components/loans/LoanForm";
import { LoansService } from "../../services/loans.service";

function CreateLoan() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleCreate(data) {
    try {
      setLoading(true);
      await LoansService.create(data);
      navigate("/loans");
    } catch (e) {
      alert("Erro ao criar cliente");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mt-4">
      <h3>Novo Cliente</h3>
      <LoanForm onSubmit={handleCreate} loading={loading} />
    </div>
  );
}

export default CreateLoan;
