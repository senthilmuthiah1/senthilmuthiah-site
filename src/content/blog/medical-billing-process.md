---
title: "What Is the Medical Billing Process?"
date: 2026-10-21
summary: "A plain-English guide to how a US doctor's office gets paid by insurance — six simple steps, explained for complete beginners."
tags: [Billing, RCM, EDI]
draft: false
faq:
  - q: "What is medical billing in simple words?"
    a: "Medical billing is everything a doctor's office does to send a bill, called a claim, to the patient's insurance company and get paid for the care the patient received."
  - q: "What are the main steps of medical billing?"
    a: "Checking the insurance, recording what was done as codes, sending the claim, the insurance company's decision, recording the payment, and fixing any problems such as denials."
  - q: "How long does it take for a claim to be paid?"
    a: "Electronic claims are often paid in two to four weeks. Paper claims, or claims with mistakes, can take much longer."
  - q: "What is the difference between medical billing and medical coding?"
    a: "Coding turns the visit into standard codes for the diagnosis and the services. Billing uses those codes to create the claim, send it, and follow it until it is paid."
  - q: "Why are claims denied?"
    a: "Common reasons are inactive insurance, missing or wrong patient details, coding errors, missing prior authorization, and claims sent after the insurer's filing deadline."
  - q: "Can I learn medical billing without a healthcare background?"
    a: "Yes. Many people start with no healthcare experience. Begin with the basics of US health insurance and the billing process, then learn codes, claim forms and payments step by step."
---

*First published on my old blog in March 2013. Rewritten for beginners — no healthcare background needed. New to insurance words? Start with [US Health Insurance Basics](/blog/health-insurance-basics/) and [A Patient's Visit, Step by Step](/blog/patient-visit-step-by-step/).*

## The simple idea

In the US, most people have **health insurance**. When a patient visits a doctor, the patient usually doesn't pay the full bill. Instead, the doctor's office sends a bill to the patient's **insurance company**, and the insurance company pays most of it.

That bill is called a **claim**. **Medical billing** is everything the doctor's office does to send the claim and get paid for it.

Think of it like a company expense claim. You spend money for work, fill in a form saying what you spent and why, send it to the finance team, and they check it and pay you back. Medical billing works the same way: the doctor gives the treatment, fills in a claim, sends it to the insurance company, and the insurance company checks it and pays.

## Meet our example

To keep things simple, we'll follow one visit:

> **Anna** has a sore throat and visits **Dr. Lee**. Anna has insurance with **BlueHealth** (a made-up insurance company). The visit costs **$150**.

Here is the whole journey on one page. We'll walk through each step below.

![The six steps of the medical billing process](/images/posts/medical-billing-process.svg)

## Step 1 — Check the insurance

**When:** before or when Anna arrives.

The front desk staff check that Anna's insurance is **active** — that she is still covered by BlueHealth today — and how much Anna will have to pay herself.

Why bother? If Anna's insurance has ended, BlueHealth won't pay anything. It's better to find that out now, while Anna is still in the office, than weeks later.

If Anna has no active insurance, she pays the office directly. This is called **self-pay**.

> **Technical name:** this is called an *eligibility check*. Computers do it in seconds using a standard electronic message called **270** (the question) and **271** (the answer).

## Step 2 — Record what was done

**When:** after the visit.

Dr. Lee writes down what was wrong with Anna and what she did. The billing staff then turn this into **codes** — short standard numbers that every insurance company understands:

- a **diagnosis code** — *what was wrong* (for example, sore throat)
- a **procedure code** — *what the doctor did* (for example, an office visit and a strep test)

Codes are like product barcodes. Instead of writing a long description, everyone uses the same short code, so computers can read it.

> **Technical name:** this step is called *charge entry and coding*. Diagnosis codes are **ICD-10** codes; procedure codes are **CPT** or **HCPCS** codes.

## Step 3 — Send the claim

**When:** usually within a few days of the visit.

The office puts everything into a claim — Anna's details, her insurance details, Dr. Lee's details, the codes and the $150 charge — and sends it to BlueHealth.

Claims are sent electronically, usually through a middleman called a **clearinghouse**. Think of the clearinghouse as a **post office**: it checks that the "letter" is filled in correctly, then delivers it to the right insurance company. If something is missing, it sends the claim back straight away so the office can fix it.

> **Technical name:** a doctor's claim is sent as an **837P** file (a hospital's as an **837I**). The paper versions are the **CMS-1500** and **UB-04** forms. The "received" and "rejected" notes that come back are called **999** and **277CA**.

