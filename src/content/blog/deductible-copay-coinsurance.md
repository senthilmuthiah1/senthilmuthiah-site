---
title: "Deductible, Copay and Coinsurance: How the Patient's Share Works"
date: 2026-10-23T23:56:20
summary: "A beginner's guide to the three ways patients share the cost of care — how each one works across a year, how it appears on the EOB, and what the billing team does next."
tags: [Billing, RCM, Insurance, Payments]
draft: false
faq:
  - q: "What is the difference between a deductible, a copay and coinsurance?"
    a: "A deductible is the amount the patient pays each year before insurance starts sharing costs. A copay is a fixed amount paid for a visit, such as $25. Coinsurance is a percentage of the cost, such as 20%, that the patient pays after the deductible."
  - q: "Do copays count toward the deductible?"
    a: "It depends on the plan. In many plans copays do not count toward the deductible, but they do count toward the yearly out-of-pocket maximum. Always check the patient's plan."
  - q: "What happens after the deductible is met?"
    a: "The insurance company starts sharing the cost. The patient usually pays only copays and coinsurance for the rest of the plan year, until they reach their out-of-pocket maximum."
  - q: "What is an out-of-pocket maximum?"
    a: "It is the most a patient has to pay for covered, in-network care in a plan year. After reaching it, the insurance pays 100% of covered costs for the rest of the year."
  - q: "What do PR-1, PR-2 and PR-3 mean on an EOB?"
    a: "They show the patient's share. PR means patient responsibility; reason code 1 is deductible, 2 is coinsurance and 3 is copay. The billing team bills that amount to the secondary insurance or to the patient."
  - q: "When does the deductible reset?"
    a: "Usually at the start of each plan year, often on 1 January. Patients typically pay more early in the year, before the deductible is met."
  - q: "Can a doctor waive the copay or coinsurance?"
    a: "Not routinely. Regularly waiving the patient's share can break insurance contracts and, for government plans like Medicare, may be treated as abuse. Exceptions such as genuine financial hardship should be documented."
---

*Part of my beginner series on US medical billing. No healthcare background needed.*

In [US Health Insurance Basics](/blog/health-insurance-basics/), we met three words: **deductible**, **copay** and **coinsurance**. They're the three ways a patient **shares the cost** of their care with their insurance company.

They're simple on their own. What confuses beginners is how they **work together over a year** — and how they show up on the insurer's payment statement. This post covers both.

## The three, in one sentence each

| Word | In one sentence | Example |
|---|---|---|
| **Deductible** | What the patient pays **first**, each year, before insurance starts sharing | The first $1,000 of the year |
| **Copay** | A **fixed amount** for a visit | $25 for every doctor visit |
| **Coinsurance** | A **percentage** of the cost, after the deductible | Patient pays 20%, insurance pays 80% |

Think of a gym membership with a joining fee. The **deductible** is like the joining fee — you pay it once before the benefits start. The **copay** is like a small fee for each class. The **coinsurance** is like splitting the cost of a personal trainer: you pay part, the gym pays part.

## How they work across a year

Let's follow **Anna** through a year with her **BlueHealth** plan:

- **Deductible:** $1,000 a year
- **Copay:** $25 for a doctor visit (in her plan, office visits use a copay instead of the deductible)
- **Coinsurance:** 20% after the deductible
- **Out-of-pocket maximum:** $5,000 a year

All amounts below are BlueHealth's **allowed amounts** — the agreed prices, not the doctor's full charges.

