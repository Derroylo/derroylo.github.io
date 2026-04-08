import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

const leadingNumberAndDotRegEx = /^\d+\./;
const wordSplitterRegEx = /\w\S*/g;

/** starlight-versions plugin uses this label for the "current version" sidebar group; do not modify it */
const STARLIGHT_VERSIONS_CURRENT_LABEL = "Symbol(StarlightVersionsCurrentVersionSidebarGroupLabel)";
/** Version slugs (e.g. "0.3", "1.0") used by starlight-versions for archived version groups */
const versionSlugRegEx = /^\d+(\.\d+)*(-[a-z0-9.]+)?$/i;

function toTitleCase(str: string) {
  return str.replace(wordSplitterRegEx, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

function cleanGroupLabels(entries: any[]) {
  for (const entry of entries) {
    if (entry.type === "group") {
      const isStarlightVersionsGroup =
        entry.label === STARLIGHT_VERSIONS_CURRENT_LABEL || versionSlugRegEx.test(String(entry.label));
      if (!isStarlightVersionsGroup) {
        // Remove leading number + dot
        let label = entry.label.replace(leadingNumberAndDotRegEx, "");
        // Convert to Title Case
        entry.label = toTitleCase(label);
      }
      // Recurse into children (so nested groups under "current version" still get cleaned)
      cleanGroupLabels(entry.entries ?? []);
    }
  }
}

export const onRequest = defineRouteMiddleware((context) => {
  const { sidebar } = context.locals.starlightRoute;
  cleanGroupLabels(sidebar);
});