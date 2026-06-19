---
title: "Agent Finder de GitHub Copilot: qué significa para usuarios de Claude"
description: "GitHub lanza Agent Finder para descubrir MCP servers y skills bajo demanda. Cómo afecta a quienes combinan Claude Code con GitHub Copilot."
pubDate: 2026-06-18
tags: ["Claude Code", "MCP", "GitHub"]
draft: false
---

GitHub anunció el 17 de junio de 2026 que **Agent Finder para GitHub Copilot ya está disponible**. Permite describir una tarea en lenguaje natural y buscar en un catálogo de recursos de IA —MCP servers, skills, agentes— para devolver coincidencias que Copilot puede usar bajo demanda.

## Por qué importa para usuarios de Claude

Si usas **Claude Code con MCP servers** (como los conectores de Gmail, Todoist o Slack), el problema que resuelve Agent Finder te resulta familiar: cuantos más servidores MCP tienes configurados, más difícil es decidir cuáles cargar para cada tarea sin saturar el contexto.

Agent Finder propone un modelo de **descubrimiento bajo demanda** en lugar de precargar todo. Claude Code va en la misma dirección: puedes conectar MCPs específicos por sesión en lugar de activarlos globalmente.

## Diferencias con el enfoque de Claude Code

| | Agent Finder (Copilot) | Claude Code |
|---|---|---|
| Descubrimiento | Catálogo centralizado | MCPs en settings.json |
| Activación | Bajo demanda por tarea | Por sesión o global |
| Control | Políticas de organización | Por usuario |

## Qué hacer

Si usas ambas herramientas (Copilot + Claude Code), este movimiento de GitHub confirma la tendencia: los agentes del futuro tendrán **catálogos, registros y políticas de descubrimiento**. Conviene revisar tu configuración de MCPs en Claude Code y mantenerlos organizados y documentados.

---

*Fuente primaria: [GitHub Changelog](https://github.blog/changelog/2026-06-17-agent-finder-for-github-copilot-now-available)*
