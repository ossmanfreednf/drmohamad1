import type { ArticleRecord } from "@/lib/article-types";

const coverImages:Record<string,string>={
  "after-surgery-recovery":"/article-after-surgery-recovery.png",
  "surgery-in-cancer-care":"/article-multidisciplinary-cancer-care.png"
};

export function applyArticleOverrides(article:ArticleRecord):ArticleRecord{
  const coverImage=coverImages[article.slug];
  return coverImage?{...article,coverImage}:article;
}
