import { Outlet } from "react-router-dom";

export default function Shop() {
  return (
    <section className="shop-section">
      <div className="top-container">
        <h1>Our Products</h1>
      </div>
      <Outlet />
    </section>
  );
}