![Who pays what across three of Anna's visits, and how her deductible fills up](/images/posts/deductible-copay-coinsurance.svg)

**Visit 1 — an MRI in February (allowed: $800).**
Anna hasn't paid anything toward her deductible yet this year. So she pays the **whole $800**. BlueHealth pays **$0**. Her deductible is now $800 of $1,000 used.

**Visit 2 — a doctor visit in March (allowed: $100).**
Office visits use a **copay** in Anna's plan. She pays **$25**. BlueHealth pays **$75**.

**Visit 3 — a scan in May (allowed: $500).**
Anna still has **$200** of her deductible left. So:
- she pays the remaining **$200** deductible
- the other **$300** is shared: Anna pays **20% = $60**, BlueHealth pays **80% = $240**
- Anna pays **$260** in total

**For the rest of the year**, Anna's deductible is used up. She pays only copays and 20% coinsurance — until she has paid **$5,000** in total. After that, BlueHealth pays **100%** of covered care until the new plan year starts.

> **Important:** every plan is different. Some plans apply the deductible to office visits too. Some have no deductible at all. Some charge coinsurance *and* a copay. That's why the front desk checks each patient's benefits before the visit. (See [Insurance Verification](/blog/insurance-verification/).)

## Why the time of year matters

Deductibles usually **reset** at the start of the plan year — often **1 January**. So:

- In **January**, many patients haven't paid any deductible. They owe **more** for each visit.
- By **autumn**, many have met their deductible. They owe **less**.

For a clinic, this means patient balances are usually **highest early in the year**. Good offices collect what they can at the visit, rather than waiting to send a bill.

## How the patient's share appears on the EOB

When the insurer pays a claim, its **Explanation of Benefits (EOB)** shows the patient's share on each line, with a short code. Here's Anna's visit 3:

| Billed | Allowed | Paid | Adjustment | Code |
|---|---|---|---|---|
| $650 | $500 | $240 | $150 | **CO-45** — over the agreed price, written off |
| | | | $200 | **PR-1** — deductible |
| | | | $60 | **PR-2** — coinsurance |

Two letters tell you **who** is responsible for each adjustment:

- **CO** — *contractual obligation*: the provider writes it off. It's the difference between the doctor's charge and the agreed price. The patient **can't** be billed for it.
- **PR** — *patient responsibility*: the patient (or their secondary insurance) owes it.

And the number tells you **why**:

| Code | Means | Example |
|---|---|---|
| **PR-1** | Deductible | $200 |
| **PR-2** | Coinsurance | $60 |
| **PR-3** | Copay | $25 |

> **Technical name:** these are **group codes** (CO, PR) and **claim adjustment reason codes** (CARC 1, 2, 3, 45). In the electronic **835** file they appear in the **CAS** line of each service.

## What the billing team does next

For each patient-responsibility amount:

### PR-1 — Deductible

1. **Does the patient have a secondary insurance** that covers the primary's deductible? If yes, send the claim to the secondary.
2. If not, **bill the patient**.

### PR-2 — Coinsurance

1. **Send the claim to the secondary insurance**, if there is one — many secondary plans (like Medicare supplement plans) exist mainly to pay this.
2. If there's no secondary, **bill the patient**.

### PR-3 — Copay

1. Copays are usually **collected at check-in**. If it was collected, just match it to the claim.
2. If not, **bill the patient** — or the secondary, if it covers copays.

(See [Primary, Secondary and Tertiary Insurance](/blog/primary-secondary-tertiary-insurance/) for how the secondary claim is sent.)

## "Paid $0" because of the deductible is not a denial

Look again at Anna's MRI in visit 1:

| Billed | Allowed | Paid | Code |
|---|---|---|---|
| $1,100 | $800 | **$0** | CO-45 $300 · **PR-1 $800** |

BlueHealth paid nothing — but it **didn't deny** the claim. It processed it correctly and said Anna owes the full $800, because of her deductible. The next step is to **bill Anna** (or her secondary), not to appeal. (See [Rejected vs Denied](/blog/rejection-vs-denial/).)

## Don't waive the patient's share

It can feel kind to tell a patient, "Don't worry about the copay." But **routinely waiving** copays, coinsurance or deductibles can:

- break the clinic's **contract** with the insurance company
- for government plans like **Medicare**, be treated as **program abuse**
- make the insurer think the clinic's real price is lower than it claims

There are proper exceptions — for example, genuine **financial hardship**. These should be **documented**, case by case, after reasonable efforts to collect.

## Common mistakes

- **Treating PR-1 as a denial** and appealing instead of billing the patient.
- **Billing the patient for CO-45** — the contract write-off. In-network providers can't do this.
- **Forgetting the secondary insurance** before billing the patient.
- **Not collecting at the visit** — especially early in the year, when deductibles are high.
- **Using last year's benefits.** Deductibles reset; check again in January.

> **How software helps:** billing software reads the adjustment codes from each payment file, writes off the CO amounts automatically, and moves the PR amounts to the secondary insurer or to a patient statement. [eClaimPilot](https://eclaimpilot.com/features) posts ERA payments and adjustments this way. Step-by-step guides: [ERA payments](https://help.eclaimpilot.com/billing/payments/era-payments.html), [patient payments](https://help.eclaimpilot.com/billing/payments/patient-payments.html) and [patient statements](https://help.eclaimpilot.com/billing/statements/patient-statements.html).

## The one thing to remember

**Deductible first, then copays and coinsurance, up to the out-of-pocket maximum.** On the EOB, **CO** is written off by the clinic; **PR** is the patient's share — send it to the secondary insurer, or bill the patient.

## Words you'll hear

| Word | Meaning |
|---|---|
| **Deductible** | The amount the patient pays each year before insurance shares the cost |
| **Copay** | A fixed amount the patient pays for a visit |
| **Coinsurance** | The percentage of the cost the patient pays after the deductible |
| **Out-of-pocket maximum** | The most a patient pays in a plan year for covered in-network care |
| **Plan year** | The 12 months a plan's deductible and maximum apply to — often January to December |
| **Cost sharing** | All the ways a patient pays part of their care |
| **Patient responsibility (PR)** | The part of a claim the patient owes |
| **Contractual obligation (CO)** | The part the provider writes off under its contract |
| **Allowed amount** | The price the insurer agreed to pay |

<!-- Senthil: optional — add a short real story, e.g. January deductible surprises, or a team that appealed PR-1 lines as if they were denials. -->

## Next in this series

- **Previous:** [The Claim Life Cycle](/blog/claim-life-cycle/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- **Next:** [How to Read an EOB](/blog/how-to-read-an-eob/)

*Getting patient balances right — and collecting them at the visit — makes a big difference to a clinic's cash flow. Need help with yours, or training for your team? [Get in touch](/#contact).*
