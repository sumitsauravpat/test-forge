# Test Forge

![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-API%20%2B%20UI-2EAD33?logo=playwright&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-23D96C?logo=cucumber&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-flat%20config-4B32C3?logo=eslint&logoColor=white)

A hands-on test automation portfolio project covering **REST API testing**, **BDD/Gherkin**, and **SQL** — built from first principles against a real, live API rather than toy examples, with every architectural decision made deliberately and explained, not copy-pasted from a template.

## Highlights

- **Two BDD architectures, one project.** The same test suite runs Gherkin two different ways: [`playwright-bdd`](https://github.com/vitalets/playwright-bdd) (Gherkin compiled into native Playwright tests) drives the API-layer scenarios, while traditional `@cucumber/cucumber` (manual World class, `Before`/`After` hooks, real browser lifecycle) drives a live UI scenario — demonstrating both integration patterns a BDD/Playwright role might expect, not just one.
- **Real negative-path coverage, not just happy paths.** Negative testing (invalid-input → clean 4xx, not a silent `200` or a crash), Scenario Outline + Examples (data-driven, same flow across multiple real inputs), Data Tables (structured multi-field input into a single step), and tag-based filtering (`@smoke` / `@regression`) are all built and verified against a live API — every one chosen because it maps to a real BDD concept worth demonstrating, not padding.
- **A real type-safety boundary at the API edge.** A dedicated mapping layer (`responseDetailsMapper.ts`, `itemQuoteMapper.ts`) translates the live server's actual response shape into this project's own types, so internal naming never has to match whatever the upstream API happens to call its fields — and a schema drift on the server's side fails loudly at the mapping boundary instead of silently producing `undefined` three files away.
- **Nothing sensitive ever touches git.** Every credential, internal correlation ID, and environment URL lives in a gitignored config layer (`.env`, `servicePlanValues.ts`) with a committed `.example` template documenting exactly what's needed — verified clean against the full commit history, not just the current file tree.
- **A real TypeScript pipeline, not just `.ts` file extensions.** Strict `tsconfig`, ESLint flat config + Prettier with no overlapping rules, `tsc --noEmit` as a standalone, CI-ready gate — all wired together and explained, not scaffolded and left untouched.

## Tech stack

| | |
|---|---|
| Language | TypeScript (strict mode) |
| API testing | Playwright `request` context |
| BDD — API layer | `playwright-bdd` |
| BDD — UI layer | `@cucumber/cucumber` + Playwright (manual World/hooks lifecycle) |
| UI automation | Playwright (Chromium) |
| Linting / formatting | ESLint (flat config) + Prettier |
| SQL | SQLite *(in progress)* |

## What's covered

### REST API testing
Playwright's `request` context exercises a real telecom sales-quote API end to end: HTTP method semantics, status codes, request chaining (patch a resource → extract its generated ID → fetch it back → assert the two responses agree), and negative testing against real invalid input. A response-mapping layer keeps this project's own types stable regardless of the live API's actual field names.

### BDD / Gherkin
Five Gherkin scenarios (six real executions, since one uses a Scenario Outline) across the API and UI layers, covering:
- Given/When/Then fundamentals, with step definitions genuinely reused across scenarios wherever the wording matches
- Scenario Outline + Examples (the same flow run against multiple real inputs)
- Data Tables (structured multi-field input into a single step)
- Negative testing as its own first-class scenario, not an afterthought
- Tags (`@smoke` / `@regression`), demonstrated with real filtered runs
- A full traditional-Cucumber setup from scratch — custom World class, `Before`/`After`/`BeforeAll`/`AfterAll` hook lifecycle, real browser automation against a live public page — alongside the more modern `playwright-bdd` approach used for the API scenarios

### SQL
Coming next — a lighter-weight pass covering joins, aggregations, and common interview-style queries, seeded with realistic data in SQLite.

## Project structure

```
test-forge/
├── features/
│   ├── api/                 # Gherkin specs for the API-layer scenarios (playwright-bdd)
│   └── ui/                  # Gherkin spec for the UI-layer scenario (traditional Cucumber)
├── steps/
│   ├── api/                 # Step definitions for the API scenarios
│   └── ui/                  # Step definitions + hooks/World for the UI scenario
├── src/
│   ├── api/                 # Thin HTTP clients + response-mapping layer
│   ├── config/               # Typed, fail-fast environment config
│   ├── fixtures/             # Request bodies + the gitignored real-value lookup
│   └── types/                # Our own response/request types
├── tests/                    # Hand-written Playwright specs (non-BDD)
├── cucumber.js               # Traditional Cucumber config
└── playwright.config.ts      # Playwright + playwright-bdd config
```

## Running it locally

```bash
npm install
cp .env.example .env              # fill in your own credentials/URLs
cp src/fixtures/servicePlanValues.example.ts src/fixtures/servicePlanValues.ts  # fill in real values

npm run typecheck                 # tsc --noEmit
npm run lint                      # eslint .

npm run bddgen && npm test        # hand-written specs + playwright-bdd API scenarios
npm run test:ui                   # traditional Cucumber UI scenario
```

## Why this exists

A learning-focused project, built to develop genuine, durable understanding of how each of these testing disciplines actually works and why it exists in the industry — not just enough surface familiarity to answer an interview question. Every concept here was deliberately built from first principles, verified against a real system, and documented along the way.
