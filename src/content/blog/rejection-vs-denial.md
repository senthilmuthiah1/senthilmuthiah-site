---
title: "Rejected vs Denied Claims: What's the Difference?"
date: 2026-10-23T23:45:00
summary: "A rejected claim never got in; a denied claim got in and wasn't paid. A beginner's guide to the difference, where each happens, how you find out, and what to do about each."
tags: [Billing, RCM, EDI, Denials]
draft: false
faq:
  - q: "What is the difference between a rejected claim and a denied claim?"
    a: "A rejected claim was sent back before the insurance company processed it, usually because of missing or wrong information. A denied claim was received and processed, and the insurance company decided not to pay it."
  - q: "Can I appeal a rejected claim?"
    a: "No. A rejected claim was never processed, so there is no decision to appeal. Fix the mistake and send the claim again as a new claim."
  - q: "How do I know if a claim was rejected?"
    a: "Rejections come back from the clearinghouse or the insurer as acknowledgement reports, usually within minutes to a couple of days. There is no EOB for a rejected claim, so the billing team must check these reports every day."
  - q: "How do I know if a claim was denied?"
    a: "Denials are shown on the Explanation of Benefits (EOB) or the electronic 835 payment file, with a reason code that explains why the claim was not paid."
  - q: "Is a claim paid $0 because of the deductible a denial?"
    a: "No. If the insurance company processed the claim and applied the amount to the patient's deductible or coinsurance, the claim was paid correctly — the patient owes that amount. It is not a denial."
  - q: "Does a rejected claim stop the filing deadline?"
    a: "No. As far as the insurance company is concerned, a rejected claim was never received. The filing deadline keeps running until a clean claim is accepted."
  - q: "What are the most common reasons for claim rejections?"
    a: "A wrong or missing member ID, a name or date of birth that doesn't match the insurer's records, an invalid NPI, an invalid or incomplete diagnosis code, the wrong payer ID, or a provider who is not set up with the insurer."
  - q: "What are the most common reasons for claim denials?"
    a: "Inactive coverage on the date of service, missing prior authorization, a service not covered by the plan, medical necessity not shown, duplicate claims, the claim sent after the filing deadline, or another insurer that should pay first."
---

*Part of my beginner series on US medical billing. No healthcare background needed.*

Every billing beginner hears two words used all day: **rejected** and **denied**. They sound the same. In everyday English, they *are* the same.

In medical billing, they mean **two very different things**. They happen at different places, you find out about them in different ways, and you fix them differently. Mixing them up is one of the most common — and most costly — beginner mistakes.

## The simple idea

> **A rejected claim never got in. A denied claim got in, and wasn't paid.**

Think of sitting an exam:

- You hand in your paper, but you forgot to write your **student number**. The examiner hands it straight back, **unmarked**: "Fill this in and hand it in again." → That's a **rejection**. Nobody read your answers.
- You hand in a complete paper. The examiner **marks it**, and you get zero for one question because the answer was wrong. → That's a **denial**. Your paper was read and judged.

The first is a quick fix. The second is a decision you must either accept, correct, or argue against.

## Where each one happens

In the [clearinghouse post](/blog/what-is-a-clearinghouse/), we followed a claim from the clinic to the insurance company. Along the way, it passes through **three stages**:

![A claim passes the clearinghouse check and the insurer's front door, where it can be rejected, and then the insurer's review, where it can be paid or denied](/images/posts/rejection-vs-denial.svg)

**Stage 1 — The clearinghouse check.** The clearinghouse checks that the claim file can be read and that every required piece of information is there and in the right format. Problems here → **rejection**.

**Stage 2 — The insurance company's front door.** The insurer does its own quick check when the claim arrives. Is this person really our member? Do we know this doctor? Are the codes real, current codes? Problems here → **rejection**.

**Stage 3 — The insurance company's review.** Only now does the insurer actually *process* the claim. This is called **adjudication**. It checks:

