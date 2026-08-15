import { getChatGPTUser, requireChatGPTUser } from "@/app/chatgpt-auth";
const ADMIN_EMAIL="ossmansocial@gmail.com";
export async function requireArticleAdmin(returnTo="/admin/articles"){const user=await requireChatGPTUser(returnTo);if(user.email.toLowerCase()!==ADMIN_EMAIL)throw new Error("ADMIN_ACCESS_DENIED");return user}
export async function isArticleAdmin(){const user=await getChatGPTUser();return Boolean(user&&user.email.toLowerCase()===ADMIN_EMAIL)}