## Step 4 — The insurance company decides

**When:** usually within a few weeks.

BlueHealth reviews the claim. It checks things like:

- Was Anna covered on the day of the visit?
- Is the treatment covered by her plan?
- Is the price within what BlueHealth has agreed to pay Dr. Lee?
- Was this claim already paid once before?

Then it decides how much to pay. This review is called **adjudication** — a formal word for "deciding".

## Step 5 — Record the payment

**When:** when the money arrives.

BlueHealth sends the payment along with a statement called an **Explanation of Benefits (EOB)**. It explains the money, line by line. For Anna's visit it might say:

| | Amount |
|---|---|
| Dr. Lee charged | $150 |
| BlueHealth allows (its agreed price) | $100 |
| BlueHealth pays | $80 |
| Anna owes (her share) | $20 |

The office records this payment against Anna's claim. This is called **payment posting**. Then the office sends Anna a bill for her **$20** share.

Why only $100 and not $150? Insurance companies agree lower prices with doctors in advance. The $50 difference is simply written off.

> **Technical name:** the electronic version of the EOB is called an **835** file. Most payments now arrive by bank transfer, and the software posts them automatically.

## Step 6 — Fix problems

Sometimes the insurance company says **no**. This is called a **denial**. Common reasons:

- the insurance had ended
- a code was wrong or missing
- the treatment needed approval in advance, and nobody asked
- the claim was sent too late (every insurer has a deadline)

The billing staff find out why, fix the problem, and send a **corrected claim** — or, if they believe the insurer is wrong, they **appeal**. That's the dotted line at the bottom of the diagram, going back to Step 3.

> **How software helps:** every step in this diagram — eligibility checks, claims, payment posting and denial follow-up — can be handled in one billing system instead of separate spreadsheets and websites. My own product, [eClaimPilot](https://eclaimpilot.com/features), is built around exactly this workflow. Step-by-step guides: [eClaimPilot Help — Billing](https://help.eclaimpilot.com/billing/index.html).

## The one thing to remember

**Most billing problems start at Step 1.** A wrong insurance card or expired coverage, caught at the front desk, takes two minutes to fix. Caught weeks later as a denial, it can take hours of phone calls — or the money is never collected at all.

That's why good billing software checks the insurance automatically, before the patient is even seen.

## Words you'll hear

| Word | Meaning |
|---|---|
| **Claim** | The bill sent to the insurance company |
| **Payer** | The insurance company (the one who pays) |
| **Provider** | The doctor, clinic or hospital |
| **Clearinghouse** | The middleman that checks and delivers claims |
| **EOB** | The insurer's statement explaining what it paid and why |
| **Copay / coinsurance / deductible** | Different ways the patient pays their share |
| **Denial** | The insurer refused to pay a claim |
| **RCM** | Revenue cycle management — the whole process of getting paid |

<!-- Senthil: optional — add one short real-life story here (e.g. a denial you've seen and how it was solved). Keep it simple for beginners. -->

## Next in this series

- [CMS-1500 vs UB-04](/blog/cms-1500-vs-ub-04/) — the two claim forms explained
- [Types of US health insurance](/blog/types-of-health-insurance/) — HMO, PPO, Medicare, Medicaid and more
- **Previous:** [A Patient's Visit, Step by Step](/blog/patient-visit-step-by-step/)

*New to US healthcare and want to learn medical billing or EDI properly? Or building billing into your own software? [Get in touch](/#contact) — I offer beginner-friendly training and consulting.*
