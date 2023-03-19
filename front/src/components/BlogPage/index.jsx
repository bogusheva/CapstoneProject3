import { Outlet } from "react-router-dom";

export default function BlogPage({ blogContent }) {
  return (
    <div className="main-container">
      <Outlet />
    </div>
  );
}
