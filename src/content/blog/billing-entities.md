---
title: "Billing Entities: Who's Who on a Medical Claim"
date: 2026-10-23T16:00:00
summary: "Rendering provider, referring provider, facility, billing provider — four simple examples that show who is who on a claim, explained for complete beginners."
tags: [Billing, RCM, EDI]
draft: false
---

*First published on my old blog in March 2013. Rewritten for beginners — no healthcare background needed.*

Every medical claim answers a few simple questions:

- **Who** was treated?
- **What** was wrong, and **what** was done?
- **Who** did the work?
- **Who** sent the patient?
- **Where** did it happen?
- **Who** should be paid?

In billing, each of these "who" and "where" answers has a name. Together, they're called the **billing entities** (an *entity* just means a person or organisation). Getting them right matters: if the wrong doctor or the wrong clinic is on the claim, the insurance company can refuse to pay.

## The six things on every claim

| Name | Simple meaning | Also called |
|---|---|---|
| **Patient** | The person who was treated | Member, insured |
| **Rendering provider** | The doctor (or lab) who actually did the work | Performing provider |
| **Referring provider** | The doctor who sent the patient here | Ordering provider (for tests) |
| **Service facility** | The place where the service happened | Location, place of service |
| **Billing provider** | The person or company that gets paid | Pay-to provider |
| **Diagnosis and procedure** | What was wrong (ICD-10 code) and what was done (CPT code) | Dx codes, procedure codes |

Think of a home repair. The **plumber** who fixes your sink is like the *rendering provider*. The **friend** who recommended him is the *referring provider*. Your **house** is the *facility*. And if the plumber works for a company, the **company** sends the invoice and gets paid — that's the *billing provider*.

The easiest way to learn this is with examples. In all four, the patient is **John**, who has **stomach pain**.

![Who is the rendering, referring, facility and billing provider in each of the four examples](/images/posts/billing-entities-examples.svg)

## Example 1 — A simple visit

> **Dr. Brown** runs a small clinic called **GetWellSoon**. John visits Dr. Brown for stomach pain. Dr. Brown examines him and treats him.

The claim is sent from **Dr. Brown's office**.

| Question | Answer | Why |
|---|---|---|
| Patient | John | He was treated |
| Rendering provider | Dr. Brown | He did the work |
| Referring provider | *None* | John came on his own |
| Service facility | GetWellSoon | The visit happened there |
| Billing provider | Dr. Brown | He gets paid |
| Diagnosis | R10.10 | The ICD-10 code for upper stomach pain |
| Procedure | 99213 | The CPT code for a regular office visit |

**Lesson:** in the simplest case, one doctor does everything — treats, bills and gets paid.

## Example 2 — Sent to a specialist

> John visits **Dr. Brown** for stomach pain. Dr. Brown thinks a specialist should look, and sends John to **Dr. Joe**, who has a clinic called **GoodHealth Clinic**. Dr. Joe examines John.

This time the claim is sent from **Dr. Joe's office** — Dr. Joe did the work.

| Question | Answer | Why |
|---|---|---|
| Patient | John | |
| Rendering provider | **Dr. Joe** | He examined John |
| Referring provider | **Dr. Brown** | He sent John to Dr. Joe |
| Service facility | GoodHealth Clinic | Dr. Joe's clinic |
| Billing provider | Dr. Joe | He gets paid |
| Diagnosis | R10.10 | Same problem |
| Procedure | 99203 | The CPT code for a *new patient* visit |

**Lesson:** the **referring provider** appears when one doctor sends the patient to another. Some insurance plans — especially **HMOs** — won't pay a specialist without it. (See [Types of US Health Insurance](/blog/types-of-health-insurance/).)

Dr. Brown also sends his own, separate claim for the first visit — exactly like Example 1.

## Example 3 — A lab test

> John visits **Dr. Brown** for stomach pain. Dr. Brown asks John to have some blood tests at **Century Lab**. The lab does the tests.

The claim for the tests is sent from **Century Lab**.

