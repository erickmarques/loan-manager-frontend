export default function CustomersTable({
  customers,
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

  if (!customers.length) {
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
            <th>Nome</th>
            <th>Empréstimos Em Aberto</th>
            <th>Empréstimos Finalizados</th>
            <th>Fone</th>
            <th>Obs</th>
            <th>Criado em</th>
            <th style={{ width: "15%" }} className="text-center">
              Ações
            </th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.quantityOpenLoans}</td>
              <td>{customer.quantityClosedLoans}</td>
              <td>{customer.phone}</td>
              <td>{customer.notes}</td>
              <td>
                {new Date(customer.createdAt).toLocaleDateString("pt-BR")}
              </td>
              <td className="text-center">
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(customer)}
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
