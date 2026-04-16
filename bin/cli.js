#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const args = process.argv.slice(2);
const command = args[0];
const aiFlag = args.find(a => a.startsWith('--ai='))?.split('=')[1]
  || args[args.indexOf('--ai') + 1];
const isGlobal = args.includes('--global');

const BOLD  = '\x1b[1m';
const GREEN = '\x1b[32m';
const CYAN  = '\x1b[36m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

const SKILLS_DIR = path.join(__dirname, '..', 'skills');

// ── Tool configs ──────────────────────────────────────────────────────────────
const TOOLS = {
  claude: {
    label: 'Claude Code',
    install(dest) {
      copy('cto-agent.md',           path.join(dest, '.claude', 'agents', 'cto.md'));
      copy('cto-quotes.md',          path.join(dest, '.claude', 'agents', 'cto-quotes.md'));
      copy('cto-debate-command.md',  path.join(dest, '.claude', 'commands', 'cto-debate.md'));
      copy('cto-roast-command.md',   path.join(dest, '.claude', 'commands', 'cto-roast.md'));
      copy('cto-counter-command.md', path.join(dest, '.claude', 'commands', 'cto-counter.md'));
    },
    usage: 'Gõ `use cto` hoặc `/cto-debate`, `/cto-roast` trong Claude Code',
  },
  cursor: {
    label: 'Cursor',
    install(dest) {
      copy('cto-cursor.mdc', path.join(dest, '.cursor', 'rules', 'cto.mdc'));
    },
    usage: 'Tag `@cto` trong Cursor chat',
  },
  antigravity: {
    label: 'Antigravity',
    install(dest) {
      copy('cto-antigravity.md', path.join(dest, '.antigravity', 'skills', 'cto.md'));
    },
    usage: 'Tag `@cto` trong Antigravity chat',
  },
  windsurf: {
    label: 'Windsurf',
    install(dest) {
      copy('cto-cursor.mdc', path.join(dest, '.windsurf', 'rules', 'cto.md'));
    },
    usage: 'Tag `@cto` trong Windsurf chat',
  },
  copilot: {
    label: 'GitHub Copilot',
    install(dest) {
      copy('cto-cursor.mdc', path.join(dest, '.github', 'copilot-instructions.md'));
    },
    usage: 'Copilot sẽ tự áp dụng khi chat trong repo',
  },
};

// Alias
TOOLS.all = null;

// ── Helper ────────────────────────────────────────────────────────────────────
function copy(srcFile, destPath) {
  const src = path.join(SKILLS_DIR, srcFile);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.copyFileSync(src, destPath);
  console.log(`  ${GREEN}✓${RESET} ${destPath}`);
}

function getDestDir() {
  if (isGlobal) return os.homedir();
  return process.cwd();
}

function showHelp() {
  console.log(`
${BOLD}ceeteeoo${RESET} — CTO Roleplay Training Installer

${BOLD}Usage:${RESET}
  ceeteeoo init --ai <tool>

${BOLD}Options:${RESET}
  --ai <tool>   Tool để cài: claude, cursor, antigravity, windsurf, copilot, all
  --global      Cài global (mọi project). Mặc định: project-local

${BOLD}Examples:${RESET}
  ceeteeoo init --ai claude          # project-local
  ceeteeoo init --ai claude --global # global
  ceeteeoo init --ai all             # tất cả tools, project-local
  ceeteeoo init --ai all --global    # tất cả tools, global
`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
if (!command || command === 'help' || args.includes('--help')) {
  showHelp();
  process.exit(0);
}

if (command !== 'init') {
  console.error(`Unknown command: ${command}`);
  showHelp();
  process.exit(1);
}

if (!aiFlag) {
  console.error('Missing --ai flag. Example: ceeteeoo init --ai claude');
  showHelp();
  process.exit(1);
}

const dest = getDestDir();
const scopeLabel = isGlobal ? `global (${dest})` : `project-local (${dest})`;

console.log(`\n${BOLD}Cê Tê Ô Skills — Installer${RESET}`);
console.log(`Scope: ${CYAN}${scopeLabel}${RESET}\n`);

const toolsToInstall = aiFlag === 'all'
  ? Object.keys(TOOLS).filter(k => k !== 'all')
  : [aiFlag];

for (const tool of toolsToInstall) {
  const config = TOOLS[tool];
  if (!config) {
    console.error(`Tool không hợp lệ: ${tool}`);
    console.error(`Các tool hỗ trợ: ${Object.keys(TOOLS).join(', ')}`);
    process.exit(1);
  }
  console.log(`${BOLD}${config.label}:${RESET}`);
  config.install(dest);
  console.log(`  ${YELLOW}Dùng:${RESET} ${config.usage}\n`);
}

console.log(`${GREEN}${BOLD}Cài đặt xong!${RESET}`);
console.log(`\n  Đóng góp câu mẫu: https://github.com/nguyenphp/ceeteeoo-skills\n`);
