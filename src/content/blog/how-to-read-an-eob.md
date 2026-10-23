---
title: "How to Read an EOB: Billed, Allowed, Paid and Adjusted"
date: 2026-10-23T23:56:40
summary: "A line-by-line beginner's guide to the Explanation of Benefits — what every column means, how the numbers add up, and how to spot a denial or an underpayment."
tags: [Billing, RCM, Payments, EOB]
draft: false
faq:
  - q: "What is an EOB?"
    a: "An Explanation of Benefits (EOB) is a statement from the insurance company that explains how it processed a claim — what was billed, the agreed price, what it paid, what the patient owes and why."
  - q: "Is an EOB a bill?"
    a: "No. A patient's EOB usually says 'This is not a bill'. It explains what the insurer paid. The bill comes later from the doctor's office, for the patient's share."
  - q: "What is the difference between billed and allowed amount?"
    a: "The billed amount is the provider's own price. The allowed amount is the price the insurance company agreed to pay under its contract with the provider. The difference is usually written off."
  - q: "What do CO and PR mean on an EOB?"
    a: "They are group codes. CO means contractual obligation — the provider writes the amount off. PR means patient responsibility — the patient or their secondary insurance owes it."
  - q: "What are CARC and RARC codes?"
    a: "CARC (claim adjustment reason codes) explain why a line was not paid in full, such as 45 for over the agreed price or 1 for deductible. RARC (remittance advice remark codes) add extra detail, such as MA120 for a missing CLIA number."
  - q: "What is the difference between an EOB and an ERA?"
    a: "They hold the same information. An EOB is the paper or PDF version; an ERA, or electronic remittance advice, is the electronic 835 file that billing software can read and post automatically."
  - q: "Why does one payment cover many patients?"
    a: "Insurers usually pay many claims together in a single check or bank transfer. The EOB or ERA lists every claim included in that payment, so the billing team can match the money to each claim."
---

*Part of my beginner series on US medical billing. No healthcare background needed.*

After an insurance company processes a claim, it sends an **Explanation of Benefits — an EOB**. It's the insurer's answer to the claim: what it paid, what it didn't, and **why**.

For a billing team, the EOB is one of the most important documents there is. Every payment is recorded from it. Every denial is discovered on it. Every patient bill is based on it. Yet for a beginner, it looks like a confusing page of numbers and codes.

Let's read one together, column by column.

## Two kinds of EOB

| | Provider EOB | Patient EOB |
|---|---|---|
| **Sent to** | The doctor's office or hospital | The patient |
| **Covers** | **Many** patients and claims in one payment | Just that patient's claims |
| **Also called** | Remittance advice, RA, ERA (if electronic) | Explanation of Benefits |
| **Says** | What was paid and why, with codes | What was paid, and what the patient *may* owe — "**This is not a bill**" |

This post is about the **provider EOB** — the one billing teams work with every day.

## A sample EOB

Here's a BlueHealth EOB for **Anna's** visit to **Dr. Lee**. She had a diabetes check-up, a wart removed, and a quick strep test. All details are made up.

![A sample provider EOB from BlueHealth for patient Anna Smith, with numbered parts](/images/posts/sample-eob.svg)

### ① The payment

At the top: **who** was paid, **how** and **how much in total**.

- **Payee:** Lee Family Clinic — with its NPI and Tax ID. (See [NPI and Tax ID](/blog/npi-tax-id-provider-numbers/).)
- **Payment:** an electronic bank transfer (**EFT**), number 7740021588.
- **Total:** $3,482.15 — for **12 claims**.

That last point surprises beginners: insurers usually pay **many claims in one payment**. Anna's claim is just one of the twelve. The billing team must match each part of the payment to the right claim.

### ② The claim

Each claim has its own block:

- the **patient** and **member ID**
- the **payer claim number** — BlueHealth's own reference, **BH-2026-0001187**. You'll need it for any [corrected claim](/blog/corrected-claims/) or appeal.
- **your account number** — the clinic's own reference, sent on the claim, so it's easy to find.

### ③ Billed

What Dr. Lee **charged** — her own price list. $150 for the visit, $120 for the wart removal, $40 for the strep test.

### ④ Allowed

What BlueHealth **agreed to pay** for each service under its contract with Dr. Lee — the **allowed amount**. It's almost always lower than the billed amount.

### ⑤ Patient

The **patient's share** of the allowed amount — copay, coinsurance or deductible. (See [Deductible, Copay and Coinsurance](/blog/deductible-copay-coinsurance/).)

### ⑥ Paid

What BlueHealth **actually paid** for each line.

### ⑦ Adjustments — the "why"

Every dollar that wasn't paid is explained with a **code**. This is the most important column.

| Code | Means | On Anna's EOB |
|---|---|---|
| **CO-45** | Charge is over the agreed price — **written off** | $50 and $30 |
| **PR-3** | Patient's **copay** | $25 |
| **PR-2** | Patient's **coinsurance** | $18 |
| **CO-16** | Claim is **missing information** | $40 — the strep test |
| **MA120** | A *remark* explaining CO-16: the **CLIA number** is missing | — |

## The golden rule: every line must add up

For every line on an EOB:

> **Billed = Paid + Patient's share + Written off**

Check Anna's first line:

| Billed | = | Paid | + | Patient (PR-3) | + | Written off (CO-45) |
|---|---|---|---|---|---|---|
| $150 | = | $75 | + | $25 | + | $50 |

And the whole claim:

