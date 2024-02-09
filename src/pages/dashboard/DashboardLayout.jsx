import { Grid } from "@mui/material";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

const DashboardLayout = () => {
  return ( 
    <div className="dashboard-layout">
      <Grid container spacing={1}>
          <Grid item md={3}>
            <div className="sidebar">
              <Sidebar />
            </div>
          </Grid>

        <Grid item md={9}>
          <div className="dashboard">
            <Dashboard />
          </div>
        </Grid>
      </Grid>
    </div>
   );
}
 
export default DashboardLayout;