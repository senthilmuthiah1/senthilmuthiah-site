---
title: "Denials and A/R Follow-Up: Getting Every Claim Paid"
date: 2026-10-23T23:58:40
summary: "What accounts receivable and aging mean, how billing teams follow up on unpaid claims, how to work and appeal denials, and the numbers that show whether billing is healthy — for complete beginners."
tags: [Billing, RCM, Denials, AR]
draft: false
faq:
  - q: "What is A/R in medical billing?"
    a: "A/R, or accounts receivable, is the money owed to a clinic for care it has already given — by insurance companies (insurance A/R) and by patients (patient A/R)."
  - q: "What is A/R aging?"
    a: "Aging groups unpaid claims by how long they have been open, usually in 30-day buckets: 0–30, 31–60, 61–90, 91–120 and over 120 days. Older claims are harder to collect and are worked first."
  - q: "What is A/R follow-up?"
    a: "A/R follow-up is checking on claims that have not been paid — by looking up their status, calling or using the insurer's website — and taking action to get them paid."
  - q: "What is denial management?"
    a: "Denial management is finding denied claims, sorting them by cause, fixing or appealing them, tracking the results, and fixing the root causes so the same denials stop happening."
  - q: "How many levels of appeal are there?"
    a: "Most commercial insurers have one or two internal appeal levels, followed by an independent external review. Medicare has five levels, starting with a redetermination by the Medicare contractor."
  - q: "What is days in A/R?"
    a: "Days in A/R is roughly how many days, on average, it takes the clinic to get paid. It is calculated by dividing total A/R by the average daily charges. Lower is better."
  - q: "What is a clean claim rate?"
    a: "The clean claim rate is the percentage of claims accepted and paid the first time, without being rejected, denied or corrected. Higher is better."
  - q: "What happens if a claim is never followed up?"
    a: "It may never be paid. Once the insurer's filing or appeal deadline passes, the money is usually lost for good and has to be written off."
---

*Part of my beginner series on US medical billing. No healthcare background needed.*

Sending a claim is only half the job. Some claims are paid quickly. Some are **denied**. Some are simply **never answered**. A billing team's daily work is making sure **every one** ends up paid — or properly closed.

This work is called **A/R follow-up** and **denial management**. This post brings together much of the series, so links to earlier posts are everywhere.

## What is A/R?

**A/R** means **accounts receivable** — money **owed** to the clinic for care it has **already given**.

- **Insurance A/R** — owed by insurance companies.
- **Patient A/R** — owed by patients.

Think of a shop that lets regular customers pay at the end of the month. The money they owe is the shop's "receivables". If the shop never chases it, some of it is never paid.

## Aging: how old is each claim?

Billing teams group unpaid claims by **how long they've been open**. This is called **aging**:

![Unpaid insurance claims in five age groups — the older the claim, the harder it is to collect](/images/posts/ar-aging.svg)

Why it matters:

- **0–30 days** — normal. Most claims are paid within this time.
- **31–60 and 61–90 days** — something may be wrong. Check them.
- **Over 90 days** — urgent. Filing and appeal **deadlines** may be close.
- **Over 120 days** — every day reduces the chance of being paid.

**A healthy clinic has most of its A/R in the first group, and very little over 90 days.**

## A/R follow-up: chasing unpaid claims

Every day, the team works a **list** of unpaid claims — usually starting with the **oldest** and the **largest**.

For each claim, the question is: **why hasn't it been paid?**

| What you find | What it means | Next step |
|---|---|---|
| No record of the claim | It never arrived, or was [rejected](/blog/rejection-vs-denial/) | Check acknowledgements; fix and send again |
| Still processing | The insurer is reviewing it, or needs information | Send what they need; set a date to check again |
| Paid | The payment wasn't posted | Find the payment and [post it](/blog/payment-posting/) |
| Denied | The insurer said no | Work the denial — see below |
| Paid less than expected | A possible underpayment | Compare with the contract; appeal if wrong |

### How to check a claim's status

- **Electronically** — a claim status request (the **276**, answered by a **277**). (See [X12 EDI Transactions](/blog/x12-edi-transactions/).)
- **On the insurer's website** — most have a provider portal.
- **By phone** — when nothing else works.

### A typical status call

> **Biller:** Hi, I'm calling from Lee Family Clinic about a claim. Our NPI is 1999999992.
>
> **Insurer:** Patient's name, date of birth and member ID?
>
> **Biller:** Anna Smith, 12 March 1990, BHX482913557. Date of service 14 October.
>
> **Insurer:** We received it on 16 October. It's pending — we're waiting for the patient to confirm whether she has other insurance.
>
> **Biller:** Thank you. Can I have your name and a reference number for this call?

The billing team then **contacts Anna** to update her other-insurance details with BlueHealth — and notes a date to **check again**. Every call ends with a **reference number** and a **next step**.

## Denial management

When a claim is denied, the team works it through a simple loop:

![The denial management cycle: find, sort, fix, track, prevent](/images/posts/denial-cycle.svg)

### 1. Find

