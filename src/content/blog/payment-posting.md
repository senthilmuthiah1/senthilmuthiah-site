---
title: "Payment Posting: Recording Every Dollar Correctly"
date: 2026-10-23T23:57:40
summary: "What payment posting is, how insurance and patient payments are recorded line by line, how electronic ERAs are auto-posted, how paper EOBs are handled, and how to make sure everything adds up."
tags: [Billing, RCM, Payments, EOB]
draft: false
faq:
  - q: "What is payment posting in medical billing?"
    a: "Payment posting is recording every payment, write-off and patient balance against the right claim line in the billing system, using the insurer's EOB or ERA and the patient's payments."
  - q: "What is auto-posting?"
    a: "Auto-posting is when billing software reads the electronic remittance (ERA, the 835 file) and records each payment and adjustment automatically, instead of someone typing them in."
  - q: "How do I post a paper EOB?"
    a: "Either type each line into the billing system by hand, or use a tool that reads the PDF EOB and turns it into an electronic 835 file the software can auto-post."
  - q: "What is payment reconciliation?"
    a: "Reconciliation is checking that the total posted from an EOB or ERA matches the money that actually arrived in the bank, so nothing is missing or posted twice."
  - q: "What is an unapplied payment?"
    a: "An unapplied payment is money received but not yet matched to a specific claim, for example a patient payment with no account number. It must be applied or refunded."
  - q: "What is a recoupment or takeback?"
    a: "A recoupment is when an insurer takes back money it paid earlier, often by reducing a later payment. It appears as a separate adjustment on the ERA and must be posted to the original claim."
  - q: "Why is payment posting important?"
    a: "It keeps every claim's balance accurate, moves remaining balances to the next insurer or the patient, and is where denials and underpayments are first spotted."
---

*Part of my beginner series on US medical billing. No healthcare background needed. Includes my own approach to automating paper EOBs.*

When an insurance company pays a claim, two things arrive at the clinic:

1. **The money** — a bank transfer or a check.
2. **The explanation** — an EOB or ERA that says which claims the money is for, and why. (See [How to Read an EOB](/blog/how-to-read-an-eob/).)

**Payment posting** is recording that money in the billing system — **line by line, claim by claim** — so every claim shows exactly what was paid, what was written off, and what is still owed.

Think of it as **updating a shop's accounts** after a delivery of cash. If you put the money in the wrong customer's account, or forget to note a discount, the books stop making sense. The same is true for a clinic.

## Why it matters so much

Payment posting is not just bookkeeping. It's where the clinic:

- **closes** claims that are fully paid
- **moves** what's left to the next insurer or the patient
- **spots** denials and underpayments — often for the first time

A mistake here spreads everywhere: wrong patient bills, missed secondary claims, denials nobody works, and money that seems to disappear.

## How payment posting works

![Payment posting: the money and the explanation arrive, are matched, each line is posted, and every balance goes to one of three places](/images/posts/payment-posting.svg)

### Step 1 — Match the money to the explanation

Insurers usually pay **many claims in one payment**. So before posting anything, check that the **total on the ERA or EOB** matches the **money that reached the bank**.

- For a bank transfer (**EFT**), match the **trace number** on the ERA to the one on the bank statement.
- For a **check**, match the check number and amount.

If they don't match, stop and find out why **before** posting.

### Step 2 — Post each claim line

For every line on every claim, record:

