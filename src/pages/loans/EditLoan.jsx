import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoanForm from "../../components/loans/LoanForm";
import { LoansService } from "../../services/loans.service";

function EditLoan() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [Loan, setLoan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    LoansService.findById(id)
      .then(res => setLoan(res))
      .catch(() => alert("Erro ao carregar empréstimo"))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleUpdate(payload) {
    try {
      setLoading(true);
      await LoansService.update(id, payload);
      navigate("/loans");
    } catch {
      alert("Erro ao atualizar cliente");
    } finally {
      setLoading(false);
    }
  }

  if (loading && !Loan) {
    return <div className="text-center mt-5">Carregando...</div>;
  }

  return (
    <div className="container mt-4">
      <h3>Editar Empréstimo</h3>
      <LoanForm
        initialData={Loan}
        onSubmit={handleUpdate}
        loading={loading}
      />
    </div>
  );
}

export default EditLoan;
