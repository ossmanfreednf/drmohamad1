export async function GET(_:Request,{params}:{params:Promise<{key:string}>}){
  const{key}=await params;if(!/^article-[a-f0-9-]+\.(jpg|png|webp)$/.test(key))return new Response("Not found",{status:404});
  const{env}=await import("cloudflare:workers");const object=await env.BUCKET.get(key);if(!object)return new Response("Not found",{status:404});
  const headers=new Headers();object.writeHttpMetadata(headers);headers.set("etag",object.httpEtag);headers.set("cache-control","public, max-age=31536000, immutable");return new Response(object.body,{headers});
}
