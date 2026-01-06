export default function LoansTable({
  loans,
  loading,
  onDelete,
  onEdit,
}) {
  if (loading) {
    return (
      <div className="text-center py-4">
        Carregando empréstimos...
      </div>
    );
  }

  if (!loans.length) {
    return (
      <div className="text-center py-4">
        Nenhum empréstimo encontrado
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th>ID</th>
            <th>Criado em</th>
            <th style={{ width: "15%" }} className="text-center">
              Ações
            </th>
          </tr>
        </thead>

        <tbody>
          {loans.map((loan, index) => (
            <tr key={loan.id}>
              <td>{index + 1}</td>
              <td>
                {new Date(loan.createdAt).toLocaleDateString("pt-BR")}
              </td>
              <td className="text-center">
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(loan)}
                >
                  ✏️ Editar
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(loan.id)}
                >
                  🗑️ Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
