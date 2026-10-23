---
title: "What Is a Clearinghouse? The Post Office for Medical Claims"
date: 2026-10-23T23:30:00
summary: "A complete beginner's guide to medical billing clearinghouses — what they are, why every clinic uses one, how a claim travels through them, what they cost, and how to choose one."
tags: [Billing, RCM, EDI, Clearinghouse]
draft: false
faq:
  - q: "Is the clearinghouse part of the insurance company?"
    a: "No. It's a separate company, working between clinics and insurers."
  - q: "Does the clearinghouse decide whether the claim is paid?"
    a: "No. Only the insurance company decides. The clearinghouse checks the *format* and *completeness* of the claim, not whether the treatment should be paid."
  - q: "Does the money go through the clearinghouse?"
    a: "No. The insurer pays the clinic's bank directly. The clearinghouse only carries the payment *details*."
  - q: "Why can't clinics just email claims?"
    a: "Claims contain private health information, which US law (**HIPAA**) requires to be protected. Claims must be sent in a standard format over secure connections. Clearinghouses are themselves covered by HIPAA and must keep the data safe."
  - q: "Can I send a paper claim to a clearinghouse?"
    a: "No \u2014 only electronic claims. But the clearinghouse can turn an electronic claim into paper for an insurer that only accepts paper."
  - q: "If the clearinghouse accepts my claim, will it be paid?"
    a: "Not necessarily. \"Accepted\" only means the claim passed the checks and was delivered. The insurer can still reject it at its front door, or deny it later."
  - q: "How much does a clearinghouse cost?"
    a: "Clearinghouses usually charge a setup fee, a monthly fee per provider or a small fee per claim, and extra for services such as paper claims or patient statements. Many billing software companies include the clearinghouse in their price."
  - q: "What is a payer ID?"
    a: "A payer ID is a short code that tells the clearinghouse which insurance company, and sometimes which plan, a claim should be delivered to."
---

*First published on my old blog in April 2013. Rewritten and greatly expanded for beginners — no healthcare background needed.*

The word **clearinghouse** confuses almost every beginner. It sounds like part of the insurance company, or a bank, or a government office. It's none of those.

By the end of this post, you'll know exactly what a clearinghouse is, why every clinic uses one, and what happens to a claim inside it. We'll take it slowly.

## Start with a question

After the billing team has prepared a claim, **where do they send it?**

The obvious answer: "To the patient's insurance company." That's right — but there's a catch.

Lee Family Clinic doesn't deal with one insurance company. Its patients have BlueHealth, StarCare, Medicare, Medicaid, and dozens of others. Across the US there are **thousands** of insurance companies, and each one has:

- its own computer system
- its own way of receiving claims
- its own logins, passwords and file rules
- its own testing process before it will accept claims from a new clinic
- its own error messages, often hard to understand

If the clinic sent claims **directly** to every insurance company, the billing team would have to set up, test and manage a separate connection for each one. Every new patient with a new insurer would mean another setup. It would be slow, confusing and full of mistakes.

The insurance companies have the same problem in reverse: they receive claims from **hundreds of thousands** of clinics.

## The answer: a post office for claims

Think about how you send a letter. You don't drive it to the other person's house. You drop it at the **post office**, and the post office delivers it — to any address, anywhere.

A **clearinghouse** is a post office for medical claims.

- The clinic sends **all** its claims to **one** place — the clearinghouse.
- The clearinghouse **sorts** them and delivers each one to the right insurance company.
- Replies from the insurance companies come **back** through the clearinghouse to the clinic.

![Without a clearinghouse, three clinics need twelve separate connections to four insurers; with a clearinghouse, each clinic needs only one](/images/posts/clearinghouse-hub.svg)

With 3 clinics and 4 insurers, going direct means **12** separate connections. With a clearinghouse, each clinic has **one** connection, and the clearinghouse handles the rest. In real life, with thousands of clinics and thousands of insurers, the difference is enormous.

