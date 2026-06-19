---
title: "Instalar y configurar Claude Code"
description: "Cómo instalar Claude Code en tu sistema, autenticarte, y hacer los ajustes iniciales para empezar a trabajar."
pubDate: 2026-06-19
tags: ["Claude Code", "instalación", "CLI"]
orden: 2
modulo: "Módulo 1: Fundamentos"
draft: false
---

Claude Code es una CLI (Command Line Interface) que convierte tu terminal en un entorno de programación asistido por IA. Esta lección cubre la instalación y configuración inicial.

## Requisitos previos

- **Node.js 18 o superior** — Claude Code se instala vía npm
- **Una cuenta de Anthropic** — con plan Pro, Max, o créditos de API
- **Terminal** — cualquier terminal moderno (bash, zsh, PowerShell)

## Instalación

```bash
npm install -g @anthropic-ai/claude-code
```

Verifica la instalación:

```bash
claude --version
```

## Autenticación

Claude Code usa tu cuenta de Claude.ai. Al ejecutarlo por primera vez:

```bash
claude
```

Se abrirá tu navegador para autorizar la conexión. Tras autenticarte, el token se guarda localmente y no necesitas repetir el proceso.

Para autenticación con API key directamente:

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
claude
```

## Configuración inicial recomendada

El archivo de configuración principal está en `~/.claude/settings.json`. Configuraciones útiles:

```json
{
  "theme": "dark",
  "effortLevel": "medium"
}
```

**`effortLevel`** controla cuánto "piensa" Claude antes de responder:
- `low` — respuestas rápidas
- `medium` — balance (recomendado)
- `high` — más reflexivo, ideal para tareas complejas
- `xhigh` — máximo razonamiento

## Primer uso: modo interactivo

Navega a cualquier directorio con código y ejecuta:

```bash
cd mi-proyecto
claude
```

Claude leerá el contexto del proyecto automáticamente (archivos, git history, CLAUDE.md si existe).

## CLAUDE.md: instrucciones del proyecto

Puedes crear un archivo `CLAUDE.md` en la raíz de tu proyecto para darle contexto permanente a Claude:

```markdown
# Mi Proyecto

## Stack
- Node.js + TypeScript
- PostgreSQL

## Convenciones
- Usa camelCase para variables
- Tests con Vitest
- No commitear sin tests
```

Claude leerá este archivo al inicio de cada sesión en ese directorio.

---

**Siguiente lección:** [Comandos básicos y flujo de trabajo →](/curso/03-comandos-basicos/)
