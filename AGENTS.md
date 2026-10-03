<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# DevTest Engineering Guidelines & Agent Directives

> Writing software is an art, and the best engineers care deeply about good design.

Este documento consolida as diretrizes de engenharia da **DevTest**, os padroes de codigo, as regras de output e as diretivas de atuacao para todos os agentes e subagentes. Estas regras sao globais e tem precedencia sobre defaults genericos.

---

## 0. Regras de Output (Ler Primeiro)

### 0.1 Sem Duplo Traco

> **NUNCA usar duplo traco.** Isto inclui o em dash, o en dash e o duplo hifen.
> Aplica-se a **tudo**: prosa, comentarios de codigo, JSDoc, mensagens de commit, titulos de PR, descricoes de tarefas, copy de UI e documentacao. Em vez disso usar virgula, dois pontos, parenteses ou uma frase nova.

- Excecao unica: flags de CLI (`npm run build --watch`, `git commit --amend`) e o hifen simples em `kebab-case`.

| Nao                                                           | Sim                                               |
| ------------------------------------------------------------- | ------------------------------------------------- |
| `Working code is necessary, mas nao suficiente` (com em dash) | `Working code e necessario, mas nao e suficiente` |
| `feat(auth): send email, novo fluxo` (com em dash)            | `feat(auth): send email on account creation`      |
| `Quality, non-negotiable` (com duplo hifen)                   | `Quality is non-negotiable`                       |

### 0.2 Icons, Nao Emoji

> **PROIBIDO usar emoji.** Sinalizacao visual faz-se sempre com uma icon library.

- Nada de emoji em UI, codigo, comentarios, JSDoc, mensagens de commit, titulos ou descricoes de PR, READMEs ou documentacao tecnica.
- Biblioteca padrao da DevTest: `lucide-react` (web/React). Importar o icone nomeadamente, nunca o pacote inteiro, para preservar tree shaking.
- Tamanho e stroke vem de tokens de design, nunca de numeros soltos espalhados pelos componentes.
- Acessibilidade: icone decorativo leva `aria-hidden="true"` e o texto fica visivel ao lado. Icone sozinho, sem texto, obriga a `aria-label` no elemento clicavel.
- Em documentacao e checklists, usar prefixos de texto (`Nao:` / `Sim:`, `AVISO:`, `CRITICO:`) em vez de emoji.

```tsx
// Nao:
;<button>Delete</button>
import * as Icons from 'lucide-react'

// Sim:
import { Trash2 } from 'lucide-react'

;<button aria-label="Delete">
  <Trash2 size={ICON_SIZE.SM} aria-hidden="true" />
  Delete
</button>
```

---

## 1. Os Mandamentos da Engenharia de Software da DevTest

1. Quality is non-negotiable.
2. Minimize complexity, write clean and readable code.
3. Understand before you modify or implement. A well thought out problem is a half-solved problem.
4. Code and comments must express why decisions were made, not just what the code does.
5. Before asking for help, exhaust every possible solution.
6. Make it work, then make it better (and test it).
7. If it's not tested, how is it working? If QA finds a problem, you should be ashamed.
8. If you introduced a bug in production, next day beer is on you.
9. Be a good team mate / team player.
10. Listen well to the client. What they want is not always what they need.
11. You are not God (KISS, YAGNI, DRY).
12. Shipped is better than perfect.

### Como os agentes aplicam isto

- Antes de escrever codigo, reformular o problema em 1 a 3 frases e expor as assuncoes.
- Se um requisito for ambiguo, perguntar antes de implementar.
- Nunca entregar uma feature sem indicar e demonstrar como foi testada.
- Nao inventar abstracoes para requisitos hipoteticos (YAGNI).
- Quando o custo de perfeicao exceder o valor entregue, propor o corte e enviar.

---

## 2. Strategic vs Tactical Programming

