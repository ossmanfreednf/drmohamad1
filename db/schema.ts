import { sql } from "drizzle-orm";
import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const articles = sqliteTable("articles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull(),
  title: text("title").notNull(),
  lead: text("lead").notNull(),
  category: text("category").notNull().default("Patient Education"),
  readTime: text("read_time").notNull().default("5 min read"),
  coverImage: text("cover_image").notNull().default("/dr-mohamad-el-haress-portrait.png"),
  imageAlt: text("image_alt").notNull().default(""),
  takeaway: text("takeaway").notNull().default(""),
  highlights: text("highlights").notNull().default("[]"),
  sections: text("sections").notNull().default("[]"),
  status: text("status", { enum: ["draft", "published"] }).notNull().default("draft"),
  author: text("author").notNull().default("Dr. Mohamad El Haress"),
  seoTitle: text("seo_title").notNull().default(""),
  metaDescription: text("meta_description").notNull().default(""),
  keywords: text("keywords").notNull().default("[]"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  publishedAt: text("published_at"),
}, (table) => [uniqueIndex("articles_slug_unique").on(table.slug)]);
