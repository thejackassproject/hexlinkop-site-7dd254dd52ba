import { marked } from 'marked';

export function parseMarkdown(markdown: string) {
  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
  });
  
  return marked.parse(markdown);
}

export function extractFrontmatter(mdxContent: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = mdxContent.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content: mdxContent };
  }
  
  const [, frontmatterYaml, content] = match;
  
  // Simple YAML parser for frontmatter
  const frontmatter: Record<string, any> = {};
  const lines = frontmatterYaml.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      frontmatter[key] = value.replace(/^["']|["']$/g, '');
    }
  }
  
  return { frontmatter, content };
}
