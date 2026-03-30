import { remark } from "remark";
import html from "remark-html";

export function markdownToHtml(md: string): string {
  const result = remark().use(html, { sanitize: false }).processSync(md);
  return result.toString();
}
