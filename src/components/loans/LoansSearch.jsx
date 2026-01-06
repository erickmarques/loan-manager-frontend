export default function LoansSearch({ value, onChange }) {
  return (
    <div className="col-md-4">
      <input
        type="text"
        className="form-control"
        placeholder="Pesquisar por nome ou telefone..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
