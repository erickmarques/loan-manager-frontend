import { useState, useEffect } from "react";

function LoansForm({ initialData, onSubmit, loading }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    notes: ""
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        phone: initialData.phone || "",
        notes: initialData.notes || ""
      });
    }
  }, [initialData]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nome</label>
        <input
          className="form-control"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Telefone</label>
        <input
          className="form-control"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Observações</label>
        <textarea
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
