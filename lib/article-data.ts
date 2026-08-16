import { and, desc, eq } from "drizzle-orm";
import { getDb } from "@/db";
import { articles } from "@/db/schema";
import { parseArticleRow, type ArticleRecord } from "@/lib/article-types";
import { researchArticles } from "@/lib/research-articles";
import { defaultArticles } from "@/lib/default-articles";

const builtInArticles = [...defaultArticles, ...researchArticles];

async function getManagedArticles(limit:number):Promise<ArticleRecord[]>{
  try {
    const db=await getDb();
    const rows=await db.select().from(articles).where(eq(articles.status,"published")).orderBy(desc(articles.publishedAt),desc(articles.id)).limit(limit);
    return rows.map(row=>parseArticleRow(row as unknown as Record<string,unknown>));
  } catch (error) {
    console.error("Managed articles are unavailable; serving the built-in article library.",error);
    return [];
  }
}

export async function getPublishedArticles(limit=100):Promise<ArticleRecord[]>{const managed=await getManagedArticles(limit);return [...managed,...builtInArticles.filter(item=>!managed.some(existing=>existing.slug===item.slug))].slice(0,limit)}
export async function getPublishedArticle(slug:string):Promise<ArticleRecord|null>{try{const db=await getDb();const rows=await db.select().from(articles).where(and(eq(articles.slug,slug),eq(articles.status,"published"))).limit(1);if(rows[0])return parseArticleRow(rows[0] as unknown as Record<string,unknown>)}catch(error){console.error(`Managed article "${slug}" is unavailable; checking the built-in article library.`,error)}const builtIn=builtInArticles.find(item=>item.slug===slug);return builtIn||null}
export async function getRelatedArticles(slug:string,limit=2):Promise<ArticleRecord[]>{return (await getPublishedArticles()).filter(item=>item.slug!==slug).slice(0,limit)}