| Question | Answer | Why |
|---|---|---|
| Patient | John | |
| Rendering provider | **Century Lab** | The lab did the tests |
| Referring provider | **Dr. Brown** | He ordered the tests — here also called the **ordering provider** |
| Service facility | Century Lab | The tests were done there |
| Billing provider | Century Lab | The lab gets paid |
| Diagnosis | R10.10 | The reason the tests were needed |
| Procedure | 85025 | The CPT code for a complete blood count |

**Lesson:** a "provider" isn't always a person. A lab, a hospital or an X-ray centre can be the provider too. And the diagnosis on the lab's claim must explain **why** the test was needed — otherwise the insurer may refuse to pay.

## Example 4 — A doctor who works for a big group

> **GreenPoint Healthcare** is a company that owns many clinics under different names. One of them is **MyGoodHealth** clinic, where **Dr. Alex** works. John visits MyGoodHealth, and Dr. Alex treats him.

The claim is sent by **GreenPoint Healthcare** (or by MyGoodHealth on its behalf).

| Question | Answer | Why |
|---|---|---|
| Patient | John | |
| Rendering provider | **Dr. Alex** | She did the work |
| Referring provider | *None* | John came on his own |
| Service facility | **MyGoodHealth** | The clinic where the visit happened |
| Billing provider | **GreenPoint Healthcare** | The company that employs Dr. Alex gets paid |
| Diagnosis | R10.10 | |
| Procedure | 99213 | |

**Lesson:** the doctor who does the work and the one who gets paid **can be different**. Dr. Alex is an employee; the money goes to the company. This is very common in the US — most doctors today work for groups, hospitals or large companies.

## How to work it out yourself

For any visit, ask these questions in order:

1. **Who actually treated the patient?** → rendering provider
2. **Did another doctor send them or order the service?** → referring (or ordering) provider
3. **Where did it happen?** → service facility
4. **Whose name is on the contract with the insurance company — who receives the money?** → billing provider

## Where they go on the claim

Each entity has its own place on the claim form, and each needs the provider's **NPI** — a unique 10-digit number every US healthcare provider has. Individual doctors have their own NPI, and companies like GreenPoint have a separate company NPI.

> **Technical name:** on the [CMS-1500 form](/blog/cms-1500-vs-ub-04/), the referring provider goes in **box 17**, the rendering provider's NPI in **box 24J**, the service facility in **box 32**, and the billing provider in **box 33**. In the electronic **837** claim, each one has its own section (called a *loop*).

## Common mistakes

- **Wrong billing provider.** Dr. Alex's own NPI is used as the billing provider instead of GreenPoint's. The insurer has no contract under that number, so the claim is denied.
- **Missing referring provider.** A specialist bills an HMO without the referring doctor. Denied.
- **Wrong location.** A doctor works at two clinics, and the claim shows the wrong one. Some insurers pay differently by location — or only cover one of them.

## The one thing to remember

**Every claim tells a story: who treated whom, who sent them, where, and who should be paid.** Each part of that story must be correct and match what the insurance company has on file.

## Words you'll hear

| Word | Meaning |
|---|---|
| **Rendering provider** | The doctor or lab who did the work |
| **Referring provider** | The doctor who sent the patient |
| **Ordering provider** | The doctor who ordered a test |
| **Service facility / place of service** | Where the service was done |
| **Billing provider** | The person or company that gets paid |
| **NPI** | National Provider Identifier — a 10-digit ID for every US provider |
| **ICD-10 code** | A code for what was wrong (the diagnosis) |
| **CPT code** | A code for what was done (the procedure) |

<!-- Senthil: optional — add a short real story, e.g. a claim denied because of the wrong billing NPI, or a group-billing setup that confused a client. -->

## Next in this series

- **Previous:** [Insurance Verification](/blog/insurance-verification/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- **Next:** [ICD-10, CPT and HCPCS](/blog/icd-10-cpt-hcpcs-codes/) — medical codes explained

*Setting up providers, locations and billing entities correctly is one of the first things I look at in any billing system. Need help with yours, or training for your team? [Get in touch](/#contact).*
