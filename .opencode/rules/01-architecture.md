# Arquitetura e Convenções Next.js
- **Server Components por padrão:** Use Server Components. Adicione `'use client'` apenas se houver interatividade (hooks de estado/efeito).
- **Data Fetching:** Faça o fetch direto no componente assíncrono do servidor. Evite useEffect para dados iniciais de página.