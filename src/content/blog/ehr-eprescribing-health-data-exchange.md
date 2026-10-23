---
title: "EHR, ePrescribing and Health Data Exchange Today"
date: 2026-10-23T23:59:20
summary: "A beginner's tour of how US healthcare shares information today — electronic health records, ePrescribing, lab connections, patient apps, HL7 and FHIR, health information exchanges and TEFCA — and why it all matters for billing."
tags: [EMR, EHR, Interoperability, HL7]
draft: false
faq:
  - q: "What is the difference between an EMR and an EHR?"
    a: "An EMR (electronic medical record) is a digital chart used inside one practice. An EHR (electronic health record) is designed to share information with other providers, labs, pharmacies and patients. Today the two terms are often used to mean the same thing."
  - q: "What is ePrescribing?"
    a: "ePrescribing is sending a prescription electronically from the doctor's system straight to the patient's pharmacy, instead of on paper or by fax. In the US, most ePrescriptions travel through the Surescripts network."
  - q: "What is HL7?"
    a: "HL7 is a group of standards for exchanging clinical information between systems — for example, lab orders and results, or patient registration details. HL7 version 2 messages are still very widely used."
  - q: "What is FHIR?"
    a: "FHIR (Fast Healthcare Interoperability Resources, pronounced 'fire') is a modern HL7 standard that shares health data through web APIs, the same way modern apps share data. US rules require certified EHRs to offer FHIR APIs for patient access."
  - q: "What is TEFCA?"
    a: "TEFCA (Trusted Exchange Framework and Common Agreement) is a US national framework, live since December 2023, that connects health information networks so records can be shared across the country under common rules."
  - q: "What is information blocking?"
    a: "Information blocking is unreasonably preventing the sharing of electronic health information. The 21st Century Cures Act made it a violation for health IT developers, health information networks and providers, with limited exceptions."
  - q: "Why do EHRs matter for medical billing?"
    a: "Billing depends on the EHR. The codes and charges come from the doctor's documentation, and the notes must support every code billed. Good links between the EHR and the billing system prevent errors and denials."
---

*Part of my beginner series on US medical billing. No healthcare background needed.*