**A simple definition:** a clearinghouse is a company that sits between healthcare providers and insurance companies. It checks claims for errors, delivers them to the right insurer, and passes the replies back.

A clearinghouse is **not** the insurance company. It doesn't decide whether a claim is paid, and it doesn't pay the clinic. It's the messenger — a very careful one.

## A good post office also checks your letter

A real post office just delivers what you give it. A clearinghouse does one more very important job: **it checks each claim before delivering it.** This is called **scrubbing** (as in "scrubbing clean").

It looks for mistakes like:

- a missing or badly formatted **member ID**
- an invalid **NPI** for the doctor (see [NPI, Tax ID and Other Provider Numbers](/blog/npi-tax-id-provider-numbers/))
- a **diagnosis code** that doesn't exist, or is missing characters (see [ICD-10, CPT and HCPCS](/blog/icd-10-cpt-hcpcs-codes/))
- a **date of service** in the future
- the wrong **payer ID** — the code that says which insurer the claim is for
- missing information the insurer always requires

If it finds a problem, it sends the claim **back to the clinic straight away** — usually within minutes — with the reason. The billing team fixes it and sends it again.

Why does this matter so much? Without the check, the insurer would find the mistake **days or weeks later**. With the check, it's caught **the same day**. The faster a mistake is found, the faster the clinic gets paid.

## The journey of a claim, step by step

