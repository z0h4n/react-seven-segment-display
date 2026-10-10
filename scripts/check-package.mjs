// Fails if any file referenced by package.json (main, module, types, exports) is missing from dist/.
import { existsSync, readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const paths = new Set();

const collect = value => {
  if (typeof value === 'string') paths.add(value);
  else if (value && typeof value === 'object') Object.values(value).forEach(collect);
};

collect([pkg.main, pkg.module, pkg.types, pkg.exports]);

const missing = [...paths].filter(p => p.startsWith('./') && !existsSync(new URL(`../${p}`, import.meta.url)));

if (missing.length) {
  console.error(`package.json references files that do not exist: ${missing.join(', ')}`);
  process.exit(1);
}

console.log(`package.json entry points OK (${paths.size} paths)`);
