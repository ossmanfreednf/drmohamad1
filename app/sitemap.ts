import type { MetadataRoute } from "next";
import { conditions, procedures } from "@/lib/clinical-pages";
import { getPublishedArticles } from "@/lib/article-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://drmharess.com";
  const articlePaths = (await getPublishedArticles()).map(article=>`/articles/${article.slug}`);
  const paths = ["", "/about", "/conditions", ...Object.keys(conditions).map(slug=>`/conditions/${slug}`), "/procedures", ...Object.keys(procedures).map(slug=>`/procedures/${slug}`), "/second-opinion", "/research-publications", "/articles", ...articlePaths, "/vip-services", "/hospitals", "/contact", "/appointment"];
  return paths.map((path, index) => ({ url: base + path, lastModified: new Date(), changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : path === "/appointment" ? 0.9 : path === "/about" ? 0.85 : 0.7 }));
}
