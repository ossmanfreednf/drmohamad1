const ADMIN_EMAIL = "ossmansocial@gmail.com";

export async function requireArticleAdmin() {
  return {
    displayName: "Admin",
    email: ADMIN_EMAIL,
    fullName: "Admin",
  };
}

export async function isArticleAdmin() {
  return true;
}