| What | Example (Anna's wart removal) |
|---|---|
| **Paid** | $72 |
| **Contract write-off (CO)** | $30 — the difference between the charge and the agreed price |
| **Patient responsibility (PR)** | $18 coinsurance |
| **Denied amounts**, with the reason code | — |

After posting, the line's balance should be exactly the patient's share — or **zero**.

### Step 3 — Send each balance where it belongs

Every posted line ends up in one of three places:

- **Balance $0** → the claim is **closed**.
- **Patient responsibility left** → send to the **next insurer**, or put it on the patient's **statement**. (See [Deductible, Copay and Coinsurance](/blog/deductible-copay-coinsurance/).)
- **Denied or underpaid** → a **work list** for someone to correct, appeal or follow up. (See [Rejected vs Denied](/blog/rejection-vs-denial/).)

### Step 4 — Balance the batch

At the end, the total posted must equal the total received. Many teams post in **batches** — one batch per payment or per day — and don't close a batch until it balances to the cent.

## Electronic posting: the ERA

Most insurers send an **ERA** — the electronic version of the EOB. Billing software reads it and posts everything **automatically**. This is called **auto-posting**.

Auto-posting is fast and accurate, but it isn't "set and forget". Someone still needs to handle the **exceptions**:

- claims the software **couldn't match** — for example, a wrong account number
- **denials** — they need action, not just recording
- **takebacks** (recoupments) — when the insurer takes back money it paid on an earlier claim
- **interest** paid on late claims
- payments that don't match the **expected** amount

> **Technical name:** the ERA is the **835** file. Takebacks, interest and other amounts that aren't tied to one claim appear in its **PLB** (*provider-level adjustment*) line. The EFT trace number is in the **TRN** line.

## Paper EOBs: two ways

Some insurers still send **paper** or **PDF** EOBs. There are two ways to post them:

**1. Type them in by hand.** Someone reads each EOB and enters every line. It works, but it's slow, and typing mistakes are common — a wrong digit can post money to the wrong claim.

**2. Turn the paper into electronic data.** A **PDF extractor tool** reads the EOB and creates an **835 file** from it. The billing software then auto-posts it exactly like an ERA.

- If the tool and the billing system **aren't connected**, the tool outputs an 835 file, which is then imported into the billing software.
- If they **are connected** — by database or API — the tool can send the data straight in.

This approach saves hours of typing for clinics that still receive many paper EOBs, and makes paper and electronic payments follow **the same path**.

## Patient payments

Patients pay in several ways:

- **at check-in** — copays and estimated amounts
- **after a statement** — by mail, phone or online
- **on a payment plan** — a fixed amount each month

Each payment must be posted to the **right visit**. When it can't be matched straight away — no account number, or more than the patient owes — it's held as an **unapplied payment** or **credit**, and must be applied or **refunded** later. Credits shouldn't sit forever.

## Overpayments and refunds

Sometimes a clinic is paid **too much**: the insurer paid twice, or both the insurer and the patient paid the same amount. The extra money isn't the clinic's to keep. It must be **refunded** to whoever overpaid, or the insurer will take it back later. Many insurers and government programs set **time limits** for returning overpayments.

## Common mistakes

- **Posting a whole payment to one claim** instead of splitting it across all the claims it covers.
- **Posting to the wrong patient or the wrong line.**
- **Writing off PR amounts** — the patient's share — as if they were contract write-offs.
- **Recording denials without working them.** A posted denial is not a fixed denial.
- **Ignoring takebacks** — the money is gone, but the claim still shows it as paid.
- **Not balancing batches**, so small errors pile up for months.
- **Letting unapplied payments and credits pile up.**

> **How software helps:** billing software auto-posts ERAs line by line, sends patient balances to statements and secondary claims, and puts denials and mismatches into work lists. [eClaimPilot](https://eclaimpilot.com/features) includes ERA/835 auto-posting, manual posting, adjustments and write-offs. Step-by-step guides: [ERA payments](https://help.eclaimpilot.com/billing/payments/era-payments.html), [insurance payments](https://help.eclaimpilot.com/billing/payments/insurance-payments.html), [patient payments](https://help.eclaimpilot.com/billing/payments/patient-payments.html) and [payment imports](https://help.eclaimpilot.com/billing/import/types-payments.html).

## The one thing to remember

**Match the money first, then post every line — paid, written off, patient's share.** Send each balance where it belongs, and never close a batch until it matches what reached the bank.

## Words you'll hear

| Word | Meaning |
|---|---|
| **Payment posting** | Recording payments and adjustments against claim lines |
| **Auto-posting** | Software posting an ERA automatically |
| **Manual posting** | A person entering payments by hand |
| **ERA / 835** | The electronic remittance advice |
| **EFT** | Electronic funds transfer — money paid straight to the bank |
| **Trace number** | The reference that links an EFT to its ERA |
| **Batch** | A group of payments posted and balanced together |
| **Reconciliation** | Checking posted totals against the bank |
| **Unapplied payment** | Money received but not yet matched to a claim |
| **Recoupment / takeback** | An insurer taking back money it paid earlier |
| **Overpayment** | Money received beyond what's owed — to be refunded |

<!-- Senthil: optional — add a short real story, e.g. how a clinic's paper EOB backlog was cleared with the PDF-to-835 approach, or a takeback that nobody posted. -->

## Next in this series

- **Previous:** [Downcoding and Bundling](/blog/downcoding-and-bundling/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- **Next:** [X12 EDI Transactions for Beginners](/blog/x12-edi-transactions/)

*Automating paper EOBs into 835 files, and building clean auto-posting, is work I do for billing companies. Interested? [Get in touch](/#contact).*
