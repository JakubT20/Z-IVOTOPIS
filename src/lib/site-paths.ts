export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  if (path === "/") {
    return siteBasePath ? `${siteBasePath}/` : "/";
  }

  return `${siteBasePath}${path}`;
}
