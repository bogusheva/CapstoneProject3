import { Outlet } from "react-router-dom";

export default function BlogPage() {
  return (
    <div className="main-container">
      <Outlet />
    </div>
  );
}
