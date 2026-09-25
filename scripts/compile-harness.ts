import * as fs from 'fs';
import * as path from 'path';

const OPENDOPE_DIR = path.resolve(process.cwd(), '.opencode');
const RULES_OUTPUT = path.resolve(OPENDOPE_DIR, 'compiled-rules.md');

function compileHarness() {
  console.log('[ECC Engine] Compilando harness de IA...');
  const skillsDir = path.join(OPENDOPE_DIR, 'skills');
  if (!fs.existsSync(skillsDir)) return;

  const skillFolders = fs.readdirSync(skillsDir);
  let compiledContent = '# Compiled Team Skills & Rules\n\n';

  for (const folder of skillFolders) {
    const skillFile = path.join(skillsDir, folder, 'SKILL.md');
    if (fs.existsSync(skillFile)) {
      const content = fs.readFileSync(skillFile, 'utf-8');
      compiledContent += `\n--- \n## Skill: ${folder}\n\n${content}\n`;
    }
  }

  fs.writeFileSync(RULES_OUTPUT, compiledContent);
  console.log(`[ECC Engine] Harness compilado em ${RULES_OUTPUT}`);
}

compileHarness();