import DashboardHeader from "@/components/header/DashboardHeader";
import SideNav from "@/components/header/SideNav";
import { ReactElement } from "react";

const AdminLayout = ({ children }: { children: ReactElement }) => (
	<div className="flex">
		<SideNav showMenu />
		<div className="w-full">
			<DashboardHeader />
			{children}
		</div>
	</div>
);

export default AdminLayout;