- Is this a **duplicate** of a claim already paid? Was it sent **within the filing deadline**?
- Was the member **covered on the date of service**?
- Is the doctor **in-network**, and what is the **agreed price**?
- Is the service **covered** by the patient's plan? Did it need **prior authorization**?
- Is it **medically necessary** — does the diagnosis justify the treatment?
- What does the **patient owe** — copay, deductible, coinsurance?

The result is **paid**, **partly paid**, or **denied** — and the reason is explained on the **Explanation of Benefits (EOB)**.

So: **stages 1 and 2 reject. Stage 3 denies.**

## How you find out

This is where many teams go wrong.

| | Rejection | Denial |
|---|---|---|
| **How you hear about it** | A report from the clearinghouse or insurer | The EOB, or the electronic payment file (835) |
| **How fast** | Minutes to a couple of days | Usually 2–4 weeks |
| **Is there an EOB?** | **No** | Yes |
| **Is there a payment?** | No | No — or only for the lines that were paid |

**The danger with rejections:** because there's no EOB and no payment, a rejected claim can sit **unnoticed**. Many teams wait for payments and look into claims only when money doesn't arrive. By the time someone notices that a claim was rejected weeks ago, the **filing deadline** may have passed. And denials for missing the filing deadline are **very rarely overturned**.

**So: check rejection reports every day.** That's one of the most important habits in billing.

> **Technical name:** a rejection of the whole *file* comes back in a **999**. A rejection of an individual *claim* usually comes back in a **277CA**. In a 277CA, a status code starting **A2** means "accepted for processing"; codes like **A3**, **A6** and **A7** mean "rejected". Denials come in the **835** with **CARC** and **RARC** reason codes.

## Examples: rejections

These are all problems with the **information on the claim** — things that are wrong or missing:

| Problem | Example |
|---|---|
| Member ID wrong or missing | Anna's ID typed as BHX48291355 — one digit missing |
| Name or date of birth doesn't match | Claim says "Ana Smith"; insurer has "Anna Smith" |
| Doctor's NPI invalid or missing | One digit mistyped |
| Diagnosis code invalid | A code missing its last character, or a deleted code |
| Wrong payer ID | Claim sent to the wrong insurer, or the wrong plan |
| Provider not set up with the insurer | The clinic hasn't completed enrollment for electronic claims |
| Missing required information | No date of service, no place of service, no referring doctor when required |

**What to do:** find the mistake, fix it, and send the claim **again** — ideally the **same day**. There's nothing to appeal, because nobody made a decision.

## Examples: denials

These are all **decisions** by the insurance company after reviewing the claim:

| Reason | Example | Reason code |
|---|---|---|
| No coverage on that date | Anna's plan ended last month | CARC 27 |
| No prior authorization | Anna's MRI done without BlueHealth's approval | CARC 197 |
| Service not covered by the plan | A cosmetic procedure | CARC 96 |
| Not medically necessary | The diagnosis doesn't justify the test | CARC 50 |
| Duplicate claim | The same visit was already paid | CARC 18 |
| Filing deadline missed | Claim sent after the insurer's time limit | CARC 29 |
| Another insurer should pay first | Coordination of benefits | CARC 22 |

You don't need to memorize these codes. Just know that every denial comes with a **reason code** that tells you **why** — and that's where fixing it begins.

**What to do** depends on the reason:

