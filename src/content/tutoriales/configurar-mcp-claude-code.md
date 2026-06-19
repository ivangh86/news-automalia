---
title: "Cómo configurar MCP servers en Claude Code"
description: "Guía paso a paso para conectar servidores MCP (Model Context Protocol) a Claude Code: qué son, cómo instalarlos y cómo gestionarlos por proyecto."
pubDate: 2026-06-19
tags: ["MCP", "Claude Code", "configuración"]
nivel: basico
draft: false
---

Los **MCP servers (Model Context Protocol)** son la forma en que Claude Code se conecta a herramientas externas: Gmail, Slack, Todoist, GitHub, bases de datos, y más. Esta guía explica cómo configurarlos.

## Qué es un MCP server

Un MCP server es un proceso que expone herramientas a Claude. Cuando lo conectas, Claude puede llamar a esas herramientas directamente desde la conversación, sin que tú tengas que copiar y pegar datos.

Ejemplo: con el MCP de Gmail, puedes pedirle a Claude que busque correos, redacte borradores o etiquete hilos.

## Dónde se configuran

Los MCP servers se definen en `~/.claude/settings.json` (nivel usuario) o en `.mcp.json` dentro de tu proyecto (nivel proyecto).

La diferencia clave:
- **`settings.json`**: MCPs disponibles en todas tus sesiones de Claude Code
- **`.mcp.json`**: MCPs disponibles solo en ese repositorio

## Cómo añadir un MCP server (stdio)

La mayoría de MCP servers locales son de tipo `stdio` — se lanzan como un proceso. Formato:

```json
{
  "mcpServers": {
    "mi-servidor": {
      "command": "npx",
      "args": ["-y", "@nombre/paquete-mcp"],
      "env": {
        "API_KEY": "tu-clave-aqui"
      }
    }
  }
}
```

Este bloque va dentro del archivo `.mcp.json` en la raíz de tu proyecto.

## Cómo añadir un MCP server HTTP (remoto)

Para servidores remotos (como los conectores de claude.ai):

```json
{
  "mcpServers": {
    "mi-servidor-remoto": {
      "type": "http",
      "url": "https://api.ejemplo.com/mcp"
    }
  }
}
```

## Verificar que funciona

Tras añadir el servidor, reinicia Claude Code. En la conversación puedes preguntar:

> "¿Qué herramientas tienes disponibles?"

Claude listará las herramientas del MCP activo.

## MCPs recomendados para empezar

| MCP | Uso | Paquete |
|---|---|---|
| GitHub | Issues, PRs, repos | `@modelcontextprotocol/server-github` |
| Filesystem | Leer/escribir archivos | `@modelcontextprotocol/server-filesystem` |
| Fetch | Acceder a URLs | `@modelcontextprotocol/server-fetch` |

## Seguridad: qué tener en cuenta

- **Nunca pongas API keys directamente en `.mcp.json` si el repo es público.** Usa variables de entorno del sistema.
- Revisa los permisos que pide cada MCP antes de instalarlo.
- Los MCPs de proyecto (`.mcp.json`) requieren aprobación explícita la primera vez.

---

*Documentación oficial: [modelcontextprotocol.io](https://modelcontextprotocol.io)*
