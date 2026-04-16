#!/usr/bin/env bash
set -e

REPO="nguyenphp/ceeteeoo-skills"
BASE_URL="https://raw.githubusercontent.com/$REPO/main"
BOLD="\033[1m"
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
CYAN="\033[0;36m"
RESET="\033[0m"

echo ""
echo -e "${BOLD}  Cê Tê Ô Skills — Installer${RESET}"
echo -e "  CTO Roleplay Training cho Claude Code / Cursor / Antigravity"
echo ""

# ── 1. Global hay Project-local? ─────────────────────────────────────────────
echo -e "${BOLD}Cài ở đâu?${RESET}"
echo "  [1] Global — dùng được trong mọi project (mặc định)"
echo "  [2] Project-local — chỉ project hiện tại ($(pwd))"
echo ""
read -rp "Chọn [1/2, Enter = 1]: " scope_choice
scope_choice="${scope_choice:-1}"

if [[ "$scope_choice" == "2" ]]; then
  CLAUDE_DIR=".claude"
  CURSOR_DIR=".cursor"
  ANTIGRAV_DIR=".antigravity"
  SCOPE_LABEL="project-local ($(pwd))"
else
  CLAUDE_DIR="$HOME/.claude"
  CURSOR_DIR="$HOME/.cursor"
  ANTIGRAV_DIR="$HOME/.config/antigravity"
  SCOPE_LABEL="global (~/.claude, ~/.cursor, ...)"
fi

echo ""
echo -e "  Scope: ${CYAN}${SCOPE_LABEL}${RESET}"
echo ""

# ── 2. Chọn tool ──────────────────────────────────────────────────────────────
echo -e "${BOLD}Cài cho tool nào?${RESET}"
echo "  [1] Claude Code (agents + commands)"
echo "  [2] Cursor (rules)"
echo "  [3] Antigravity (skills)"
echo "  [4] Tất cả"
echo ""
read -rp "Chọn [1/2/3/4, Enter = 4]: " tool_choice
tool_choice="${tool_choice:-4}"

echo ""

# ── Helper ────────────────────────────────────────────────────────────────────
download() {
  local dest="$1" src="$2"
  mkdir -p "$(dirname "$dest")"
  if command -v curl &>/dev/null; then
    curl -fsSL "$src" -o "$dest"
  elif command -v wget &>/dev/null; then
    wget -qO "$dest" "$src"
  else
    echo "  Cần cài curl hoặc wget để tải file." && exit 1
  fi
  echo -e "  ${GREEN}✓${RESET} $dest"
}

# ── Claude Code ───────────────────────────────────────────────────────────────
install_claude() {
  echo -e "${BOLD}Claude Code:${RESET}"
  download "$CLAUDE_DIR/agents/cto.md"           "$BASE_URL/.claude/agents/cto.md"
  download "$CLAUDE_DIR/agents/cto-quotes.md"    "$BASE_URL/.claude/agents/cto-quotes.md"
  download "$CLAUDE_DIR/commands/cto-debate.md"  "$BASE_URL/.claude/commands/cto-debate.md"
  download "$CLAUDE_DIR/commands/cto-roast.md"   "$BASE_URL/.claude/commands/cto-roast.md"
  echo ""
  echo -e "  ${YELLOW}Dùng:${RESET} gõ \`use cto\` hoặc \`/cto-debate\`, \`/cto-roast\` trong Claude Code"
  echo ""
}

# ── Cursor ────────────────────────────────────────────────────────────────────
install_cursor() {
  echo -e "${BOLD}Cursor:${RESET}"
  download "$CURSOR_DIR/rules/cto.mdc" "$BASE_URL/.cursor/rules/cto.mdc"
  echo ""
  echo -e "  ${YELLOW}Dùng:${RESET} tag \`@cto\` trong Cursor chat"
  echo ""
}

# ── Antigravity ───────────────────────────────────────────────────────────────
install_antigravity() {
  echo -e "${BOLD}Antigravity:${RESET}"
  # Global path on Antigravity follows ~/.gemini/antigravity/skills/ convention
  local ag_skills_dir
  if [[ "$scope_choice" == "2" ]]; then
    ag_skills_dir=".antigravity/skills"
  else
    ag_skills_dir="$HOME/.gemini/antigravity/skills"
  fi
  mkdir -p "$ag_skills_dir"
  download "$ag_skills_dir/cto.md" "$BASE_URL/.antigravity/skills/cto.md"
  echo ""
  echo -e "  ${YELLOW}Dùng:${RESET} tag \`@cto\` trong Antigravity chat"
  echo ""
}

# ── Run ───────────────────────────────────────────────────────────────────────
case "$tool_choice" in
  1) install_claude ;;
  2) install_cursor ;;
  3) install_antigravity ;;
  4) install_claude; install_cursor; install_antigravity ;;
  *) echo "Lựa chọn không hợp lệ." && exit 1 ;;
esac

echo -e "${GREEN}${BOLD}Cài đặt xong!${RESET}"
echo ""
echo "  Đóng góp câu mẫu mới:"
echo "  https://github.com/$REPO/blob/main/.claude/agents/cto-quotes.md"
echo ""
