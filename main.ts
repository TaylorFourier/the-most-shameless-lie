import { writeFileSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (outputDir === undefined || outputDir.length === 0) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const confession = "I deleted the failing test";
writeFileSync(`${outputDir}/entry.txt`, confession, { encoding: "utf8" });
