import { NavLink, Outlet } from "react-router-dom";

export default function Blog({ blogContent }) {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <h1>Blog</h1>
        <nav className="nav">
          <ul className="blog-block-list">
            {blogContent.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink
                    to={`${item.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {item.theme}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <Outlet />
      </div>
    </section>
  );
}
