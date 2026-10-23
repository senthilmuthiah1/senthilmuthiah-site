---
title: "CMS-1500 vs UB-04: The Two Medical Claim Forms Explained"
date: 2026-10-23
summary: "Why US healthcare uses two different claim forms, who uses which one, and how to tell them apart — explained for complete beginners."
tags: [Billing, RCM, EDI]
draft: false
---

*First published on my old blog in March 2013. Rewritten for beginners — no healthcare background needed.*

In the [previous post](/blog/medical-billing-process/), we saw that a doctor's office sends a **claim** (a bill) to the insurance company. But a claim can't be written any way you like. Insurance companies process millions of claims, so every claim must follow a **standard form**.

There are two main forms. Which one you use depends on **who** is sending the bill.

![CMS-1500 is for doctors and other professionals; UB-04 is for hospitals and other facilities](/images/posts/cms-1500-vs-ub-04.svg)

## The simple rule

- **A person** bills on the **CMS-1500**.
- **A building** bills on the **UB-04**.

By "person" we mean a doctor or other professional billing for their own work. By "building" we mean a hospital or other facility billing for its rooms, staff and equipment.

There are exceptions — some insurers have their own rules for certain services — so a billing team always checks what each insurance company expects.

## CMS-1500 — the "professional" claim

The CMS-1500 is used by **individual healthcare professionals** and small clinics, for example:

- family doctors and specialists
- physical therapists, psychologists, chiropractors
- independent labs
- ambulance companies
- companies that supply medical equipment, like wheelchairs

It bills for **the professional's own work** — the visit, the test, the procedure.

A few facts worth knowing:

- It used to be called the **HCFA-1500**. You'll still hear people use the old name.
- The paper form is printed in **red ink**, so scanners at the insurance company can read the typed information and ignore the form itself.
- It has **33 numbered boxes** — patient details, insurance details, diagnosis codes, the services and their prices, and the doctor's details.
- Its electronic version is the **837P** file ("P" for professional).

## UB-04 — the "institutional" claim

The UB-04 is used by **facilities** (also called *institutions*), for example:

- hospitals (for both overnight stays and day visits)
- nursing homes
- home health agencies
- hospices
- dialysis centers

It bills for **the facility's costs** — the room, nursing care, operating theatre time, equipment, medicines and supplies.

A few facts worth knowing:

- It's also called the **CMS-1450**. It replaced an older form, the **UB-92**.
- It's larger than the CMS-1500, with **81 fields**, because a hospital stay has much more to report — admission and discharge dates, the type of stay, and **revenue codes** that group charges by department (room, pharmacy, lab and so on).
- Its electronic version is the **837I** file ("I" for institutional).

## One hospital stay, two bills

This part confuses most beginners, so let's use an example.

> **Raj** has his appendix removed at **City Hospital**. The surgery is done by **Dr. Patel**, a surgeon who works there but runs her own practice.

Raj's insurance company receives **two separate claims**:

| Who sends it | Bills for | Form |
|---|---|---|
| **City Hospital** | The operating room, Raj's bed for two nights, nurses, medicines, supplies | **UB-04** |
| **Dr. Patel** | Her work as the surgeon | **CMS-1500** |

So it's not about *where* the care happened. It's about **who is billing** — the building or the person.

## Paper or electronic?

Today, almost all claims are sent **electronically** as 837 files, not on paper. Medicare requires electronic claims from most providers, and other insurers strongly prefer them because they're faster and cheaper to process.

But the paper forms still matter. They're how most people **learn** billing, because each box on the paper form matches a piece of the electronic file. Some small offices and some insurers also still use paper.

## Quick check

Test yourself — which form?

1. A dentist? *Neither! Dentists use their own form, the **ADA dental claim form** (electronic version: 837D).*
2. A physical therapist in her own clinic? ***CMS-1500*** — a professional billing for her work.
3. A nursing home billing for a resident's care? ***UB-04*** — a facility.
4. An anesthesiologist who worked during a hospital surgery? ***CMS-1500*** — the doctor's own bill, separate from the hospital's.

## Words you'll hear

| Word | Meaning |
|---|---|
| **Professional claim** | A bill from a doctor or other professional — CMS-1500 / 837P |
| **Institutional claim** | A bill from a hospital or facility — UB-04 / 837I |
| **HCFA-1500** | The old name for the CMS-1500 |
| **CMS-1450** | Another name for the UB-04 |
| **Revenue code** | A UB-04 code that groups a facility's charges by department |
| **837** | The standard electronic claim file |

<!-- Senthil: optional — add a short real story, e.g. a case where a claim was sent on the wrong form, or a payer that wanted facility charges on a CMS-1500. -->

## Next in this series

- [What Is the Medical Billing Process?](/blog/medical-billing-process/) — the six steps (previous post)
- [Patient insurance](http://emrpms.blogspot.com/2013/03/medical-billingpatient-insurance.html) — how insurance details are stored

*Want to learn medical billing and EDI properly, from the basics? Or building claims into your own software? [Get in touch](/#contact) — I offer beginner-friendly training and consulting.*
