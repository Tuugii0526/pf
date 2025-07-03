import { blogData } from "./next.json.mjs";
/**
 *@type {Map<string,string>}
 */
export const DYNAMIC_ROUTES = new Map([
  ...blogData?.posts?.map((blog) => [blog.slug, "blog-category"]),
]);
