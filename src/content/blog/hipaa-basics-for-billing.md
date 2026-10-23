---
title: "HIPAA Basics for Medical Billing Staff"
date: 2026-10-23T23:59:00
summary: "What HIPAA is, what counts as protected health information, what billing staff may and may not share, and the everyday habits that keep patient data safe — a plain-English guide for beginners, including offshore teams."
tags: [Billing, RCM, HIPAA, Compliance]
draft: false
faq:
  - q: "What is HIPAA?"
    a: "HIPAA is a US federal law from 1996 that protects patients' health information and sets national standards for electronic healthcare transactions such as claims and payments."
  - q: "What is PHI?"
    a: "PHI, or protected health information, is any health information that can be linked to a specific person — such as a name, date of birth, member ID or address together with a diagnosis, treatment or bill."
  - q: "Can billing staff share patient information with insurance companies?"
    a: "Yes. HIPAA allows health information to be used and shared for treatment, payment and healthcare operations. Sending claims and talking to insurers about payment is part of payment — but only the minimum information needed."
  - q: "What is the minimum necessary rule?"
    a: "It means using or sharing only the smallest amount of patient information needed to do the job. A billing person needs codes and dates, not the doctor's full notes, unless the insurer asks for them."
  - q: "What is a business associate agreement?"
    a: "A business associate agreement (BAA) is a contract between a healthcare provider and a company that handles its patient data, such as a billing company or software vendor. It commits the company to protect the data under HIPAA."
  - q: "Does HIPAA apply to billing teams outside the US?"
    a: "Yes, through contracts. Offshore billing companies work under business associate agreements with their US clients and must follow HIPAA's rules for protecting patient data."
  - q: "What should I do if I send patient information to the wrong person?"
    a: "Report it to your supervisor or privacy officer immediately. The organization must assess it and may have to notify the patient and the government under HIPAA's breach notification rule."
  - q: "Can I email patient information?"
    a: "Only through secure, approved systems that the organization has set up for this. Never send patient details from personal email accounts, messaging apps or personal phones."
---

*Part of my beginner series on US medical billing. No healthcare background needed.*

Billing staff see **private information** all day: names, dates of birth, insurance numbers, diagnoses, treatments, bills. In the US, a law called **HIPAA** protects that information — and everyone who handles it must follow its rules, including billing companies **outside** the US.

This post covers what a beginner needs to know. It's not legal advice — your organization will have its own policies and training — but it will help you understand **why** those policies exist.

## What is HIPAA?

**HIPAA** is the *Health Insurance Portability and Accountability Act*, a US federal law from **1996**. For billing staff, its most important parts are:

| Part | What it does |
|---|---|
| **Privacy Rule** | Says who may see and share patients' health information, and when |
| **Security Rule** | Says how electronic health information must be protected |
| **Breach Notification Rule** | Says what must happen when information is lost or exposed |
| **Transactions and code sets** | Requires standard electronic formats for claims, payments and eligibility — the [X12 EDI transactions](/blog/x12-edi-transactions/) — and standard codes like [ICD-10 and CPT](/blog/icd-10-cpt-hcpcs-codes/) |

So HIPAA isn't only about privacy. It's also the reason every insurer uses the same claim format.

## What is protected? PHI

The information HIPAA protects is called **PHI** — *protected health information*.

**Simple rule:** PHI is **health information** joined with **anything that identifies the person**.

