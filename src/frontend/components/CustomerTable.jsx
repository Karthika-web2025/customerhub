import "../../App.css";

function CustomerTable({ customers, onDelete }) {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="4" className="no-data">
                No customers found
              </td>
            </tr>
          ) : (
            customers.map((c, index) => (
              <tr key={c.id} className={index % 2 === 0 ? "row-even" : "row-odd"}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      if (window.confirm("Are you sure?")) {
                        onDelete(c.id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;