- **Default:** Strategic Programming. Privilegiar a qualidade de design a longo prazo sobre a conveniencia imediata. "Working code" e necessario mas nao e suficiente.
- Apenas ser tatico quando explicitamente solicitado (hotfix, POC rapida), documentando formalmente todo o debito tecnico assumido.

---

## 3. Coding Conventions

### 3.1 Naming

- `UPPER_CASE` para constantes, incluindo as chaves de enums.
- Booleanos nomeados com intencao clara usando verbos auxiliares: `is`, `has`, `can`, `should`.

```ts
const MAX_UPLOAD_SIZE = 5_000_000

enum UserRole {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
}

isLoading
hasError
isActive
hasPermission
isLoggedIn
canUpload
```

### 3.2 Functions

- Nomes descritivos e convencoes ES6.
- Early returns / guard clauses para funcoes limpas e legiveis, evitando aninhamento profundo.
- Preferir named exports e arrow functions.
- Preferir interfaces a types.
- Para funcoes puras, adotar o padrao RORO (Receive an Object, Return an Object):
  `isUserAnEmployee({ organizationId, businessId })`
- Usar JSDoc nas funcoes publicas explicando a razao e contexto das decisoes (o porquê).

```ts
/**
 * Renders an entire login page with email and password fields
 * using {@link Renderer}.
 *
 * @param  {Object} options
 * @param  {String} options.action          login form action
 * @param  {String} [options.errorMessage]  optional message
 * @return {Promise<string>}                HTML of the page
 */
export const renderLogin: IRenderLogin = ({ action, errorMessage }) => {
  return loginTemplate({ action, errorMessage })
}
```

### 3.3 Folder Structure

- Sempre `kebab-case` para diretorios e ficheiros (ex: `components/auth-wizard`, `controllers/signin.ts`).
- Separar codigo de types/interfaces sempre que possivel.
- Organizar ficheiros sistematicamente: cada ficheiro contem apenas conteudo relacionado.

---

## 4. Git Workflow & Pull Requests

### 4.1 Branches

Os repositorios tem sempre dois branches principais: `main` e `develop`.
NUNCA FAZER PUSH DIRETO NA BRANCH `develop` OU `main`.
Todo o trabalho e baseado em `develop`, exceto bugs em producao (baseados em `main`).

Nomenclatura segundo Atlassian Branching Model:
`<branch-type>/<developer-initials>_<jira-task-number>_<title>`

Exemplos:

- `bugfix/akl_fix_seo_page_title`
- `feature/akl_dev345_send_email_when_account_is_created`
- `hotfix/akl_dev345_fix_user_fullname_not_displaying`

### 4.2 Commits

- Todos os repositorios usam Conventional Commits (`feat(...)`, `fix(...)`, `refactor(...)`).
- Mensagens de commit sempre em ingles.
- Sem duplo traco nas mensagens.

### 4.3 Pull Requests

- Titulo e corpo do PR sao OBRIGATORIAMENTE em ingles, mesmo com conversacao e UI em portugues.
- Formato do titulo: `[TICKET-NUMBER] <task-title>` ou `[Feature] <task-title>`.
- SEM ATRIBUICAO DE IA: NUNCA incluir mencao, creditos, icone de robo ou tag de IA (Claude, Gemini, Antigravity) no titulo ou corpo do PR. O PR e assinado exclusivamente pelo desenvolvedor.
- Template obrigatorio do corpo do PR:

```markdown
## Summary

A brief description of the pull request.

## Task Link (Trello or Planner)

## Known issues / Notes

Report any open decisions, edge cases, bugs found or deferred items here.

## Screenshots or Screencasts

Visual evidence for UI changes across relevant screen sizes.

## Test Plan / Execution

Commands, test scripts or setup needed to verify the changes.

## Others ...
```

### 4.4 Merge

Estrategia principal: squash and merge.

---

## 5. Checklist Antes de Entregar

