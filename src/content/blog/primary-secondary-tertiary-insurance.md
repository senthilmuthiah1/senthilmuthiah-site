---
title: "Primary, Secondary and Tertiary Insurance: Who Pays First?"
date: 2026-10-23T12:00:00
summary: "When a patient has two or three insurance plans, only one can pay first. A beginner's guide to the rules that decide the order — and how the second claim is sent."
tags: [Billing, RCM, Insurance]
draft: false
---

*Part of my beginner series on US medical billing. No healthcare background needed.*

Most patients have one insurance plan. But many have **two**, and some have **three**. For example:

- a married person covered by their own job's plan **and** their spouse's plan
- a 70-year-old with **Medicare** and a plan from their old employer
- a child covered by **both parents'** plans

When this happens, the insurers don't each pay the full bill. They take turns, in a fixed order:

- **Primary** — pays first
- **Secondary** — pays second, from what's left
- **Tertiary** — pays third, if there's a third plan

Deciding that order is called **coordination of benefits (COB)**. Get it wrong, and the claim is denied — or worse, paid and later taken back.

(New to *allowed amount* and *in-network*? Read [US Health Insurance Basics](/blog/health-insurance-basics/) first.)

## How it works: Anna's two plans

Anna works and has **BlueHealth** through her job. Her husband David's job gives the family **StarCare**, so Anna is on that plan too.

Anna sees Dr. Lee. The visit costs $150.

![A claim goes to the primary insurer first, then the balance goes to the secondary insurer](/images/posts/primary-secondary-flow.svg)

1. **BlueHealth is primary**, because it comes from Anna's own job. Dr. Lee bills BlueHealth first.
2. BlueHealth's agreed price is $100. It pays **$80** and says Anna's share is $20. The other $50 is written off.
3. Dr. Lee now sends a **second claim to StarCare** for the $20, along with the details of what BlueHealth paid.
4. StarCare pays the **$20**. Anna owes **nothing**.

The secondary insurer doesn't always pay the whole balance — it follows its own plan rules. But it often covers most of what the patient would otherwise owe. That's why people keep a second plan.

## The rules: who is primary?

You can't simply ask the patient which insurance they *prefer* — insurance isn't like choosing which credit card to use. The order is set by rules. These are the common ones:

### 1. Your own plan comes before your spouse's

If a person has insurance from **their own job**, that plan is primary. Coverage as someone's **spouse** or **dependent** is secondary.

→ That's why BlueHealth (Anna's job) pays before StarCare (David's job).

### 2. Children: the birthday rule

If a child is covered by both parents, the plan of the parent whose **birthday comes earlier in the year** is primary. Only the month and day count — not the year, and not who is older.

> Anna's birthday is **12 March**. David's is **5 July**. Anna's birthday comes first in the year, so for their daughter **Mia**, Anna's BlueHealth is primary and David's StarCare is secondary.

### 3. Children of separated or divorced parents

- If a **court order** says which parent provides insurance, that plan is primary.
- Otherwise, the order is usually: the plan of the parent the child **lives with**, then that parent's new spouse, then the other parent.

In practice, ask the parent bringing the child for a copy of the court order, or call the insurers — this is where billing gets complicated.

### 4. Medicare and a job-based plan

It depends on whether the person (or their spouse) is **still working**:

| Situation | Primary | Secondary |
|---|---|---|
| Retired, with a plan from an old employer | **Medicare** | Retiree plan |
| Still working, employer has **20 or more** employees | **Employer plan** | Medicare |
| Still working, employer has **fewer than 20** employees | **Medicare** | Employer plan |
| Covered by a working spouse's plan (20+ employees) | **Spouse's plan** | Medicare |

There are extra rules for people on Medicare because of a **disability** (the employer-size limit is 100) or **kidney failure** (the job-based plan pays first for the first 30 months). When unsure, the billing team checks with Medicare — Medicare keeps its own record of who should pay first.

### 5. Medicaid always pays last

If a patient has **Medicaid** and any other insurance, the other insurance pays first. Medicaid is the **payer of last resort**.

### 6. Injuries: workers' comp and auto insurance first

If the visit is for a **work injury**, workers' compensation pays — not the patient's health plans. For a **car accident**, the auto insurance usually pays first. (See [Types of US Health Insurance](/blog/types-of-health-insurance/).)

## Sending the secondary claim

Once the primary insurer has paid, the office sends a **new claim** to the secondary insurer. It's the same visit and the same codes, but it also includes:

- what the primary insurer was billed
- what it allowed and what it paid
- why the rest wasn't paid (for example, "patient's coinsurance")

The secondary insurer needs this to work out its own payment. For a tertiary insurer, the claim carries the details from **both** earlier payers.

> **Technical name:** on paper, the office attaches a copy of the primary insurer's **EOB** to a new CMS-1500. Electronically, the payment details go inside the **837** claim file, copied from the primary insurer's **835** payment file. Some insurers do this automatically — for example, Medicare often forwards claims straight to a patient's supplement plan or Medicaid. This is called a **crossover**.

## Common mistakes

- **Billing the wrong plan first.** The secondary insurer denies the claim because it should have been second. Time is lost — and timely-filing deadlines keep running.
- **Not updating the order.** A patient retires, turns 65, or a spouse changes jobs. The order changes, but the office's records don't.
- **Skipping the primary when a service isn't covered.** Even if the primary plan won't pay for something, it usually has to be billed first. The secondary insurer wants to see the primary's denial before it pays.
- **Not asking at check-in.** A simple question — "Do you have any other insurance?" — prevents most of these problems. Medicare patients are asked a standard set of questions for this.

## The one thing to remember

**The rules decide the order, not the patient.** Ask about all insurance at every visit, put the plans in the right order before billing, and always send the secondary claim with the primary's payment details.

## Words you'll hear

| Word | Meaning |
|---|---|
| **Primary / secondary / tertiary** | The first, second and third insurer to pay |
| **Coordination of benefits (COB)** | The rules for deciding the order, and making sure no one pays twice |
| **Birthday rule** | For children, the parent whose birthday is earlier in the year has the primary plan |
| **Payer of last resort** | An insurer that pays only after all others — Medicaid |
| **Crossover** | When the primary insurer forwards the claim to the secondary automatically |
| **Medicare Secondary Payer (MSP)** | Medicare's rules for when another plan pays before Medicare |

<!-- Senthil: optional — add a short real story, e.g. a COB mix-up you've seen (patient turned 65, spouse changed jobs) and how it was fixed, or how your software handles secondary claims. -->

## Next in this series

- **Previous:** [Types of US Health Insurance](/blog/types-of-health-insurance/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- **Next:** [Insurance Verification](/blog/insurance-verification/) — the checklist every front desk needs

*Automating secondary and tertiary claims is one of the trickiest parts of billing software — and one I've worked on for years. Need help with it, or training for your team? [Get in touch](/#contact).*