![What counts as protected health information, and everyday do and don't rules for billing staff](/images/posts/hipaa-basics.svg)

A diagnosis code on its own, with no patient attached, isn't PHI. But "**Anna Smith, born 12 March 1990, diagnosis J02.9**" is. So is a claim, an EOB, a patient statement, a phone call about a bill, and a spreadsheet of patient balances.

When it's **electronic** — in a billing system, a file, an email — it's called **ePHI**, and the Security Rule applies too.

## Who must follow HIPAA?

- **Covered entities** — healthcare providers that bill electronically, health plans (insurers), and **clearinghouses**.
- **Business associates** — companies that handle PHI **for** a covered entity: billing companies, coding companies, software vendors, IT providers, offshore teams.

A business associate must sign a **business associate agreement (BAA)** with its client. The BAA commits it to protect the data and follow HIPAA — wherever in the world its staff work. So a billing team in India working for a US clinic is bound by HIPAA through that contract.

## What billing staff may share

HIPAA allows PHI to be used and shared for **TPO**:

- **T**reatment — caring for the patient
- **P**ayment — billing and getting paid
- **O**perations — running the practice, like audits and training

So sending claims, calling insurers about payment, and sending patients their bills are **allowed** — that's "payment".

But even then, the **minimum necessary** rule applies: use and share **only what's needed** for the job.

> **Example:** BlueHealth calls to ask about Anna's claim. You confirm the date of service and the codes. You **don't** read out her full medical history — unless BlueHealth formally asks for records to support the claim.

## Patients' rights

Patients have rights over their own information. They can:

- **see and get copies** of their records, including billing records
- ask for **corrections** if something is wrong
- ask **who** their information has been shared with
- ask the clinic **not to send** information about a service to their insurer, if they **paid for it in full themselves**

Billing staff often handle these requests — especially for billing records.

## Everyday habits that keep data safe

Most HIPAA problems aren't hackers. They're **everyday mistakes**:

- **Check who you're talking to.** Before discussing a bill on the phone, confirm the caller is the patient (or allowed to act for them) — for example, with their date of birth and address.
- **Use only approved, secure systems.** No patient details in personal email, WhatsApp, text messages or personal cloud storage.
- **Lock your screen** whenever you step away.
- **Never share passwords** or logins — each person must use their own.
- **Don't leave paper lying around.** Collect printouts straight away; shred what you don't need.
- **Look only at what you need.** Opening records out of curiosity — a friend's, a celebrity's — is a violation, even if you share nothing.
- **Double-check before sending.** The right fax number, the right email address, the right patient's statement in the right envelope.
- **Working from home?** Use the organization's secure setup, keep screens out of view, and don't download patient files to personal devices.

## When something goes wrong

Mistakes happen: a statement sent to the wrong address, a laptop lost, an email to the wrong person. **Report it immediately** to your supervisor or the organization's **privacy officer**. Don't try to hide it or fix it alone.

The organization must assess what happened. If patient information was exposed, the **Breach Notification Rule** may require it to tell the **affected patients** and the **US Department of Health and Human Services** — and, for large breaches, the media. Reporting fast makes all of this easier.

## Why it matters

- **Patients** trust the clinic with very private information.
- **Penalties** for violations can be large — fines for organizations, and in serious cases criminal charges for individuals.
- **Clients** of billing companies choose partners they trust with their data. A strong HIPAA culture is a business advantage, especially for **offshore** billing teams.

> **How software helps:** good billing software protects data with individual logins, role-based access (people see only what their job needs) and an audit trail of who did what. [eClaimPilot](https://eclaimpilot.com/features) is cloud-based, HIPAA-focused, and includes role-based permissions and an audit trail of user actions. Step-by-step guide: [Organization Admin](https://help.eclaimpilot.com/admin/index.html).

## The one thing to remember

**Health information + anything that identifies the person = PHI.** Use it only for your job, share only what's needed, keep it in secure systems, and report any mistake straight away.

## Words you'll hear

| Word | Meaning |
|---|---|
| **HIPAA** | The US law protecting health information and standardizing healthcare transactions |
| **PHI / ePHI** | Protected health information / in electronic form |
| **Covered entity** | A provider, health plan or clearinghouse that must follow HIPAA |
| **Business associate** | A company that handles PHI for a covered entity |
| **BAA** | Business associate agreement — the contract that binds a business associate to HIPAA |
| **TPO** | Treatment, payment and operations — the everyday uses HIPAA allows |
| **Minimum necessary** | Using only the information the task needs |
| **Breach** | PHI lost, stolen or shared with the wrong person |
| **Privacy officer** | The person responsible for HIPAA in an organization |
| **Audit trail** | A record of who looked at or changed information |

<!-- Senthil: optional — add a short real story or tip from working with offshore billing teams, e.g. how you set up secure access, or a common slip new staff make. -->

## Next in this series

- **Previous:** [Denials and A/R Follow-Up](/blog/denials-and-ar-follow-up/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- **Next:** [EHR, ePrescribing and Health Data Exchange Today](/blog/ehr-eprescribing-health-data-exchange/)

*Setting up secure, HIPAA-ready billing workflows — including for offshore teams — is part of what I help billing companies with. [Get in touch](/#contact).*
