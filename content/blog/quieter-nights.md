---
title: Quieter nights with alert grouping
date: 2026-11-06
summary: Relay now folds duplicate alerts into one page, so a flapping check wakes you up once instead of forty times.
image: /images/quieter-nights.svg
---

A single flapping health check used to send a page every time it failed. On a bad night that meant dozens of notifications for one problem.

## How grouping works

Relay looks at the service, the check, and the error fingerprint. Alerts that match within a five-minute window join the open incident instead of starting a new one. You get one page, and the incident timeline shows every occurrence.

## Tuning it

The window is configurable per service. Teams with noisy checks tend to raise it to fifteen minutes; teams with strict SLAs often keep it short.
