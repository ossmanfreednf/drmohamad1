import { isArticleAdmin } from "@/lib/admin-auth";

const allowedTypes=new Set(["image/jpeg","image/png","image/webp"]);

export async function POST(request:Request){
  if(!await isArticleAdmin())return Response.json({error:"Unauthorized"},{status:401});
  const form=await request.formData();const file=form.get("image");
  if(!(file instanceof File))return Response.json({error:"Choose an image to upload."},{status:400});
  if(!allowedTypes.has(file.type))return Response.json({error:"Use a JPG, PNG or WebP image."},{status:400});
  if(file.size>8*1024*1024)return Response.json({error:"Image must be smaller than 8 MB."},{status:400});
  const extension=file.type==="image/png"?"png":file.type==="image/webp"?"webp":"jpg";
  const key=`article-${crypto.randomUUID()}.${extension}`;
  const{env}=await import("cloudflare:workers");
  await env.BUCKET.put(key,await file.arrayBuffer(),{httpMetadata:{contentType:file.type,cacheControl:"public, max-age=31536000, immutable"},customMetadata:{originalName:file.name}});
  return Response.json({url:`/api/article-images/${key}`},{status:201});
}
