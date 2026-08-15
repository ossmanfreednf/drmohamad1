import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin/", "/api/admin/", "/signin-with-chatgpt", "/callback"] },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: ["/admin/", "/api/admin/"] },
      { userAgent: "GPTBot", allow: "/", disallow: ["/admin/", "/api/admin/"] },
      { userAgent: "Googlebot", allow: "/", disallow: ["/admin/", "/api/admin/"] },
      { userAgent: "Bingbot", allow: "/", disallow: ["/admin/", "/api/admin/"] },
    ],
    sitemap: "https://drmohamadelharess.com/sitemap.xml",
    host: "https://drmohamadelharess.com",
  };
}