| Billed | = | Paid | + | Patient | + | Written off |
|---|---|---|---|---|---|---|
| $310 | = | $147 | + | $43 | + | $120 |

If a line doesn't add up, something is missing — read it again before posting.

## Understanding the codes

Each adjustment has two parts: **who** and **why**.

### Who: the group code

| Group | Stands for | Means |
|---|---|---|
| **CO** | Contractual obligation | The **provider** absorbs it. The patient **can't** be billed. |
| **PR** | Patient responsibility | The **patient** (or their secondary insurance) owes it. |
| **OA** | Other adjustment | Neither — often used when another insurer is involved. |
| **PI** | Payer-initiated reduction | The payer reduced it for a reason outside the contract. |

### Why: the reason code

The number after the group is a **claim adjustment reason code (CARC)**. A few you'll see every day:

| CARC | Means |
|---|---|
| **1** | Deductible |
| **2** | Coinsurance |
| **3** | Copay |
| **45** | Charge is more than the agreed price |
| **16** | Claim is missing information |
| **18** | Duplicate claim |
| **29** | Filing deadline has passed |
| **50** | Not medically necessary |
| **97** | Included in another service paid on the same day |
| **197** | Prior authorization missing |

### More detail: remark codes

Sometimes a reason code needs more explanation. A **remittance advice remark code (RARC)** adds it — like **MA120** for a missing CLIA number. Remark codes often start with **M**, **MA** or **N**.

You don't need to memorize these. Billing software shows their meaning, and the full lists are public.

## How to read any EOB, in five steps

1. **Find the claim** — match the patient, date of service and your account number.
2. **Check each line adds up** — billed = paid + patient + written off.
3. **Look at the CO amounts** — normal write-offs (CO-45) are expected. Anything else (CO-16, CO-97, CO-197…) is a **problem to work**.
4. **Look at the PR amounts** — these go to the **secondary insurer** or the **patient**.
5. **Compare the paid amount with what you expected.** If the allowed amount is lower than your contract says, it may be an **underpayment**.

## What Anna's EOB tells the billing team to do

| Line | What happened | Next step |
|---|---|---|
| 99213-25 | Paid $75, copay $25 | Copay was collected at check-in — match it. Done. |
| 17110 | Paid $72, coinsurance $18 | Send to Anna's secondary (StarCare), or bill Anna |
| 87880 | **Denied** — CLIA number missing | Add the CLIA number and send a **replacement claim** with BH-2026-0001187 |

One EOB, three different actions. That's why reading EOBs carefully matters so much.

## Paper EOB or electronic ERA?

The same information comes in two forms:

- **Paper or PDF EOB** — read by a person, and typed into the billing system by hand.
- **Electronic remittance advice (ERA)** — an electronic file the billing software reads and posts **automatically**.

> **Technical name:** the ERA is the **835** transaction. The payment total is in its **BPR** line, each claim in a **CLP** line, each service in an **SVC** line, and each adjustment in a **CAS** line. Remark codes appear in **LQ** lines.

Most insurers now send ERAs, and most clinics use them — it's faster and avoids typing mistakes. (Clinics must sign up for ERAs with each insurer — see [What Is a Clearinghouse?](/blog/what-is-a-clearinghouse/).)

## Common mistakes

- **Posting the total payment to one claim** instead of splitting it across all the claims it covers.
- **Billing the patient for CO amounts.** In-network providers can't.
- **Ignoring CO lines other than 45** — they're usually denials hiding in a paid claim.
- **Not checking the allowed amount** against the contract — underpayments go unnoticed.
- **Treating PR-1 (deductible) as a denial.**

> **How software helps:** billing software reads ERAs automatically, posts each payment and adjustment to the right claim line, and flags denials and unexpected amounts for review. [eClaimPilot](https://eclaimpilot.com/features) auto-posts 835 ERAs and also supports manual posting of paper EOBs. Step-by-step guides: [ERA payments](https://help.eclaimpilot.com/billing/payments/era-payments.html) and [insurance payments](https://help.eclaimpilot.com/billing/payments/insurance-payments.html).

## The one thing to remember

**Billed = paid + patient + written off — on every line.** CO is the clinic's write-off; PR is the patient's share; any CO code other than 45 is usually a problem to fix.

## Words you'll hear

| Word | Meaning |
|---|---|
| **EOB** | Explanation of Benefits — the insurer's statement about a claim |
| **Remittance advice (RA)** | Another name for the provider EOB |
| **ERA** | Electronic remittance advice — the electronic EOB (835) |
| **EFT** | Electronic funds transfer — payment straight to the bank |
| **Billed amount** | The provider's own price |
| **Allowed amount** | The price the insurer agreed to pay |
| **Adjustment** | Any amount not paid, explained by a code |
| **Group code** | CO, PR, OA or PI — who is responsible for an adjustment |
| **CARC** | Claim adjustment reason code — why an amount wasn't paid |
| **RARC** | Remittance advice remark code — extra detail |
| **Underpayment** | When the insurer pays less than the contract says |

<!-- Senthil: optional — add a short real story, e.g. a hidden CO-97 bundling pattern found on EOBs, or an ERA that didn't match the bank deposit. -->

## Next in this series

- **Previous:** [Deductible, Copay and Coinsurance](/blog/deductible-copay-coinsurance/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- **Next:** [In-Network vs Out-of-Network](/blog/in-network-vs-out-of-network/)

*Reading EOBs quickly and accurately is a core billing skill — and one of the first things I teach new billers. Need training for your team? [Get in touch](/#contact).*
