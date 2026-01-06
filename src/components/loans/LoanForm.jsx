import { useState, useEffect } from "react";

function LoansForm({ initialData, onSubmit, loading }) {
  const [form, setForm] = useState({
    loanDate: "",
    amount: "",
    percentage: "",
    paymentDate: "",
    totalAmountToPay: "",
    status: "",
    customerName: "",
    notes: ""
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        loanDate: initialData.loanDate || "",
        amount: initialData.amount || "",
        percentage: initialData.percentage || "",
        paymentDate: initialData.paymentDate || "",
        totalAmountToPay: initialData.totalAmountToPay || "",
        status: initialData.status || "",
        customerName: initialData.customerName || "",
        notes: initialData.notes || ""
      });
    }
  }, [initialData]);

  function handleChange(e) {
    setForm({ ...form, [e.target.loanDate]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit}>

      <div className="mb-3">
        <label className="form-label">Cliente</label>
        <input
          disabled
          className="form-control"
          name="customerName"
          rows="3"
          value={form.customerName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Data de Empréstimo</label>
        <input
          type="date"
          className="form-control"
          name="loanDate"
          value={form.loanDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Valor Emprestado</label>
        <input
          className="form-control"
          name="amount"
          value={form.amount}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Porcentagem</label>
        <input
          className="form-control"
          name="percentage"
          rows="3"
          value={form.percentage}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Data de Pagamento</label>
        <input 
          type="date"
          className="form-control"
          name="paymentDate"
          rows="3"
          value={form.paymentDate}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Valor a Pagar</label>
        <input
          className="form-control"
          name="totalAmountToPay"
          rows="3"
          value={form.totalAmountToPay}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Status</label>
        <input
          className="form-control"
          name="status"
          rows="3"
          value={form.status}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Observação</label>
        <input
          className="form-control"
          name="notes"
          rows="3"
          value={form.notes}
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-primary" disabled={loading}>
        {loading ? "Salvando..." : "Salvar"}
      </button>
    </form>
  );
}

export default LoansForm;
