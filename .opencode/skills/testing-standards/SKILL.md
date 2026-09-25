# Skill: Testing Standards (Vitest & React Testing Library)

## Contexto
Aplicável à criação de testes unitários para utilitários, hooks customizados e componentes React.

## Regras e Diretrizes Obrigatórias
1. **Localização:** Os arquivos de teste devem ficar na mesma pasta do código testado, seguindo o padrão `[nome].test.tsx` ou `[nome].spec.ts`.
2. **Foco em Comportamento:** Teste o comportamento visível e interativo para o usuário (ex: simular cliques, verificar textos na tela via `screen.getByRole`), e não detalhes de implementação interna (como estado interno de variáveis).
3. **Mocking de Server Actions:** Em componentes que utilizam Server Actions do Next.js, faça o mock explícito do módulo correspondente usando `vi.mock()` para isolar o teste unitário de chamadas reais de rede ou banco de dados.