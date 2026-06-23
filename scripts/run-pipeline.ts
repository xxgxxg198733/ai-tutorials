/**
 * Standalone pipeline runner for CLI and GitHub Actions.
 *
 * Usage: npx tsx scripts/run-pipeline.ts
 *
 * Required env vars:
 *   ANTHROPIC_API_KEY  — for content rewriting
 *   PEXELS_API_KEY     — for image fetching
 *   GITHUB_TOKEN       — for committing files
 *   GITHUB_REPO        — "owner/repo"
 *   GITHUB_BRANCH      — branch name (defaults to "main")
 */

import { runPipeline } from "../src/lib/pipeline";

async function main() {
  console.log("=== AI Content Pipeline ===\n");

  const required = ["ANTHROPIC_API_KEY", "PEXELS_API_KEY", "GITHUB_TOKEN", "GITHUB_REPO"];
  const missing = required.filter((k) => !process.env[k]);

  if (missing.length > 0) {
    console.error(`Missing env vars: ${missing.join(", ")}`);
    process.exit(1);
  }

  const result = await runPipeline();

  console.log(`\n=== Result ===`);
  console.log(`  Success: ${result.success}`);
  console.log(`  Articles written: ${result.articlesWritten}`);
  console.log(`  Errors: ${result.errors.length}`);

  if (result.errors.length > 0) {
    console.log("\nErrors:");
    result.errors.forEach((e) => console.log(`  - ${e}`));
  }

  if (result.articles.length > 0) {
    console.log("\nNew articles:");
    result.articles.forEach((a) =>
      console.log(`  ${a.category}/${a.slug}`)
    );
  }

  process.exit(result.success ? 0 : 1);
}

main();
