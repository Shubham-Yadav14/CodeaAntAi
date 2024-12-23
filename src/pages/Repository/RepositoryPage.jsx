import RepositoryTable from "../../components/RepositoryComponents/RepositoryTable";
import Sidebar from "../../components/Common/Sidebar";

export default function Repository() {
  return (
    <div className="">
      <Sidebar />
      <div className="lg:ml-[240px] max-lg:mt-[57px] lg:p-6">
        <RepositoryTable />
      </div>
    </div>
  );
}