import { Helmet } from 'react-helmet';
import DashboardLayout from "./DashboardLayout";

const Dashboard = () => {
  return ( 
    <>
      <Helmet>
        <title>Dashboard | Prodassist</title>
        <meta name="description" content="Prodassist Dashboard Page" />
        <link rel="canonical" href="/dashboard" />
      </Helmet>
      <DashboardLayout />
    </>
   );
}
 
export default Dashboard;