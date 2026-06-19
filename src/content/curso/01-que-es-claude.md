---
title: "¿Qué es Claude? Introducción al asistente de Anthropic"
description: "Primera lección del curso. Qué es Claude, en qué se diferencia de otros LLMs, la familia de modelos y cómo acceder a él."
pubDate: 2026-06-19
tags: ["Claude", "introducción", "Anthropic"]
orden: 1
modulo: "Módulo 1: Fundamentos"
draft: false
---

Claude es el asistente de inteligencia artificial desarrollado por **Anthropic**, una empresa de seguridad en IA fundada en 2021 por ex-miembros de OpenAI, entre ellos Dario y Daniela Amodei.

## Qué lo distingue

Anthropic diseña Claude con un enfoque en **seguridad y fiabilidad**. Esto se traduce en:

- **Constitutional AI**: Claude se entrena con principios éticos explícitos, no solo con feedback humano.
- **Ventana de contexto grande**: los modelos actuales (Sonnet, Opus) manejan hasta 200.000 tokens de contexto — equivalente a un libro entero.
- **Menor tendencia a alucinaciones** en tareas de análisis de documentos y código.

## La familia de modelos

Anthropic organiza sus modelos en tres niveles según capacidad y velocidad:

| Modelo | Uso principal | Velocidad |
|---|---|---|
| **Haiku** | Tareas rápidas, baratas | Muy rápido |
| **Sonnet** | Equilibrio capacidad/coste | Rápido |
| **Opus** | Máxima capacidad | Más lento |

La versión actual usada en Claude Code es **Sonnet 4.6**. Para tareas muy complejas puedes cambiar a Opus 4.8.

## Cómo acceder a Claude

Existen varias formas de usar Claude:

1. **Claude.ai** — Interfaz web. Planes Free, Pro y Max.
2. **Claude Code CLI** — Terminal. Pensado para programación y automatización.
3. **API de Anthropic** — Para integrar Claude en tus propias aplicaciones.
4. **Claude Cowork** — Entorno colaborativo con agentes especializados (en desarrollo).
5. **Extensiones IDE** — VS Code, JetBrains.

## Por qué este curso usa Claude Code

Claude Code es la herramienta más potente del ecosistema para usuarios técnicos. Permite que Claude ejecute código, modifique archivos, use herramientas externas (MCP) y opere de forma autónoma en proyectos reales. A lo largo de este curso aprenderás a sacarle el máximo partido.

---

**Siguiente lección:** [Instalar y configurar Claude Code →](/curso/02-instalar-claude-code/)
