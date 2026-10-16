import {readFileSync} from "node:fs";
import {nodeResolve} from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

const pkg = JSON.parse(readFileSync("./package.json", "utf8"));
const banner = `// ${pkg.name} v${pkg.version} ${pkg.homepage} Copyright ${new Date().getFullYear()} ${pkg.author}, ${pkg.license} License`;

// d3 has known, harmless circular imports.
function onwarn(warning, warn) {
  if (warning.code === "CIRCULAR_DEPENDENCY" && warning.ids.every((id) => id.includes("node_modules"))) return;
  warn(warning);
}

export default [
  {
    input: "src/index.js",
    external: [/^d3-/],
    output: {file: "dist/p5.viz.mjs", format: "es", banner},
  },
  {
    input: "src/index.js",
    plugins: [nodeResolve()],
    onwarn,
    output: [
      {file: "dist/p5.viz.js", format: "umd", name: "p5Viz", banner},
      {file: "dist/p5.viz.min.js", format: "umd", name: "p5Viz", banner, plugins: [terser()]},
    ],
  },
];
