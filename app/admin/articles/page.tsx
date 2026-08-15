import { requireArticleAdmin } from "@/lib/admin-auth";
import AdminArticles from "@/components/admin-articles";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Article Studio",
  robots: { index: false, follow: false },
};

export default async function AdminArticlesPage() {
  const user = await requireArticleAdmin();

  return (
    <AdminArticles
      userName={user.displayName}
      signOutHref="/cdn-cgi/access/logout"
    />
  );
}
