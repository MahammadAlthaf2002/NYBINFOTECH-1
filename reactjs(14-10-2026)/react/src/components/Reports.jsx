
import { memo } from "react";

const Reports = memo(function Reports({
  totalProducts,
  favouriteCount,
}) {
  return (
    <section className="reports">
      <h2>Product Reports</h2>

      <div className="report-card">
        <h3>Total Products</h3>
        <p>{totalProducts}</p>
      </div>

      <div className="report-card">
        <h3>Favourite Products</h3>
        <p>{favouriteCount}</p>
      </div>

      <p>
        This component is loaded on demand using React.lazy and Suspense.
      </p>
    </section>
  );
});

export default Reports;
