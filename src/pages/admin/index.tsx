import AdminLayout from "@/components/layout/AdminLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AdminPage = () => (
	<AdminLayout>
		<p>Hello world</p>
	</AdminLayout>
);

export default AdminPage;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"dashboard",
			])),
		},
	};
}
