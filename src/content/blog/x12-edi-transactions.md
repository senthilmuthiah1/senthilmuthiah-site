---
title: "X12 EDI Transactions for Beginners: 837, 835, 270/271 and More"
date: 2026-10-23T23:58:00
summary: "What EDI is, why US healthcare uses numbered transactions like 837 and 835, what each one does, the order they happen in, and what a real EDI file looks like — explained for complete beginners."
tags: [EDI, Billing, RCM]
draft: false
faq:
  - q: "What is EDI in medical billing?"
    a: "EDI, or electronic data interchange, is the standard way computers send healthcare business information — such as claims, eligibility checks and payment details — to each other in a fixed format."
  - q: "What is X12?"
    a: "X12 is the organization, and the name of the standard, that defines the format of EDI transactions. US healthcare is required by HIPAA to use X12 transactions for claims, payments, eligibility and more."
  - q: "What is the difference between an 837 and an 835?"
    a: "The 837 is the claim the provider sends to the insurer. The 835 is the payment details the insurer sends back — the electronic version of the EOB."
  - q: "What is a 270/271?"
    a: "The 270 is an electronic question asking whether a patient is covered and what their benefits are. The 271 is the insurer's answer."
  - q: "What is the difference between a 999 and a 277CA?"
    a: "A 999 says whether the whole file was received and readable. A 277CA says whether each individual claim inside the file was accepted or rejected."
  - q: "What does 5010 mean?"
    a: "5010 is the version of the X12 standard required for US healthcare transactions since January 2012. Newer versions exist but are not yet required."
  - q: "Do I need to read EDI files to work in medical billing?"
    a: "Not usually. Billing software creates and reads EDI files for you. But knowing what each transaction does helps you understand rejections, acknowledgements and payments — and reading the raw file helps when something goes wrong."
  - q: "What are loops and segments?"
    a: "A segment is one line of an EDI file, like a line in a form, starting with a short code such as NM1 or CLM. A loop is a group of related segments, such as all the lines about one patient."
---

*Part of my beginner series on US medical billing. No healthcare background needed. EDI is at the heart of my own work.*

Throughout this series you've seen numbers like **837**, **835**, **270**, **999** in small "Technical name" notes. They're **EDI transactions** — the electronic messages that carry almost all of US healthcare's business. This post brings them together in one place.

You don't need to be a programmer to understand them. You just need to know **what each message says**, and **when** it's sent.

## What is EDI?

**EDI** stands for **electronic data interchange**: computers sending business documents to each other in a **fixed, agreed format**, with no person in between.

Think of it as **forms with numbers**. Every type of form has a number, and every box on the form has a fixed place. Because everyone uses the same forms, any clinic's computer can talk to any insurer's computer.

- The standard is called **X12**, after the organization that writes it.
- In US healthcare, the law (**HIPAA**) **requires** these standard formats for claims, payments, eligibility checks and more.
- The version required today is **5010**, in use since **1 January 2012**.

## The transactions, in the order they happen

Let's follow Anna's visit again — this time as a series of electronic messages between Lee Family Clinic and BlueHealth (usually through a [clearinghouse](/blog/what-is-a-clearinghouse/)).

![EDI messages between the clinic and the insurer, before and after the visit](/images/posts/edi-transactions.svg)

### Before the visit

| Number | Name | In plain words | Sent by |
|---|---|---|---|
| **270** | Eligibility inquiry | "Is Anna covered? What are her benefits?" | Clinic |
| **271** | Eligibility response | "Yes — active PPO, $25 copay, $400 deductible left…" | Insurer |
| **278** | Services review request | "May we do this MRI?" | Clinic |
| **278** | Services review response | "Approved — authorization BH-PA-77812" | Insurer |

(See [Insurance Verification](/blog/insurance-verification/) and [Prior Authorization](/blog/prior-authorization-and-referrals/).)

### After the visit