Let's follow **Anna's** claim for her visit to **Dr. Lee**. (If you haven't read it yet, the [medical billing process](/blog/medical-billing-process/) post shows where this fits in the bigger picture.)

![The journey of Anna's claim: clinic to clearinghouse, clearinghouse to insurer, and the replies coming back](/images/posts/clearinghouse-journey.svg)

**1. The clinic sends the claim.** The billing software turns Anna's claim into a standard electronic file and sends it to the clearinghouse. Usually the software sends a whole **batch** of claims at once — all of today's claims, for every insurer, in one go.

**2. "File received."** Within minutes, the clearinghouse confirms it received the file and could read it. If the file itself is broken, it says so here.

**3. "Claim accepted" — or rejected.** The clearinghouse scrubs each claim. Good claims are accepted. Claims with mistakes are **rejected** and sent back with a reason, like *"Patient member ID is missing."*

**4. Good claims are forwarded.** The clearinghouse looks at the **payer ID** on each claim and delivers it to the right insurer — Anna's goes to BlueHealth, another patient's goes to Medicare, and so on.

**5. "Claim received" — or rejected by the insurer.** BlueHealth does its own quick check. Is Anna really a BlueHealth member? Is Dr. Lee set up with BlueHealth? If not, BlueHealth rejects the claim at this point. Otherwise it accepts it into its system.

**6. The reply is passed on.** The clearinghouse passes BlueHealth's reply back to the clinic.

**7. The insurer decides.** Over the next few weeks, BlueHealth reviews the claim and decides what to pay. (This is called *adjudication* — see the [billing process](/blog/medical-billing-process/).) It sends the **payment details** — what it paid, and why — back through the clearinghouse.

**8. The clinic receives the payment details.** The billing software reads them and records the payment against Anna's claim. This is called *payment posting*.

**9. The money goes straight to the bank.** This surprises many beginners: the **money itself does not go through the clearinghouse**. BlueHealth pays the clinic's bank account directly. The clearinghouse only carries the **information** about the payment.

> **Technical name:** the claim file is called an **837**. The "file received" reply in step 2 is a **999**. The "claim accepted/rejected" replies in steps 3 and 5 are usually a **277CA**. The payment details in step 7 are an **835**, also called an **ERA** (*electronic remittance advice*). Files are usually sent over a secure connection called **SFTP**, or through an **API**.

## Rejected or denied? The three checkpoints

This is the part beginners mix up most. A claim can fail at **three** different checkpoints, and each is handled differently:

| Checkpoint | Who checks | What it means | What to do |
|---|---|---|---|
| **1. Clearinghouse** | The clearinghouse | **Rejected** — the claim has a mistake and was *not* sent to the insurer | Fix it and send it again — usually the same day |
| **2. Insurer's front door** | The insurer, on arrival | **Rejected** — the insurer couldn't accept it (e.g. member not found) | Fix it and send it again |
| **3. Insurer's decision** | The insurer, after review | **Denied** — the insurer processed it and decided not to pay | Correct it, or appeal — a much slower process |

**The key rule:** a **rejected** claim never got into the insurer's system — as far as the insurer is concerned, it was never received. So it must be fixed and sent again **quickly**, because every insurer has a **filing deadline**. A rejected claim that sits in a pile can quietly run out of time.

A **denied** claim *was* received and processed. That's a different job, and it gets its own post later in this series.

## What else does a clearinghouse do?

Besides delivering claims, most clearinghouses offer other useful services:

- **Eligibility checks** — checking a patient's insurance before the visit. (See [Insurance Verification](/blog/insurance-verification/).)
- **Claim status checks** — asking an insurer "where is my claim?" without phoning.
- **Payment details (ERAs)** — collecting payment details from all insurers in one place, ready for the billing software to post automatically.
- **Plain-English error messages** — turning insurers' cryptic codes into something a person can understand.
- **Paper claims for paper-only insurers** — a few small insurers still don't accept electronic claims. The clinic still sends the claim electronically, and the clearinghouse **prints and mails** it. (Clinics don't send paper *to* a clearinghouse — only electronic files.)
- **Patient statements** — printing and mailing bills to patients.
- **Reports and dashboards** — how many claims were sent, accepted, rejected and paid.

## Getting set up

Starting with a clearinghouse takes a few steps:

1. **Sign a contract** with the clearinghouse and get an account.
2. **Connect the billing software** to it — most billing software has this built in.
3. **Enroll with insurers through the clearinghouse.** Many insurers accept claims from any clinic straight away. Some — often Medicare, Medicaid and some large insurers — require a short **enrollment** form first. This can take days or a few weeks.
4. **Enroll for payment details (ERA).** To receive electronic payment details, the clinic almost always has to enroll separately with each insurer. Electronic payment into the bank (**EFT**) is set up with the insurer directly.
5. **Send test claims**, check the replies, and then go live.

Each insurer has a **payer ID** in the clearinghouse's list. Using the right payer ID matters — the same insurance company can have different payer IDs for different plans or states.

## What does it cost?

Clearinghouses charge in different ways:

- a one-time **setup fee** (some have none)
- a **monthly fee**, often per provider
- or a small fee **per claim**
- extra fees for some services, like paper claims or patient statements

Many billing software companies **include** clearinghouse costs in their price, or have a partner clearinghouse built in.

## Clearinghouse or send directly?

Some big insurers — such as Medicare — let clinics send claims **directly**, without a clearinghouse, usually for free. So why pay a clearinghouse?

| | Directly to each insurer | Through a clearinghouse |
|---|---|---|
| **Cost** | Usually free | A fee |
| **Setup** | A separate setup and testing for **every** insurer | **One** setup for all insurers |
| **Logins** | Many systems, logins and file rules | One place for everything |
| **Error checks** | Only the insurer's — often slower | Checked before sending, within minutes |
| **Error messages** | Each insurer's own codes | Usually in plain English |
| **Support** | Hard to reach | Usually a dedicated support team |

For almost every clinic and billing company, a clearinghouse is worth its cost. Some large organizations use **both**: direct connections for their biggest insurers, and a clearinghouse for everyone else.

## How to choose a clearinghouse

When comparing clearinghouses, ask:

- **Does it connect to all our insurers?** Check its **payer list** for every insurer you bill.
- **Does it work with our billing software?** A built-in connection saves a lot of effort.
- **How clear are its error messages?** Ask to see real examples.
- **Does it handle eligibility, claim status and ERAs** — not just claims?
- **What does it really cost?** Ask about setup, monthly and per-claim fees, and extras.
- **How good is support?** Can you reach a knowledgeable person quickly?
- **Is it secure and reliable?** What happens if it goes down?

That last question matters more than people think. In **February 2024**, a cyberattack on **Change Healthcare** — one of the largest US clearinghouses — stopped claims and payments for thousands of clinics and hospitals for weeks. Many practices that had no **backup clearinghouse** went without income for weeks. Today, many billing teams plan for a second option, just in case.

## Names you'll hear

The clearinghouse industry has changed a lot through mergers. You'll still see old names in older articles — including my own 2013 post — so here's a quick guide:

| You may read about… | Today it's part of… |
|---|---|
| Emdeon | **Change Healthcare** (now owned by Optum) |
| ZirMed, Navicure | **Waystar** |
| Gateway EDI | **TriZetto Provider Solutions** |

Other well-known clearinghouses include **Availity**, **Office Ally** and **Claim.MD**. This isn't a recommendation — just names a beginner will meet. Each has different strengths, payer lists and prices.

## Common mistakes

- **Ignoring rejections.** The team checks payments but not the clearinghouse's rejection reports. Rejected claims sit unnoticed until the filing deadline passes.
- **Thinking "sent" means "received".** A claim isn't with the insurer until the insurer's acknowledgement comes back.
- **The wrong payer ID.** The claim goes to the wrong insurer, or the wrong plan, and is rejected.
- **Forgetting ERA enrollment.** Payments arrive in the bank, but no payment details arrive — so nobody knows which claims they're for.
- **No backup plan.** If the clearinghouse goes down, there's no way to send claims.

> **How software helps:** good billing software sends claims to the clearinghouse automatically, reads every reply, and puts rejected claims in a list to fix — so nothing is missed. [eClaimPilot](https://eclaimpilot.com/features) does this, including 999 and 277CA acknowledgements. Step-by-step guides: [clearinghouse setup](https://help.eclaimpilot.com/billing/clearinghouse/clearing-house-setup.html), [sending claims](https://help.eclaimpilot.com/billing/transmission/edi-queue.html), [acknowledgements](https://help.eclaimpilot.com/billing/transmission/acknowledgements.html) and [rejection follow-up](https://help.eclaimpilot.com/billing/followup/rejection-followup.html).

## The one thing to remember

**A clearinghouse is the post office for claims — it checks them, delivers them, and brings back the replies.** It doesn't decide or pay. Watch its replies every day: a rejected claim must be fixed and sent again quickly.

## Words you'll hear

| Word | Meaning |
|---|---|
| **Clearinghouse** | A company that checks claims and delivers them to insurers |
| **Scrubbing** | Checking claims for mistakes before they're sent |
| **Batch** | A group of claims sent together in one file |
| **Payer ID** | The code that tells the clearinghouse which insurer a claim is for |
| **Payer list** | The list of insurers a clearinghouse can deliver to |
| **Acknowledgement** | A reply confirming a file or claim was received, accepted or rejected |
| **Rejection** | A claim sent back because of a mistake — not yet processed by the insurer |
| **Denial** | A claim the insurer processed and decided not to pay |
| **ERA** | Electronic remittance advice — the electronic payment details |
| **EFT** | Electronic funds transfer — the payment into the bank |
| **Enrollment** | Signing up with an insurer to send claims or receive ERAs |
| **Filing deadline** | The last date an insurer will accept a claim |

<!-- Senthil: optional — add a short real story, e.g. a clearinghouse quirk you've hit, a payer-ID mix-up, or what happened to clients during the 2024 Change Healthcare outage. -->

## Next in this series

- **Previous:** [NPI, Tax ID and Other Provider Numbers](/blog/npi-tax-id-provider-numbers/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- Coming next: corrected claims — how to fix a claim that's already been sent

*Connecting billing software to clearinghouses — and making sense of every reply that comes back — is a big part of my work. Need help with yours, or training for your team? [Get in touch](/#contact).*
