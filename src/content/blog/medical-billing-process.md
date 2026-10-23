---
title: "What Is the Medical Billing Process?"
date: 2026-10-23
summary: "The four core steps of US medical billing — eligibility, charge entry, payment posting and denial management — and how each one works today."
tags: [Billing, RCM, EDI]
draft: true
---

*This post was first published on my old blog in March 2013. I've updated it for how billing works today.*

Medical billing is the process of sending a claim to the patient's insurance company for the services a provider gave, and getting paid for them.

Why does the provider bill the insurance company and not the patient? Because most patients in the US have insurance, and they give their coverage details before the visit. So the provider's office is responsible for sending the claim to the payer and collecting the payment.

Here is the overall process. Later posts in this series go into each step in detail.

![Medical billing process overview](/images/posts/medical-billing-process.png)

## 1. Insurance verification (eligibility)

The process starts here, usually at the front desk. The goal is to confirm that the patient's insurance is **active** before the visit.

- **Then:** staff called the payer or checked the payer's website.
- **Now:** most offices send an electronic eligibility request (**EDI 270**) and get an instant response (**EDI 271**) showing active coverage, copay, deductible and coinsurance.

If the insurance is not active, there is no point sending a claim. The office collects the fee from the patient instead. This is called a **self-pay** or **patient responsibility** account.

## 2. Charge entry

Charge entry means preparing the claim. After the visit, the provider documents the diagnosis and the services given, and these are coded:

- **ICD-10** codes for the diagnosis
- **CPT / HCPCS** codes (with modifiers) for the services

The billing team then builds the claim from the patient's demographics, the provider details, the insurance coverage and the coded charges. The claim goes out as:

- **837P** (professional, the electronic version of the CMS-1500 form), or
- **837I** (institutional, the electronic version of the UB-04 form)

Most claims are sent through a **clearinghouse**, which checks them and forwards them to the payer. The clearinghouse and payer send back acknowledgements (**999** and **277CA**) saying whether the claim was accepted or rejected.

## 3. Payment posting

Payment posting means recording the insurance payment against the claim in the billing system.

The payer sends the payment along with a statement called the **Explanation of Benefits (EOB)**. The EOB shows the billed amount, the allowed amount, what the payer paid, and what the patient owes.

- **Then:** a paper check and paper EOB, posted by hand.
- **Now:** usually an electronic payment (EFT) and an electronic remittance (**EDI 835**), which the system can post automatically.

## 4. Denial management

Payers deny claims for many reasons: missing or wrong information, inactive coverage, coding errors, missing authorization, and so on. The reason is shown on the EOB or 835 as **claim adjustment reason codes (CARC)** and **remark codes (RARC)**.

The billing team works each denial, fixes the problem, and resubmits a corrected claim or files an appeal.

## From my experience

<!-- Senthil: add 1–3 real points here. Ideas:
- The most common denial reason you've seen, and how the software could have caught it before submission
- A clearinghouse or payer quirk that surprised you
- Why eligibility at the front desk saves more money than any back-office step
- What you'd build differently in a PMS today -->

## Next in this series

- Different formats of medical forms (CMS-1500 and UB-04)
- Patient insurance

*Building or fixing billing in your EMR/PMS? I help software teams and billing companies with claims, EDI and RCM workflows. [Get in touch](/#contact).*
