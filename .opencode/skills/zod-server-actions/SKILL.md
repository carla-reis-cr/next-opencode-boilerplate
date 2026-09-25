# Skill: Secure Server Actions & Zod Validation

## Contexto
Aplicável a todas as mutações de dados, formulários e fluxos de escrita de dados em Server Actions do Next.js App Router.

## Regras e Diretrizes Obrigatórias
1. **Validação Obrigatória na Entrada:** Toda Server Action deve receber um payload tipado e validá-lo imediatamente utilizando um schema do **Zod** antes de qualquer regra de negócio ou acesso ao banco de dados.
2. **Inferência de Tipos:** Utilize `z.infer<typeof ActionSchema>` para definir as tipagens de entrada, proibindo tipagens manuais redundantes.
3. **Retorno Padronizado:** Retorne sempre um objeto estruturado indicando sucesso ou erro com mensagens tratadas, evitando expor stack traces ou erros crus do banco para o cliente.
   - Exemplo de retorno: `{ success: boolean; data?: T; error?: string }`
4. **Revalidação de Cache:** Sempre utilize `revalidatePath` ou `revalidateTag` após mutações bem-sucedidas para garantir a sincronia da UI.