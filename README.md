# Galen Demo

Live interactive demo of the Galen Stethoscope for the Chip in Florida 2026 submission.

## What this is

A single-file HTML demo that simulates a full 8-second cardiac exam:
- Live phonocardiogram waveform drawing in real time
- On-device ML inference with probability bars building up
- FHIR R4 Observation streaming in character-by-character
- Physician-override toggle and copy-to-clipboard for the JSON record

Zero build step. Single HTML file served through a minimal Express wrapper.

## Local development

```bash
npm install
npm start
```

Open http://localhost:3000 in your browser.

## Railway deployment

This repo is configured for zero-friction Railway deployment:
- `server.js` — minimal Express server
- `package.json` — declares Express dependency + start script
- `railway.json` — explicit build config, health check, restart policy
- `.gitignore` — keeps `node_modules` out of Git

Railway will auto-detect Node.js, run `npm install`, then `npm start`. The `/health` endpoint returns 200 OK so Railway knows the service is alive.

## Routes

- `/` — the demo
- `/demo` — the demo (alias)
- `/health` — JSON health check

## Built by

Gabriel Cespedes · ARX Systems · Miami, FL · [arxsystems.org](https://arxsystems.org)
