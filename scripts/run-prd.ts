import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const PRD_JSON_FILE = path.resolve(process.cwd(), 'prd.json');

interface Task {
  id: number;
  title: string;
  provider: string; // Ex: 'ollama', 'anthropic', 'deepseek', etc.
  model: string;   // Ex: 'qwen2.5-coder:7b', 'claude-3-5-sonnet', etc.
}

function run() {
  if (!fs.existsSync(PRD_JSON_FILE)) {
    console.log('❌ prd.json não encontrado.');
    return;
  }

  const prd = JSON.parse(fs.readFileSync(PRD_JSON_FILE, 'utf-8'));

  prd.tasks.forEach((task: Task, index: number) => {
    console.log(`\n▶ [Tarefa ${index + 1}] Usando provedor: ${task.provider} (${task.model})`);
    console.log(`Objetivo: ${task.title}`);

    try {
      // O OpenCode aceita os parâmetros de provider e model de forma dinâmica
      const cmd = `opencode run --provider ${task.provider} --model ${task.model} --prompt "${task.title}"`;
      execSync(cmd, { stdio: 'inherit' });
    } catch (error) {
      console.error(`❌ Erro na execução da tarefa ${task.id}:`, error);
    }
  });
}

run();