In [A Patient's Visit, Step by Step](/blog/patient-visit-step-by-step/), we saw that most clinics use two systems: a **practice management system (PMS)** for the business side, and an **electronic health record (EHR)** for the medical side. This post looks at the EHR — and at how it **talks to the rest of healthcare**.

Fifteen years ago, much of this was paper, fax and phone. Today, most of it is electronic. Beginners hear a lot of acronyms here — HL7, FHIR, TEFCA — so let's take them one at a time.

## EMR vs EHR

- An **EMR** — *electronic medical record* — is a digital version of the paper chart, used **inside one practice**.
- An **EHR** — *electronic health record* — is built to **share** information: with labs, pharmacies, hospitals, other doctors and the patient.

Today almost every system can share, so people use the two words interchangeably.

### What's in an EHR?

The patient's **chart**: the reason for each visit, history, vital signs, allergies, medicines, examination notes, diagnoses, test results, prescriptions, and the treatment plan.

### How did EHRs become universal?

In **2009**, a law called the **HITECH Act** paid doctors and hospitals to adopt **certified** EHRs and use them in meaningful ways — the program was first called **Meaningful Use**, and is now called **Promoting Interoperability**. Within a decade, most US practices and hospitals had moved from paper to EHRs.

> **Technical name:** EHRs are certified under a program run by the **Office of the National Coordinator for Health IT (ONC)**, now part of HHS's **Assistant Secretary for Technology Policy (ASTP/ONC)**. Certification replaced the older **CCHIT** certification you may see in older articles.

## How the EHR connects to everyone else

![The EHR in the middle, connected to the lab, pharmacy, other doctors and hospitals, the insurer, the billing system and the patient](/images/posts/ehr-connections.svg)

### The lab: orders and results

When **Dr. Lee** orders blood tests for **Anna**, the order goes electronically from her EHR to **Century Lab**. When the results are ready, they come back the same way — straight into Anna's chart, often with abnormal values flagged.

> **Technical name:** these are usually **HL7 version 2** messages — an *order* message and a *result* message. HL7 v2 has been the workhorse of hospital and lab systems for decades.

### The pharmacy: ePrescribing

Dr. Lee prescribes an antibiotic. Instead of a paper slip, the prescription goes **electronically** to Anna's chosen pharmacy:

1. Dr. Lee enters the prescription in the EHR.
2. It travels through a national network — in the US, mainly **Surescripts** — to the pharmacy.
3. The pharmacy's system receives it, and Anna picks up her medicine.

**Refills** work in reverse: the pharmacy sends a **renewal request** to the doctor's EHR, and the doctor approves it with a click.

ePrescribing also lets the EHR check the patient's **drug history**, **allergies**, and whether their **insurance** covers the medicine. For strong medicines like opioids — **controlled substances** — ePrescribing uses extra security, such as two-factor login, and Medicare requires most of these prescriptions to be electronic.

> **Technical name:** ePrescriptions use a standard called **NCPDP SCRIPT**. Prescribing controlled substances electronically is called **EPCS**.

### Other doctors and hospitals

When Anna is referred to a specialist, or ends up in a hospital, her records need to follow her. There are several ways:

- **Health information exchanges (HIEs)** — regional or state networks that let local providers share records.
- **National networks** — many EHRs are connected through national networks that exchange records between different EHR systems.
- **TEFCA** — the *Trusted Exchange Framework and Common Agreement*, a national framework **live since December 2023**, that connects these networks under common rules. It's the modern version of the "national health information network" people talked about in the 2000s.

The records are usually shared as **summary documents** — a standard "snapshot" of the patient's problems, medicines, allergies and results.

> **Technical name:** the summary documents are usually **C-CDA** documents (such as a *Continuity of Care Document*). TEFCA networks are run by **Qualified Health Information Networks (QHINs)**.

### The patient: portals and apps

Patients can see their own records, results, visit summaries and bills in a **patient portal** — and increasingly in **apps** of their choice. US rules require certified EHRs to let patients get their data through a standard **API** (a way for apps to connect).

> **Technical name:** that API uses **FHIR** — *Fast Healthcare Interoperability Resources*, said "fire". FHIR is a modern HL7 standard that works like the APIs behind everyday web and phone apps. The set of data that must be shareable is called **USCDI**.

### The insurer

The EHR and billing system talk to insurers for **eligibility checks**, **claims** and **payments** — mostly through the **X12** transactions in [this post](/blog/x12-edi-transactions/). **Prior authorization** is moving to **FHIR APIs** too: new federal rules require many insurers to support electronic prior authorization through APIs in the next few years. (See [Prior Authorization](/blog/prior-authorization-and-referrals/).)

### The billing system

Inside the clinic, the EHR sends the visit's **diagnosis codes** and **charges** to the PMS for billing — often through an HL7 message or an API. This link is where many billing errors start: a missing code, a wrong date, or a charge that never arrives.

## Information blocking: sharing is now required

For years, some systems made sharing **hard on purpose** — to keep patients and doctors locked in. The **21st Century Cures Act** (2016) changed that. Its **information blocking** rules make it a violation for EHR vendors, health information networks and providers to unreasonably **block** the sharing of electronic health information. There are a few allowed exceptions, such as protecting privacy or security.

For patients, this means faster access to their own results and notes. For developers, it means building systems that share by default.

## Why this matters for billing

- **Every code comes from the chart.** The doctor's notes must support each diagnosis and procedure billed. (See [ICD-10, CPT and HCPCS](/blog/icd-10-cpt-hcpcs-codes/).)
- **Good EHR–PMS links prevent errors** — the right patient, the right codes, the right dates, on every claim.
- **Records support appeals.** When a claim is denied, the EHR holds the proof. (See [Denials and A/R Follow-Up](/blog/denials-and-ar-follow-up/).)
- **Prior authorization** and **eligibility** are moving into the EHR, so problems can be caught **before** the visit.

> **How software helps:** billing works best when charges flow cleanly from the clinical system. [eClaimPilot](https://eclaimpilot.com/features) can import patients, encounters and charges from other systems, and turn encounters into claims. Step-by-step guides: [data import](https://help.eclaimpilot.com/billing/import/index.html), [encounter imports](https://help.eclaimpilot.com/billing/import/types-encounters.html) and [creating claims from encounters](https://help.eclaimpilot.com/billing/encounters/create-claim-by-encounter.html).

## The one thing to remember

**The EHR is the clinic's medical record — and today it's connected to labs, pharmacies, other providers, patients, insurers and the billing system.** Billing depends on it: every claim is only as good as the chart behind it.

## Words you'll hear

| Word | Meaning |
|---|---|
| **EMR / EHR** | Electronic medical / health record — the digital patient chart |
| **Certified EHR** | An EHR that meets federal certification standards |
| **Interoperability** | Systems being able to share and use each other's data |
| **ePrescribing** | Sending prescriptions electronically to the pharmacy |
| **EPCS** | Electronic prescribing of controlled substances |
| **HL7** | Standards for exchanging clinical data (v2 messages, C-CDA documents, FHIR) |
| **FHIR** | A modern, API-based HL7 standard |
| **API** | A standard way for one system or app to connect to another |
| **HIE** | Health information exchange — a network for sharing records |
| **TEFCA** | The US national framework connecting health information networks |
| **Information blocking** | Unreasonably preventing health information from being shared |
| **Patient portal** | A secure website where patients see their records and bills |

<!-- Senthil: optional — add a short real story from your EMR/LIS work, e.g. an HL7 lab interface, Surescripts certification, or an EHR-to-billing charge feed that caused denials until it was fixed. -->

## Next in this series

- **Previous:** [HIPAA Basics for Billing Staff](/blog/hipaa-basics-for-billing/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- That's the end of the beginner series — thank you for reading. More posts on EDI, EMR and billing software are coming.

*I've built EMR, PMS, LIS and billing systems — including HL7 lab interfaces and ePrescribing. Need help connecting your systems, or training for your team? [Get in touch](/#contact).*
