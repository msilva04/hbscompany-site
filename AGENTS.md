<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deploy — como mandar pro ar

O site é **export estático** (`output: "export"` no `next.config.ts` → pasta `out/`), hospedado na **Hostinger** em https://hbscompany.tech.

**O deploy é 100% automático via GitHub Actions:**

1. Commit das mudanças na branch `master`
2. `git push origin master`
3. O workflow `.github/workflows/deploy.yml` roda sozinho: `npm ci` → `npm run build` → envia `out/` por FTP para `/domains/hbscompany.tech/public_html/` (com limpeza total do destino)
4. Acompanhar/confirmar: `gh run watch $(gh run list --limit 1 --json databaseId --jq '.[0].databaseId')` ou `gh run list --limit 1`

**Não há passo manual de FTP** — as credenciais estão nos secrets do repositório no GitHub (`FTP_HOST`, `FTP_USER`, `FTP_PASS`). Se o deploy falhar por autenticação, é lá que se ajusta (Settings → Secrets and variables → Actions).

Antes de dar push, validar localmente com `npx next build` (precisa gerar as 9 páginas sem erro). Para ver em dev: `npm run dev` → http://localhost:3000.

Cache: após o deploy, o navegador pode mostrar a versão antiga — testar com hard refresh (Ctrl+Shift+R).
