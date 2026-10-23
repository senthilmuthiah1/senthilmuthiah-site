---
title: "Prior Authorization, Referrals and Pre-Certification Explained"
date: 2026-10-23T22:00:00
summary: "Why some treatments need the insurance company's approval first, how the approval is requested, and how a referral is different — explained for complete beginners."
tags: [Billing, RCM, Insurance]
draft: false
---

*Part of my beginner series on US medical billing. No healthcare background needed.*

## The simple idea

For most everyday care — a regular doctor's visit, a simple blood test — the doctor just does it and sends the bill.

But for some **expensive** or **specialised** care, the insurance company wants to say **"yes" first**. If the doctor goes ahead without that "yes", the insurance company may refuse to pay — even if the treatment was needed.

Think of a company travel policy. You can buy a coffee on a work trip and claim it back. But for a flight or a hotel, you need your manager's approval **before** you book. If you book first and ask later, you may pay it yourself.

That approval-in-advance has a few names:

- **Prior authorization** (often shortened to **prior auth** or **PA**)
- **Pre-authorization**
- **Pre-certification** (or **pre-cert**)

They all mean nearly the same thing. "Pre-certification" is used most often for **hospital stays**.

(New to insurance words? Start with [US Health Insurance Basics](/blog/health-insurance-basics/).)

## What usually needs approval?

Every insurance plan has its own list, and the lists change. But these commonly need it:

- **Scans** — MRI, CT and PET scans
- **Planned surgery** and **planned hospital stays**
- **Expensive medicines**, especially injections and specialty drugs
- **Medical equipment** — wheelchairs, special beds, oxygen at home
- **Therapy** beyond a set number of visits — for example, more than 12 physical therapy sessions
- **Home health care**

**Emergencies don't need approval first.** If someone arrives at an emergency room, the hospital treats them straight away. It may have to tell the insurance company within a day or two afterwards.

## How it works: Anna's MRI

> **Anna** has had knee pain for weeks. **Dr. Lee** wants an **MRI scan** to see what's wrong. Anna's insurance, **BlueHealth**, requires prior authorization for MRIs.

![The prior authorization steps: order, check, request, review, then approved or denied](/images/posts/prior-authorization-flow.svg)

### Step 1 — The doctor orders the service

Dr. Lee writes an order for an MRI of Anna's right knee, and notes why it's needed.

### Step 2 — Check whether approval is needed

The office checks BlueHealth's rules — on its website, in the office software, or by phone. Yes, MRIs need approval.

