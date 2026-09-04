# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers evaluating Tobby Meng for software engineering internships and new-grad roles, at both large tech companies and startups. Secondary: engineers/collaborators who land on the link from GitHub or a referral. The primary job-to-be-done is a fast, credible read: "is this person worth an interview slot?" — evaluated in the first screenful, most likely on a laptop during a hiring sweep.

## Product Purpose

A personal portfolio homepage that makes the case for hiring Tobby as a software engineer. Success is a recruiter or engineer leaving convinced he's technically strong, has shipped real things, and is worth a conversation — and finding it easy to reach him or pull his resume/GitHub/LinkedIn.

## Positioning

The claim: ready for both big-tech rigor and startup speed, and genuinely passionate rather than just checking boxes. Evidence for this already exists in the real record — an incoming government SWE internship, a completed startup internship (Qwhery) building a full-stack spatial data platform, and self-directed projects (an autonomous debugging agent, a RAG search engine, a hardware+AI delirium-detection device) that a job never assigned him. No other portfolio can truthfully copy this specific combination of an EE degree, production internship experience, and unprompted systems-level side projects.

## Operating Context

A single-page scrolling site, visited cold (no login, no returning-user state). Typical visit is short and skimmable — a recruiter scanning, not reading closely. Must work well when linked from a resume PDF, LinkedIn, or GitHub profile, and hold up on both a widescreen recruiter's monitor and a phone (increasingly common for early-stage screening).

## Capabilities and Constraints

- Static content, no backend — all copy and data are read from `src/data/content.ts`.
- Real resume data only (education, work history, projects, skills) — nothing here may be fabricated, embellished into an untrue claim, or dated incorrectly. Visual treatment, layout, structure, and emphasis are otherwise fully open.
- Downloadable resume lives at `public/resume.pdf` and must stay linked/reachable.
- Contact surface: email (mengtobby@gmail.com), GitHub (github.com/mengtobby), LinkedIn (linkedin.com/in/tobby-meng).
- Deployed as a static build (Vite) — no server-side rendering, no dynamic routes.

## Brand Commitments

Name: Tobby Meng. No existing logo or fixed brand identity.

**Standing visual-direction preference (2026-09-02):** offered a rolled/challenger visual-world gamble (see the Impeccable skill's new-work direction process) versus the conventional category-standard editorial portfolio, the user explicitly chose the conventional route and delegated craft-bar selection: "use your judgement... you control the entire creative flow." Craft bar set against Rauno Freiberg's personal site (rauno.me — typographic precision, restrained motion), Josh Comeau's site (joshwcomeau.com — meticulous spacing rhythm and purposeful, non-gimmicky delight), and Linear's marketing site (linear.app — disciplined restraint, no wasted motion). Execute the canon at that fidelity: no gimmick worlds (no instrument panels, dashboards, or literal metaphors) unless the user asks for one later.

## Evidence on Hand

Real, verified project and experience data already lives in `src/data/content.ts`:
- Work history: Ontario Ministry of PBSD&P (incoming SWE intern), Qwhery Inc. (SWE intern, shipped a full-stack spatial data platform), Crania Schools (math teacher).
- Projects: Autonomous Infrastructure Agent (gRPC-based auto-debugging agent, Python/Docker/Redis), RAG Knowledge Base & Search Engine (Python/FastAPI/React/PostgreSQL/pgvector), AI-Assisted Delirium Detection System (Arduino + Python + GPT hardware project).
- Skills list and resume PDF (`public/resume.pdf`) are current and accurate as of the last resume upload.
No testimonials, press, or case-study detail beyond what's in content.ts exists — none should be invented.

## Product Principles

1. Credibility first: real, specific engineering detail (what was built, what it does, what stack) beats generic self-description every time.
2. Skimmable in seconds: a recruiter should get the pitch without reading paragraphs — hierarchy and scannability outrank density.
3. Big-tech rigor + startup speed + genuine passion is the throughline; every section should reinforce at least one of those three, not dilute them with unrelated filler.
4. Never fabricate or inflate a fact to make the story better — the real record is already strong enough.
5. Frictionless contact: resume, GitHub, LinkedIn, and email should never be more than one click away.

## Accessibility & Inclusion

No project-specific requirement beyond baseline web accessibility (keyboard navigation, sufficient color contrast, no hover-only critical content) — general best practice applies since no user-specific need was raised.
