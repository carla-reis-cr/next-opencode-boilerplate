import * as fs from 'fs';
import * as path from 'path';

const TARGET_DIR = path.resolve(process.cwd(), 'src');
const OUTPUT = path.resolve(process.cwd(), '.opencode/suggested-skills.json');

function scan(dir: string, list: string[] = []): string[] {
  if (!fs.existsSync(dir)) return list;
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) scan(p, list);
    else if (p.endsWith('.ts') || p.endsWith('.tsx')) list.push(p);
  });
  return list;
}

function analyze() {
  console.log('[ECC Analyzer] Auditando padrões no código...');
  const files = scan(TARGET_DIR);
  let issuesCount = 0;

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    if (/\bany\b/.test(content)) issuesCount++;
  });

  const report = { analyzedAt: new Date().toISOString(), filesChecked: files.length, anyUsagesDetected: issuesCount };
  fs.writeFileSync(OUTPUT, JSON.stringify(report, null, 2));
  console.log(`[ECC Analyzer] Relatório gerado em ${OUTPUT}`);
}

analyze();