import { useState } from 'react';

import { Grid } from "@mui/material";

import ToDoList from "./components/ToDoList";
import Sidebar from "./components/Sidebar";
import Pomodoro from './components/Pomodoro';

const DashboardLayout = () => {
  const [selectedMenu, setSelectedMenu] = useState(0)

  const handleSelectedMenu = (e, index) => {
    setSelectedMenu(index)
  }

  return ( 
    <div className="dashboard-layout">
      <Grid container spacing={1}>
          <Grid item md={3}>
            <aside className="sidebar dashboard-sidebar-container">
              <Sidebar 
                selectedMenu={selectedMenu} 
                handleSelectedMenu={handleSelectedMenu}
              />
            </aside>
          </Grid>

        <Grid item md={9}>
          <section className="dashboard dashboard-section">
            {selectedMenu === 0 ? <ToDoList /> : <Pomodoro />}
          </section>
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardLayout;