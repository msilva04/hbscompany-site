# tmux no `hbscompany-site`

O tmux já vem instalado no Ubuntu Server deste VPS (3.4, pacote oficial) — não instale
nem compile outra versão. Serve pra deixar processo longo rodando depois que o SSH cai.

**Este repo é a exceção do workspace:** export estático (`output: "export"`) publicado por
**FTP na hospedagem compartilhada da Hostinger**, a partir da branch `master`. Não usa Docker
nem roda neste VPS — então aqui o tmux serve pro build e pro upload, não pra manter app de pé.

## Receitas deste repo

```sh
# dev server (Next, http://localhost:3000)
tmux new -s site-dev
cd /root/projetos/hbscompany-site && npm run dev
# Ctrl+b d

# build do export estático — o upload por FTP é lento e não pode cair no meio
tmux new -d -s site-build 'cd /root/projetos/hbscompany-site && npm run build 2>&1 | tee /tmp/hbscompany-site-build.log'
tmux attach -t site-build

# acompanhar o deploy depois do push na master (publica em hbscompany.tech)
tmux new -s site-deploy
cd /root/projetos/hbscompany-site && gh run watch $(gh run list --limit 1 --json databaseId --jq '.[0].databaseId')
```

## Sessões

```sh
tmux new -s SESSAO        # cria e entra
tmux ls                   # o que está rodando
tmux attach -t SESSAO     # volta
tmux kill-session -t SESSAO
tmux new -d -s SESSAO 'comando'   # dispara já destacado
```

Prefixo é **Ctrl+b**: solta o prefixo, depois aperta a tecla.

| Atalho | Faz |
|---|---|
| `Ctrl+b d` | **detach** — sai e deixa rodando |
| `Ctrl+b c` | nova janela |
| `Ctrl+b n` / `p` | próxima / anterior |
| `Ctrl+b 0..9` | vai pra janela N |
| `Ctrl+b %` / `"` | divide painel na vertical / horizontal |
| `Ctrl+b ←↑→↓` | anda entre painéis |
| `Ctrl+b z` | zoom no painel (toggle) |
| `Ctrl+b [` | modo scroll (`q` sai) |
| `Ctrl+b ,` | renomeia a janela |
| `Ctrl+b x` | fecha o painel |

Sem `~/.tmux.conf` o scroll do mouse não funciona; use `Ctrl+b [`.

## Cuidados

Este repo **não roda neste VPS** — ele é export estático enviado por FTP. Então o
`git reset --hard` do deploy dos outros repos não se aplica aqui, mas o resto sim:

- **Servidor de dev esquecido segura a porta 3000.** Um `npm run dev` num tmux que você
  esqueceu de matar continua vivo depois do logout, e aí o dev de outro repo Next não
  sobe. Antes de subir outro, `tmux ls`. Ou use `PORT=3001 npm run dev` no segundo.
- **Push na `master` é publicar** — não existe etapa manual depois. Rode `npm run build`
  antes, dentro do tmux, e confira o log.
- Trabalho em andamento vai pra branch e é commitado; o workspace inteiro é compartilhado
  com a produção dos outros projetos.