- [ ] Zero duplo traco em codigo, texto, commits e PR.
- [ ] Zero emoji. Icon library unica (`lucide-react`) importada nomeadamente.
- [ ] O problema foi compreendido e reformulado antes de codificar.
- [ ] A solucao e a mais simples que satisfaz o requisito (KISS, YAGNI, DRY).
- [ ] Naming segue as convencoes (`UPPER_CASE`, `is/has/can/should`, `kebab-case`).
- [ ] Guard clauses em vez de aninhamento profundo.
- [ ] Named exports, interfaces, RORO em funcoes puras.
- [ ] JSDoc nas funcoes publicas com o porquê das decisoes.
- [ ] Types e interfaces separados do codigo.
- [ ] Testes executados e comprovados com evidencias.
- [ ] Nome de branch, commits e titulo do PR em conformidade.
- [ ] Debito tecnico documentado em Notes/Known issues.

---

## 6. Diretrizes para Agentes e Subagentes

### 6.1 Verification Before Completion (A Regra de Ferro)

- Nenhuma alegacao de conclusao sem evidencia fresca de teste ou build.
- Antes de afirmar que uma tarefa esta pronta, executar o comando e verificar o exit code e a saida real.
- Nunca confiar cegamente em relatorios de subagentes: verificar o diff git (`git diff --stat`) antes de aceitar.

### 6.2 Subagent-Driven Development

- Ao decompor planos em tarefas, cada subagente implementador recebe apenas o escopo estrito da sua tarefa, interfaces e restricoes globais.
- Apos cada implementacao, executar revisao de tarefa (Spec Compliance + Code Quality).
- Limite de fix loop: maximo de 5 iteracoes por tarefa. Se persistirem bloqueios, escalar.
- Ao concluir todas as tarefas, realizar revisao ampla de toda a branch.

### 6.3 Dispatch de Agentes em Paralelo

- Quando houver 2 ou mais tarefas/investigacoes independentes sem estado partilhado, disparar subagentes concorrentes no mesmo turno.
- Cada subagente recebe escopo isolado, meta clara e constraints precisas.

### 6.4 Padrao UI/UX Pro Max

- Respeitar estritamente a escala de tokens existente para cores, espacamentos e tipografia. Sem valores arbitrarios.
- Acessibilidade WCAG 2.1 AA obrigatoria em todos os componentes.
- Mobile-first responsivo e suporte para temas (dark/light) desde o primeiro rascunho.

---

## 7. Contexto Especifico Portfolio sebasti.ao

### 7.1 Projeto Pessoal, Nao de Cliente

- Repo pessoal com deploy em Vercel (`sebasti.ao`). Nao existe Trello/Jira: no PR, o campo Task Link pode ficar vazio ou apontar para a issue do GitHub.
- O repo atual tem apenas `master`. Trabalho novo segue o fluxo da seccao 4.1: feature branch e PR, sem push direto para `master`, squash and merge.

### 7.2 Stack e Estrutura

- Next.js 16 (App Router) com breaking changes face a versoes antigas: ver o bloco `nextjs-agent-rules` no topo deste ficheiro. Ler os guias em `node_modules/next/dist/docs/` antes de escrever codigo.
- i18n com next-intl: locales `en` (default) e `pt`, `localePrefix: as-needed`. Toda a copy de UI vive em `messages/en.json` e `messages/pt.json`. Nunca hardcodar texto visivel em componentes; dados em `src/data` referenciam chaves de traducao (`*Key`).
- Conteudo (projects, experience, testimonials, gallery) vive em `src/data`; secoes de pagina em `src/components/sections`; paginas em `src/app/[locale]`.

### 7.3 API Routes

- Ao contrario do AlopaCars, este projeto TEM rotas de API proprias (`src/app/api/send-email`, via Resend). Novas rotas seguem o mesmo padrao e validam input no servidor.

### 7.4 Verificacao no Navegador (Standing Permission)

- Autorizacao permanente para verificar visualmente as paginas no navegador ou via build, incluindo caminhos de erro e valores digitados manualmente.
