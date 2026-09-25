# Skill: Next.js App Router Boundaries (Server vs Client)

## Contexto
Aplicável ao design de arquitetura de componentes React em aplicações Next.js com App Router.

## Regras e Diretrizes Obrigatórias
1. **Server Components por Padrão:** Todo componente é um Server Component por padrão. Não adicione `'use client'` a menos que seja estritamente necessário.
2. **Critérios Estrictos para `'use client'`:** Um componente só deve ser marcado como Client Component se:
   - Utilizar hooks de estado ou ciclo de vida (`useState`, `useEffect`, `useReducer`, `useRef`).
   - Utilizar event listeners do navegador (`onClick`, `onChange`, `onSubmit`, etc.).
   - Utilizar APIs exclusivas do browser (`window`, `localStorage`, etc.).
3. **Isolamento de Folhas (Leaf Components):** Posicione a diretiva `'use client'` o mais abaixo possível na árvore de componentes (nas "folhas"), mantendo os layouts e wrappers principais como Server Components para preservar performance e reduzir o bundle JavaScript enviado ao cliente.
4. **Data Fetching:** Busque dados assincronamente direto no Server Component. Nunca utilize `useEffect` para buscar dados iniciais de página.