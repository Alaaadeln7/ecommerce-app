import { Link } from "react-router-dom";
import "./dashboard.css";
import DashboardRouter from "./DashboardRouter";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <div>
        <aside>
          <ul>
            <li>account</li>
            <li>home</li>
            <li>
              <Link to={"about"}>about</Link>
            </li>
            <li>
              <Link to={"productslist"}>products</Link>
            </li>
            <li>users</li>
          </ul>
        </aside>
        <div>
          <DashboardRouter />
        </div>
      </div>
    </section>
  );
}