Read every **EOB**, **ERA** and **277CA** — daily. A denial nobody sees is a denial nobody fixes. (See [How to Read an EOB](/blog/how-to-read-an-eob/).)

### 2. Sort by cause

Group each denial by **where** the problem started:

| Cause | Examples |
|---|---|
| **Front desk** | Inactive insurance, wrong member ID, wrong insurer order, no referral |
| **Authorization** | No prior authorization, or it expired |
| **Coding** | Wrong code, missing modifier, diagnosis doesn't support the service |
| **Billing** | Duplicate, filing deadline missed, missing information |
| **Insurer** | The insurer made a mistake |

### 3. Fix

- **Our mistake?** → send a [corrected claim](/blog/corrected-claims/).
- **Wrong insurer or order?** → bill the right one. (See [Primary and Secondary](/blog/primary-secondary-tertiary-insurance/).)
- **Insurer's mistake?** → **appeal**.
- **Can't be fixed?** → bill the patient if allowed, or **write it off** with a clear reason.

### 4. Track

Note the action and a **follow-up date**. Check that the fix actually got paid.

### 5. Prevent

This is the step most teams skip — and the one that saves the most money. If **20** claims were denied for "no authorization" this month, the fix isn't 20 appeals. It's a better **authorization check** at the front desk.

## Appeals

An **appeal** asks the insurer to **change its decision**. A good appeal is short and clear:

- **Which claim** — patient, date of service, the insurer's claim number
- **What** you're asking for — "Please pay line 2 for CPT 17110"
- **Why** — the reason the denial is wrong
- **Proof** — doctor's notes, the authorization approval, the referral

Insurers have **levels** of appeal:

- **Commercial insurers** — usually one or two internal levels, then an **independent external review**.
- **Medicare** — **five** levels, starting with a **redetermination** by the Medicare contractor, which must usually be requested within **120 days** of the decision.

Every level has a **deadline**. Missing it usually ends the chance to be paid.

## The numbers that show billing is healthy

Billing managers watch a few key numbers. You'll hear them in any billing team:

| Measure | What it shows | Better is… |
|---|---|---|
| **Days in A/R** | How long, on average, it takes to get paid | Lower |
| **A/R over 90 days** | How much money is getting old | Lower |
| **Clean claim rate** | Claims paid the first time, without problems | Higher |
| **Denial rate** | Share of claims denied | Lower |
| **Net collection rate** | How much of what *could* be collected actually was | Higher |

Good targets vary by specialty and insurer mix, but the direction is always the same: **get paid faster, with fewer problems**.

## Common mistakes

- **Working only new claims** and letting old ones age.
- **Waiting for denials to arrive** instead of following up on claims with **no answer**.
- **Appealing everything** — even denials caused by the clinic's own mistakes.
- **Fixing claims one by one** without fixing the **cause**.
- **Missing deadlines** — filing, correction and appeal.
- **Writing off too quickly** — or never writing off, so the A/R looks bigger than it really is.

> **How software helps:** billing software builds the follow-up lists for you — claims by age, by insurer, by denial reason — and reminds the team when to check again. [eClaimPilot](https://eclaimpilot.com/features) includes A/R aging, denial work lists, appeals and practice KPI dashboards. Step-by-step guides: [insurance aging follow-up](https://help.eclaimpilot.com/billing/followup/insurance-aging.html), [rejection follow-up](https://help.eclaimpilot.com/billing/followup/rejection-followup.html), [aging reports](https://help.eclaimpilot.com/billing/reports/aging.html) and [practice KPI reports](https://help.eclaimpilot.com/billing/reports/kpi.html).

## The one thing to remember

**Every claim stays on someone's list until it's paid or properly closed.** Work the oldest first, fix the cause of every repeated denial, and never miss a deadline.

## Words you'll hear

| Word | Meaning |
|---|---|
| **A/R** | Accounts receivable — money owed for care already given |
| **Aging** | Grouping unpaid claims by how long they've been open |
| **A/R follow-up** | Chasing unpaid claims until they're paid or closed |
| **Claim status** | Where a claim is in the insurer's process |
| **Denial management** | Finding, fixing and preventing denials |
| **Root cause** | The original reason a problem happened |
| **Appeal** | A formal request to change an insurer's decision |
| **Redetermination** | The first level of a Medicare appeal |
| **Days in A/R** | Average number of days to get paid |
| **Clean claim rate** | Share of claims paid the first time |
| **Net collection rate** | Share of collectible money actually collected |
| **Write-off** | An amount the clinic decides not to collect |

<!-- Senthil: optional — add a short real story, e.g. how a team cut 90+ day A/R by fixing one front-desk root cause, or your favorite A/R worklist layout. -->

## Next in this series

- **Previous:** [Types of Reimbursement](/blog/types-of-reimbursement/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- **Next:** [HIPAA Basics for Billing Staff](/blog/hipaa-basics-for-billing/)

*A/R clean-ups and denial-prevention projects are some of the most valuable work I do with billing teams. Want help with yours? [Get in touch](/#contact).*
