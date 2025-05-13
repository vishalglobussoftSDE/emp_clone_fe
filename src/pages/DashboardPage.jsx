import DashboardHeadersBtnComp from "../components/DashboardHeaders/DashboardHeadersBtnComp"
import DashboardHeadersComp from "../components/DashboardHeaders/DashboardHeadersComp"


const DashboardPage = () => {
  return (
    <div>
        <div className="wrapper flex flex-col gap-6">
            <div>Home / Employee Details Full</div>
            <div>vishal vishwakarma</div>
            <DashboardHeadersComp />
            <DashboardHeadersBtnComp />
        </div>
    </div>
  )
}

export default DashboardPage