This check should happen **before** the appointment is booked at the imaging centre. (It's part of [insurance verification](/blog/insurance-verification/).)

### Step 3 — Send the request

The office sends BlueHealth a request with:

- Anna's details and member ID
- the **diagnosis code** — why the MRI is needed
- the **procedure code** for the MRI
- **Dr. Lee's notes** — for example, that Anna has had pain for six weeks and physical therapy didn't help

The notes matter most. The insurance company wants to see that simpler options were tried first, and that the test is really needed.

### Step 4 — The insurance company reviews it

A nurse or doctor at BlueHealth reviews the request. Simple requests can be approved in minutes; others take days.

> **Good to know:** since **2026**, many plans — including Medicare Advantage, Medicaid and plans sold on the ACA marketplace — must answer standard requests within **7 days**, and urgent ones within **72 hours**.

### Step 5a — Approved

BlueHealth approves and sends an **authorization number**: **BH-PA-77812**. The approval comes with limits:

- **What** is approved — one MRI of the right knee
- **When** — it must be done within 30 days
- **Who** — sometimes a specific imaging centre

Anna has her MRI at **City Imaging** within the 30 days. When City Imaging sends its claim, it includes the authorization number. Without it, BlueHealth may deny the claim — even though it approved the MRI.

### Step 5b — Denied

If BlueHealth says no, the options are:

- **Appeal** — send more information and ask BlueHealth to look again. Often the doctor can also talk directly to BlueHealth's reviewing doctor (a *peer-to-peer* review).
- **Try something else** — for example, an X-ray first, if that's what the plan requires.
- **Patient pays** — Anna can still have the MRI if she agrees, in writing, to pay for it herself.

## What's a referral?

A **referral** sounds similar but is different. It's permission from the patient's **main doctor** — their **primary care physician (PCP)** — to see a **specialist**.

Referrals are mainly needed with **HMO** plans. (See [Types of US Health Insurance](/blog/types-of-health-insurance/).)

> **John** has an HMO plan. His main doctor is **Dr. Brown**. John has stomach pain, and Dr. Brown wants him to see **Dr. Joe**, a stomach specialist. Dr. Brown sends a referral. Now John's HMO will pay for his visits to Dr. Joe.

Without the referral, John's HMO wouldn't pay Dr. Joe at all. (We met Dr. Brown and Dr. Joe in [Billing Entities](/blog/billing-entities/) — Dr. Brown is the **referring provider** on Dr. Joe's claim.)

Like an authorization, a referral usually has limits — for example, **three visits** within **90 days**. A fourth visit needs a new referral.

## Prior authorization vs referral

| | Prior authorization | Referral |
|---|---|---|
| **Who gives it** | The **insurance company** | The patient's **main doctor** (PCP) |
| **What it allows** | A specific **treatment or test** | Visits to a **specialist** |
| **Mostly needed by** | Most plans, for expensive care | **HMO** plans |
| **What you get** | An authorization number | A referral (sometimes with a number) |

Sometimes a patient needs **both**: a referral to see the specialist, and a prior authorization for the surgery the specialist recommends.

> **Technical name:** the authorization or referral number goes in **box 23** of the [CMS-1500 claim form](/blog/cms-1500-vs-ub-04/). Requests can be sent electronically using a standard message called the **278**, though many offices still use insurers' websites, phone or fax.

## Common mistakes

- **Not checking.** The office assumes approval isn't needed, the service is done, and the claim is denied. In-network providers usually **can't** then bill the patient.
- **Approval for the wrong thing.** Approved: MRI of the right knee. Done: MRI of the left knee. Denied.
- **Approval expired.** The MRI happens on day 35 of a 30-day approval.
- **More visits than approved.** Therapy approved for 12 sessions; the patient has 15. The last 3 aren't paid.
- **Number missing from the claim.** The approval existed, but nobody put the number on the claim.

> **How software helps:** billing software can put a claim **on hold** until a missing detail — like an authorization number — is added, so it isn't sent and denied. [eClaimPilot](https://eclaimpilot.com/features) records each authorization with its limits, tracks how much has been used, and can hold a claim until the details are right. Step-by-step guides: [patient authorizations](https://help.eclaimpilot.com/billing/patients/authorizations.html), [patient referrals](https://help.eclaimpilot.com/billing/patients/referrals.html) and [putting a claim on hold](https://help.eclaimpilot.com/billing/claims/put-claim-on-hold.html).

## The one thing to remember

**Ask first, then treat.** For expensive or specialised care, get the insurance company's approval — and the number — before the service, and make sure the number reaches the claim.

## Words you'll hear

| Word | Meaning |
|---|---|
| **Prior authorization (PA)** | The insurance company's approval before a service |
| **Pre-certification** | Approval in advance, usually for a hospital stay |
| **Authorization number** | The approval's reference number — it goes on the claim |
| **Referral** | Permission from the main doctor to see a specialist |
| **PCP** | Primary care physician — the patient's main doctor |
| **Peer-to-peer review** | A call between the patient's doctor and the insurer's doctor about a denied request |
| **Appeal** | A formal request to the insurer to change its decision |

<!-- Senthil: optional — add a short real story, e.g. a denial from an expired or wrong-site authorization, or how a billing team tracks auth visit counts. -->

## Next in this series

- **Previous:** [CPT Modifiers Explained](/blog/cpt-modifiers/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- Coming next: NPI, Tax ID and other provider numbers

*Training a front-desk or authorization team, or tracking authorizations in your software? [Get in touch](/#contact) — I offer beginner-friendly training and consulting.*
