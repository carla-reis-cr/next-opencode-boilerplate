import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const OUTPUT_PRD = path.resolve(process.cwd(), 'PRD.md');

rl.question('Descreva a feature que deseja desenvolver: ', (idea) => {
  if (!idea) { rl.close(); return; }
  console.log('📝 Gerando PRD otimizada...');
  
  const prompt = `Crie um PRD.md para: "${idea}" em Next.js App Router. Use marcações [LOCAL] para tarefas simples e [CLAUDE] para lógica crítica. Retorne apenas Markdown.`;
  
  try {
    const res = execSync(`opencode run --provider ollama --model qwen2.5-coder:7b --prompt "${prompt}"`, { encoding: 'utf-8' });
    fs.writeFileSync(OUTPUT_PRD, res);
    console.log(`✨ PRD criada em ${OUTPUT_PRD}`);
  } catch (e) {
    console.log('Erro ao gerar PRD (certifique-se de que o Ollama/OpenCode está rodando).');
  } finally {
    rl.close();
  }
});