| Number | Name | In plain words | Sent by |
|---|---|---|---|
| **837** | Health care claim | "Here is the claim." | Clinic |
| **TA1** | Interchange acknowledgement | "The outer envelope of your file is broken." (sent mainly when there's a problem) | Clearinghouse / insurer |
| **999** | Implementation acknowledgement | "Your file was received and is readable" — or not | Clearinghouse / insurer |
| **277CA** | Claim acknowledgement | "Each claim was accepted — or rejected, and why" | Clearinghouse / insurer |
| **276** | Claim status inquiry | "Where is my claim?" | Clinic |
| **277** | Claim status response | "Still processing" / "Paid" / "Denied" | Insurer |
| **835** | Claim payment / advice | "Here's what we paid, and why" — the ERA | Insurer |

### The three kinds of 837

| Type | For | Paper version |
|---|---|---|
| **837P** | Professional claims — doctors, therapists | CMS-1500 |
| **837I** | Institutional claims — hospitals, facilities | UB-04 |
| **837D** | Dental claims | ADA dental form |

(See [CMS-1500 vs UB-04](/blog/cms-1500-vs-ub-04/).)

### The 999: three possible answers

| Code | Means |
|---|---|
| **A** | Accepted |
| **E** | Accepted, but with errors noted |
| **R** | Rejected — the file must be fixed and sent again |

(See [Rejected vs Denied](/blog/rejection-vs-denial/).)

## Other transactions you may hear about

Clinics rarely use these, but they're part of the same family:

| Number | Name | Used for |
|---|---|---|
| **834** | Benefit enrollment | Employers or exchanges telling insurers who is covered |
| **820** | Premium payment | Paying insurance premiums |
| **275** | Patient information | Sending medical records or attachments to support a claim |
| **997** | Functional acknowledgement | The older version of the 999 |

## What does an EDI file look like?

Here's a small part of the **837** claim for Anna's visit (dummy data). Each line is called a **segment**, and ends with a `~`. Inside a segment, the pieces are separated by `*`.

```text
NM1*IL*1*SMITH*ANNA****MI*BHX482913557~
CLM*ANN1001*150***11:B:1*Y*A*Y*Y~
DTP*472*D8*20261014~
HI*ABK:J029~
SV1*HC:99213*150*UN*1***1~
```

And here's what it says, in plain words:

| Segment | Means |
|---|---|
| `NM1*IL…` | The **insured member** is **Anna Smith**, member ID **BHX482913557** |
| `CLM*ANN1001*150…` | Claim for account **ANN1001**, total **$150**. `11` = doctor's office; `1` = an original claim (see [Corrected Claims](/blog/corrected-claims/)) |
| `DTP*472*D8*20261014` | Date of service: **14 October 2026** |
| `HI*ABK:J029` | Diagnosis (ICD-10): **J02.9**, sore throat |
| `SV1*HC:99213*150*UN*1` | Service: CPT **99213**, **$150**, **1** unit |

A real 837 has many more segments — the billing provider, the payer, the rendering doctor and so on — grouped into sections called **loops**. But every segment follows the same idea: a short **name**, then the **values** in fixed positions.

> **Technical name:** each file is wrapped in "envelopes": **ISA/IEA** (the interchange — the outer envelope), **GS/GE** (a functional group) and **ST/SE** (one transaction). The TA1 checks the outer envelope; the 999 checks the transactions inside it. Each transaction type has an **implementation guide** that defines every segment and rule — for example, the 837P guide is **005010X222A1**.

## How it all flows through software

In a modern billing system:

1. The user enters the claim on a screen.
2. The software turns it into an **837** file.
3. It sends the file to the **clearinghouse**, usually over a secure connection (**SFTP**) or an **API**.
4. It picks up the **TA1**, **999** and **277CA** replies, reads them, and marks each claim accepted or rejected.
5. It picks up the **835**, and auto-posts the payments. (See [Payment Posting](/blog/payment-posting/).)

The user rarely sees the raw files — but when something goes wrong, someone who can **read** them can usually find the problem in minutes.

## Common mistakes

- **Thinking a 999 "Accepted" means the claim is accepted.** It only means the **file** was readable. Check the **277CA** for each claim.
- **Not reading 277CAs at all**, so rejected claims sit unnoticed.
- **Not enrolling for 835s** with each insurer — payments arrive, but no electronic details.
- **Assuming every insurer uses every transaction.** The 276/277 and 278, for example, aren't supported everywhere; many insurers use their websites instead.
- **Hand-editing EDI files.** One misplaced character can reject a whole file.

> **How software helps:** billing software should create every 837 correctly and read every reply automatically. [eClaimPilot](https://eclaimpilot.com/features) generates 837P claims, sends them to the clearinghouse, reads 999 and 277CA acknowledgements, and auto-posts 835 ERAs. Step-by-step guides: [EDI transmission queue](https://help.eclaimpilot.com/billing/transmission/edi-queue.html), [acknowledgements](https://help.eclaimpilot.com/billing/transmission/acknowledgements.html), [eligibility](https://help.eclaimpilot.com/billing/eligibility/index.html) and [ERA payments](https://help.eclaimpilot.com/billing/payments/era-payments.html).

## The one thing to remember

**270/271 before the visit; 837 to send the claim; 999 and 277CA to confirm it arrived; 835 for the payment.** Each number is simply a standard electronic form with one job.

## Words you'll hear

| Word | Meaning |
|---|---|
| **EDI** | Electronic data interchange — computers exchanging business documents |
| **X12** | The standard used for US healthcare EDI |
| **5010** | The X12 version required today |
| **Transaction** | One type of EDI message, such as an 837 claim |
| **Segment** | One line of an EDI file |
| **Element** | One value inside a segment |
| **Loop** | A group of related segments |
| **Envelope** | The ISA, GS and ST wrapper around a transaction |
| **Implementation guide** | The official rulebook for one transaction type |
| **Acknowledgement** | A reply confirming receipt — TA1, 999 or 277CA |
| **ERA** | Electronic remittance advice — the 835 |

<!-- Senthil: optional — add a short real story, e.g. a 999 "Accepted" that hid rejected claims in the 277CA, or a one-character error that rejected a whole batch. Link to your EDI training or EDI library if you like. -->

## Next in this series

- **Previous:** [Payment Posting](/blog/payment-posting/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- **Next:** [Types of Reimbursement](/blog/types-of-reimbursement/)

*I teach X12 EDI to beginners and build EDI software for billing companies — from 837 generation to 835 auto-posting. Want to learn EDI properly, or need EDI built into your system? [Get in touch](/#contact).*
