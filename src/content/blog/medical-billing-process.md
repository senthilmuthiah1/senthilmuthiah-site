---
title: "What Is the Medical Billing Process?"
date: 2026-10-23
summary: "The six steps of US medical billing — from the eligibility check to denial management — with the forms and EDI transactions used at each step."
tags: [Billing, RCM, EDI]
draft: false
---

*First published on my old blog in March 2013, and updated for how billing works today.*

Medical billing is the process of sending a claim to the patient's insurance company for the services a provider gave, and getting paid for them.

Why bill the insurance company and not the patient? Because most patients in the US have insurance, and they share their coverage details before the visit. So the provider's office sends the claim to the payer, and the patient pays only their share — copay, deductible or coinsurance.

Here is the whole process on one page. Later posts in this series go into each step in detail.

![The six steps of the medical billing process, with the form or EDI transaction used at each step](/images/posts/medical-billing-process.svg)

## 1. Eligibility check

Billing starts at the front desk, before the patient is seen. The goal is to confirm that the patient's insurance is **active** and to know what the patient will owe.

- **Then:** staff called the payer or checked the payer's website.
- **Now:** the practice software sends an electronic eligibility request (**EDI 270**) and gets a response in seconds (**EDI 271**) showing coverage, copay, deductible and coinsurance.

If the insurance is not active, there is no point sending a claim. The office collects from the patient instead — a **self-pay** or **patient responsibility** account.

## 2. Charge entry and coding

After the visit, the provider documents the diagnosis and the services given. These are turned into codes:

- **ICD-10-CM** codes for the diagnosis
- **CPT / HCPCS** codes, with modifiers where needed, for the services

The billing team then builds the claim from the patient's demographics, the provider details, the insurance coverage and the coded charges. A physician or clinic uses the **CMS-1500** format; a hospital or facility uses the **UB-04**.

## 3. Claim submission

Claims are sent electronically:

- **837P** — professional claim (electronic CMS-1500)
- **837I** — institutional claim (electronic UB-04)

Most practices send them through a **clearinghouse**, which checks each claim and forwards it to the right payer. Two acknowledgements come back:

- **999** — the file was readable and structurally valid
- **277CA** — each claim was accepted or rejected for processing

A rejected claim never reached adjudication. It has to be fixed and sent again — it is not a denial.

## 4. Payer adjudication

The payer now decides what to pay. It checks eligibility again, coding rules, medical necessity, authorizations, duplicates and its fee schedule. The practice can ask for the status of a claim with **EDI 276** and gets the answer in **EDI 277**.

## 5. Payment posting

The payer sends the payment with an **Explanation of Benefits (EOB)**. It shows the billed amount, the allowed amount, what the payer paid, and what the patient owes.

- **Then:** a paper check and paper EOB, posted by hand.
- **Now:** usually an electronic payment (EFT) with an electronic remittance (**EDI 835**) that the system can post automatically.

After posting, any remaining balance goes either to the patient's **secondary insurance** or to the **patient** as a statement.

## 6. Denial management

Payers deny claims for many reasons: inactive coverage, missing authorization, coding errors, duplicate claims, missed filing deadlines. The 835 explains each one with **claim adjustment reason codes (CARC)** and **remittance advice remark codes (RARC)**.

The billing team works each denial: fix the problem and send a **corrected claim**, or file an **appeal** if the denial is wrong.

## What matters most in practice

- **Most denials start at the front desk.** Wrong member ID, wrong payer, expired coverage — all of these can be caught by a 270/271 check at check-in, for free. Fixing them after a denial costs days and staff time.
- **Re-check eligibility on every visit,** not only the first one. Patients change jobs and plans; the card on file from last year is often wrong.
- **A rejection and a denial are not the same.** A rejection (999 or 277CA) means the payer never processed the claim. A denial (835) means it did, and said no. They are worked differently, and your software should show them separately.
- **Watch timely filing limits.** Every payer sets a deadline for claims and corrections. A claim stuck in a rejection queue can quietly run out of time.
- **Clean claims before they leave.** Checks inside the billing software — required fields, valid code combinations, payer-specific rules — are far cheaper than any denial.

<!-- Senthil: add one real story here, e.g. a payer or clearinghouse quirk you've hit, or a denial pattern you solved in software. That's what makes this post yours. -->

## Next in this series

- [Different formats of medical forms](http://emrpms.blogspot.com/2013/03/different-format-of-medical-forms.html) (CMS-1500 and UB-04)
- [Patient insurance](http://emrpms.blogspot.com/2013/03/medical-billingpatient-insurance.html)

*Building or fixing billing in your EMR or PMS? I help software teams and billing companies with claims, EDI and revenue-cycle workflows. [Get in touch](/#contact).*
