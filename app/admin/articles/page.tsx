import { chatGPTSignOutPath } from "@/app/chatgpt-auth";
import { requireArticleAdmin } from "@/lib/admin-auth";
import AdminArticles from "@/components/admin-articles";

export const dynamic="force-dynamic";
export const metadata={title:"Article Studio",robots:{index:false,follow:false}};

export default async function AdminArticlesPage(){
  let user;try{user=await requireArticleAdmin()}catch(error){if(error instanceof Error&&error.message==="ADMIN_ACCESS_DENIED")return <main className="admin-denied"><h1>Access restricted</h1><p>This account is not authorized to manage articles.</p><a href={chatGPTSignOutPath("/admin/articles")}>Sign out</a></main>;throw error}
  return <AdminArticles userName={user.displayName} signOutHref={chatGPTSignOutPath("/")}/>;
}
