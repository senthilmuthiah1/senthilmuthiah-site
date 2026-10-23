---
title: "CPT Modifiers Explained for Beginners"
date: 2026-10-23T20:00:00
summary: "What modifiers are, why a two-character add-on can decide whether a claim is paid, and the ten modifiers every beginner should know — with simple examples."
tags: [Billing, RCM, Coding]
draft: false
---

*Part of my beginner series on US medical billing. No healthcare background needed.*

In the [previous post](/blog/icd-10-cpt-hcpcs-codes/), we saw that a **CPT code** describes what the doctor did — for example, **73600** means *an X-ray of the ankle*.

But sometimes the code alone doesn't tell the whole story:

- *Which* ankle — left or right?
- Did the doctor take the X-ray *and* read it, or only read it?
- Was the visit in person, or by video?

For these extra details, billing uses **modifiers**.

## What is a modifier?

A modifier is a **two-character add-on** to a procedure code. It doesn't change *what* was done — it adds a detail about *how*, *where* or *why*.

Think of ordering coffee. "**Coffee**" is the code. "**Large**", "**decaf**" or "**to take away**" are modifiers. It's still a coffee — but the details change what you get, and sometimes the price.

Modifiers are written after the code with a dash, like **73600-RT**. (On the claim itself, they go in a separate box next to the code.)

![Four examples of a code plus a modifier giving a new meaning](/images/posts/cpt-modifiers.svg)

## Why modifiers matter for getting paid

Modifiers can decide **whether** a claim is paid, and **how much**:

- **Without the right modifier**, the insurance company may think something was billed twice — and pay only once, or not at all.
- **Some modifiers change the price.** For example, a modifier saying "both sides" can increase the payment, and one saying "reading only" lowers it.
- **The wrong modifier** can lead to a denial — or, if it gets the provider paid more than it should, to trouble in an audit.

## Two kinds of modifiers

| Kind | What they look like | Examples | Run by |
|---|---|---|---|
| **CPT modifiers** | 2 numbers | 25, 26, 50, 59 | The AMA, with CPT codes |
| **HCPCS modifiers** | 2 letters, or a letter and a number | RT, LT, TC, F1 | CMS (the agency behind Medicare) |

Beginners don't need to worry about the difference — billing people call them all "modifiers".

## Ten modifiers every beginner should know

### Body side

| Modifier | Meaning | Example |
|---|---|---|
| **RT** | Right side | 73600-RT — X-ray of the **right** ankle |
| **LT** | Left side | 73600-LT — X-ray of the **left** ankle |
| **50** | Both sides, done in the same session | Both knees injected at one visit |

There are also modifiers for individual **fingers** (FA, F1–F9) and **toes** (TA, T1–T9) — so a claim can say exactly which finger was treated.

### Who did which part

Many tests have two parts: the **equipment and staff** that perform them, and the **doctor** who reads the result.

| Modifier | Meaning | Example |
|---|---|---|
| **TC** | Technical part only — the machine and the technician | An X-ray centre bills for taking the X-ray: 73600-TC |
| **26** | Professional part only — the doctor's reading | A radiologist bills for reading it: 73600-26 |

If **one** provider does both parts, the code is billed **without** either modifier, and the full price is paid.

### Extra services on the same day

| Modifier | Meaning | Example |
|---|---|---|
| **25** | A visit that was a **separate** service from a procedure on the same day | See Anna's example below |
| **59** | A procedure that was **separate** from another one on the same day — a different site or a different problem | Two different skin spots treated in two different places |

### Repeats

| Modifier | Meaning | Example |
|---|---|---|
| **76** | The **same** procedure repeated by the **same** doctor on the same day | A second chest X-ray later that day, to check after treatment |
| **91** | A **lab test** repeated on the same day to get a new result | Blood sugar measured again a few hours later |

### Telehealth

| Modifier | Meaning | Example |
|---|---|---|
| **95** | The service was done by **live video** | 99213-95 — an office visit done by video call |

## Example: Anna's visit with modifier 25

> **Anna** visits **Dr. Lee** for her regular diabetes check-up. During the visit, she also asks Dr. Lee to remove a wart on her hand, and Dr. Lee removes it there and then.

Dr. Lee did two things:

| Service | Code |
|---|---|
| Diabetes check-up visit | 99213 |
| Wart removal | 17110 |

Here's the problem: insurance companies assume that every small procedure, like removing a wart, **already includes** a short check by the doctor. So if the claim shows 99213 and 17110 together, the insurer may pay only for the wart removal and refuse the visit.

But Anna's diabetes check-up had **nothing to do** with the wart. It was a separate, real visit. So Dr. Lee bills:

> **99213-25** (diabetes visit — a separate service) and **17110** (wart removal)

Now the insurer understands that both were done, and pays for both. The doctor's notes must show the two services clearly — the insurer may ask to see them.

## Example: John's X-ray with modifiers 26 and TC

> **John** has his right ankle X-rayed at **City Imaging**. The X-ray is sent to **Dr. Gomez**, a radiologist who works for a different company, who reads it and writes a report.

Two providers did two parts of the same X-ray, so there are **two claims**:

| Who | Bills for | Code |
|---|---|---|
| City Imaging | Taking the X-ray — machine and technician | 73600-RT-TC |
| Dr. Gomez | Reading the X-ray and writing the report | 73600-RT-26 |

A code can have **more than one modifier**. The claim form has room for up to **four** on each line.

## Common mistakes

- **No modifier when one is needed.** A visit on the same day as a procedure, without 25 — the visit is denied.
- **Adding modifiers "just in case".** Using 25 or 59 on every claim to get things paid. Insurers watch for this closely, and it can lead to audits and paying money back.
- **Left and right mixed up.** The claim says left knee; the notes say right knee. Denied.
- **Modifiers that conflict.** RT and LT on the same line, or 26 and TC together.

> **How software helps:** missing or conflicting modifiers are exactly the kind of mistake software can catch before a claim is sent, through **claim scrubbing**. [eClaimPilot](https://eclaimpilot.com/features) checks claims before submission, so fewer come back denied. Step-by-step guide: [claim scrubbing settings](https://help.eclaimpilot.com/billing/practice/claim-scrubbing.html).

## The one thing to remember

**A modifier adds a detail, not a new service.** Use one only when it's true, and when the doctor's notes clearly show why.

## Words you'll hear

| Word | Meaning |
|---|---|
| **Modifier** | A 2-character add-on to a procedure code that adds detail |
| **Professional component (26)** | The doctor's part — reading and reporting |
| **Technical component (TC)** | The equipment and staff part |
| **Global service** | Both parts done by one provider — billed with no 26 or TC |
| **Bilateral (50)** | Done on both sides of the body |
| **Separate service (25, 59)** | A service that was distinct from another done the same day |
| **Telehealth (95)** | A service done by live video |

<!-- Senthil: optional — add a short real story, e.g. a modifier 25 or 59 denial pattern you've fixed, or a payer that wanted a different modifier than the standard one. -->

## Next in this series

- **Previous:** [ICD-10, CPT and HCPCS](/blog/icd-10-cpt-hcpcs-codes/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- **Next:** [Prior Authorization, Referrals and Pre-Certification](/blog/prior-authorization-and-referrals/)

*Modifier rules are one of the biggest sources of denials — and one of the best places for billing software to help. Need claim checks built into your system, or training for your team? [Get in touch](/#contact).*