- **Correct the claim and send a corrected version** — if the denial was caused by a mistake, like a wrong code or modifier. (That's the next post.)
- **Appeal** — if the insurer got it wrong. Send a letter with the doctor's notes and ask it to look again.
- **Bill someone else** — the right primary insurer, a secondary insurer, or the patient, if the plan allows.
- **Write it off** — sometimes, after everything is tried, the amount can't be collected.

## "Paid $0" isn't always a denial

This confuses many beginners. Look at this EOB line:

| Billed | Allowed | Paid | Patient owes | Reason |
|---|---|---|---|---|
| $150 | $100 | **$0** | $100 | Applied to deductible |

BlueHealth paid **nothing**. Is this a denial? **No.**

BlueHealth processed the claim correctly and decided the whole $100 is Anna's share, because she hasn't used up her yearly **deductible** yet. The claim was **paid correctly — at $0**. The office now bills **Anna** for $100.

A claim applied to the **deductible** or **coinsurance** is not a denial. A denial means the insurer said **no** — not "the patient pays this part".

## Partly denied claims

A claim can have several lines. The insurer decides on **each line separately**. So one claim can be **partly paid and partly denied**:

| Line | Service | Result |
|---|---|---|
| 1 | Office visit | ✅ Paid |
| 2 | Strep test | ❌ Denied — lab CLIA number missing |

Only line 2 needs work. Line 1 is finished.

## Side by side

| | Rejected | Denied |
|---|---|---|
| **In one sentence** | Sent back before being processed | Processed, and not paid |
| **Where** | Clearinghouse or insurer's front door | Insurer's review (adjudication) |
| **Cause** | Missing, wrong or badly formatted information | A decision about coverage, rules or necessity |
| **You find out from** | Acknowledgement reports (999, 277CA) | EOB or 835 |
| **When** | Minutes to days | Weeks |
| **Can you appeal?** | No — nothing to appeal | Yes |
| **How to fix** | Correct it and send it again as a new claim | Send a corrected claim, appeal, or bill another payer |
| **Deadline** | The filing clock **keeps running** | Each insurer sets a time limit for corrections and appeals |
| **Biggest risk** | Not noticing it | Not working it in time |

## How to have fewer of both

- **Check insurance before every visit.** Most rejections and many denials start at the front desk. (See [Insurance Verification](/blog/insurance-verification/).)
- **Get prior authorization** when it's needed. (See [Prior Authorization](/blog/prior-authorization-and-referrals/).)
- **Set up providers carefully** — NPIs, Tax IDs and enrollment. (See [NPI, Tax ID and Other Provider Numbers](/blog/npi-tax-id-provider-numbers/).)
- **Scrub claims before they're sent**, so mistakes are caught inside your own software.
- **Work rejections every day**, and denials every week.
- **Track the reasons.** If the same rejection or denial keeps happening, fix the cause, not just the claim.

> **How software helps:** billing software reads every acknowledgement and payment file automatically, and puts rejected and denied claims into separate lists to work — so nothing is missed. [eClaimPilot](https://eclaimpilot.com/features) includes rejection follow-up, denial work queues and appeals. Step-by-step guides: [acknowledgements](https://help.eclaimpilot.com/billing/transmission/acknowledgements.html), [rejection follow-up](https://help.eclaimpilot.com/billing/followup/rejection-followup.html) and [insurance aging follow-up](https://help.eclaimpilot.com/billing/followup/insurance-aging.html).

## The one thing to remember

**Rejected = never got in. Fix it and send it again, today. Denied = got in and wasn't paid. Read the reason, then correct, appeal or bill someone else.**

## Words you'll hear

| Word | Meaning |
|---|---|
| **Rejection** | A claim sent back before the insurer processed it |
| **Denial** | A claim the insurer processed and decided not to pay |
| **Adjudication** | The insurer's review and decision on a claim |
| **Acknowledgement** | A report confirming a file or claim was accepted or rejected |
| **Clean claim** | A claim with no mistakes, accepted the first time |
| **Reason code (CARC)** | A standard code on the EOB explaining why a line was not paid in full |
| **Remark code (RARC)** | An extra code that adds detail to a reason code |
| **Appeal** | A formal request to the insurer to change a decision |
| **Write-off** | An amount the office decides not to collect |
| **Filing deadline** | The last date the insurer will accept a claim |

<!-- Senthil: optional — add a short real story, e.g. a batch of rejections that sat unnoticed until the filing deadline passed, or a $0 deductible line a new biller treated as a denial. -->

## Next in this series

- **Previous:** [What Is a Clearinghouse?](/blog/what-is-a-clearinghouse/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- Coming next: corrected claims — how to fix a claim that's already been processed

*Turning rejection and denial reports into clear work lists is one of the most valuable things a billing system can do. Need help with yours, or training for your team? [Get in touch](/#contact).*
