---
title: "ICD-10, CPT and HCPCS: Medical Codes Explained for Beginners"
date: 2026-10-23T18:00:00
summary: "What medical codes are, why billing can't work without them, and the difference between ICD-10, CPT and HCPCS — with simple examples."
tags: [Billing, RCM, Coding]
draft: false
faq:
  - q: "What is the difference between ICD-10 and CPT codes?"
    a: "ICD-10 codes describe what was wrong with the patient, the diagnosis. CPT codes describe what the doctor did, the procedure or service."
  - q: "What are HCPCS codes used for?"
    a: "HCPCS codes cover things that are not a doctor's service, such as ambulance rides, medical equipment like crutches and wheelchairs, and injected medicines."
  - q: "How many ICD-10 codes are there?"
    a: "There are more than 70,000 ICD-10 diagnosis codes. Coders look them up in software or code books rather than memorizing them."
  - q: "What is medical necessity?"
    a: "Medical necessity is the rule that every service on a claim must be justified by a diagnosis. For example, an ankle X-ray makes sense for a sprained ankle, but not for a sore throat."
  - q: "How often do medical codes change?"
    a: "ICD-10 diagnosis codes are updated every year on 1 October, and CPT codes every year on 1 January. Using a deleted code can get a claim rejected."
  - q: "Who owns CPT codes?"
    a: "CPT codes are owned and updated by the American Medical Association (AMA). HCPCS Level II codes are run by CMS, the agency behind Medicare."
---

*Part of my beginner series on US medical billing. No healthcare background needed.*

## Why codes?

Imagine an insurance company receiving millions of claims every day, each written in a doctor's own words: *"sore throat"*, *"throat pain"*, *"pharyngitis"*, *"red, scratchy throat"*. A computer can't tell these mean the same thing — and a person can't read millions of claims.

So US healthcare uses **codes**: short, standard numbers that mean exactly one thing, everywhere. Every doctor, hospital and insurance company uses the same list.

Think of **barcodes in a supermarket**. The checkout doesn't read "500 g brown bread, wholemeal" — it scans a barcode and instantly knows the product and price. Medical codes do the same for illnesses and treatments.

A claim needs two kinds of codes:

- **Why** did the patient need care? → a **diagnosis code**
- **What** was done for them? → a **procedure code**

![The three main code sets: ICD-10 for what was wrong, CPT for what the doctor did, and HCPCS for what else was given](/images/posts/medical-code-sets.svg)

## ICD-10 — what was wrong

**ICD-10** codes describe the patient's **illness, injury or symptom** — the *diagnosis*. You'll hear them called **diagnosis codes**, **Dx codes** or just **ICD codes**.

**What they look like:** a **letter**, then numbers, often with a dot. Between 3 and 7 characters.

| Code | Meaning |
|---|---|
| J02.9 | Sore throat (acute pharyngitis) |
| R10.10 | Upper stomach pain |
| E11.9 | Type 2 diabetes, without complications |
| S93.401A | Sprained ankle — first visit for it |

**How to read one:** codes get more specific from left to right, like an address — country, then city, then street, then house number.

> **J02.9**
> **J** = breathing system · **J02** = sore throat · **.9** = cause not specified

There are more than **70,000** ICD-10 codes, so nobody memorizes them. Coders look them up in a code book or, more often, in software.

> **Technical name:** the full name is **ICD-10-CM** (*International Classification of Diseases, 10th revision, Clinical Modification*). The US switched to it from the older ICD-9 on **1 October 2015**. The list is updated every year on 1 October.

## CPT — what the doctor did

**CPT** codes describe the **services and procedures** a doctor or other professional performs — visits, tests, surgeries, X-rays. You'll hear them called **procedure codes**.

**What they look like:** **5 numbers**.

| Code | Meaning |
|---|---|
| 99213 | Office visit, existing patient |
| 99203 | Office visit, new patient |
| 85025 | Complete blood count (a common blood test) |
| 71046 | Chest X-ray, 2 views |

Each CPT code has a **price** set by each doctor's office, and an **agreed amount** that each insurance company will pay for it. So the CPT codes on a claim decide how much money comes in.

> **Technical name:** CPT stands for *Current Procedural Terminology*. It's owned by the **American Medical Association (AMA)** and updated every year on 1 January.

## HCPCS — everything else

Some things aren't a doctor's service: an **ambulance ride**, a pair of **crutches**, a **wheelchair**, an **injection** of a specific medicine. These have their own codes, called **HCPCS** (say it "*hick-picks*").

**What they look like:** a **letter**, then **4 numbers**.

| Code | Meaning |
|---|---|
| E0114 | A pair of crutches |
| A0429 | Emergency ambulance ride |
| J1100 | Injection of dexamethasone (a steroid medicine), 1 mg |

The first letter gives a clue: **E** for equipment, **A** for ambulance and supplies, **J** for injected medicines, and so on.

> **Technical name:** HCPCS stands for *Healthcare Common Procedure Coding System*. It's run by **CMS**, the agency behind Medicare. Strictly speaking, HCPCS has two levels: **Level I** is CPT itself, and **Level II** is the letter codes above. When people say "HCPCS codes", they usually mean Level II.

## Putting it together: one visit, all three codes

> **John** twists his ankle playing football. He visits **Dr. Brown**, who examines him, orders an X-ray, and gives him crutches.

| What happened | Code type | Code |
|---|---|---|
| Sprained ankle — **why** he came | ICD-10 | S93.401A |
| Office visit — **what** Dr. Brown did | CPT | 99203 |
| Ankle X-ray, 2 views — **what** was done | CPT | 73600 |
| Crutches — **what else** was given | HCPCS | E0114 |

## The golden rule: codes must make sense together

Every procedure code on a claim must be **linked** to a diagnosis code that explains **why** it was needed. Insurance companies check this. It's called **medical necessity**.

| Diagnosis | Procedure | Makes sense? |
|---|---|---|
| Sprained ankle | Ankle X-ray | ✅ Yes |
| Sprained ankle | Crutches | ✅ Yes |
| Sore throat | Ankle X-ray | ❌ No — the insurer will refuse to pay |

On the claim, each service line has a **pointer** to the diagnosis it's for — the "DX PTR" column you may have seen in the [sample CMS-1500](/blog/cms-1500-vs-ub-04/).

## Who chooses the codes?

- In small clinics, the **doctor** usually picks the codes in the EHR, and the billing team checks them.
- In larger practices and hospitals, trained **medical coders** read the doctor's notes and assign the codes.

Either way, the codes must match what the doctor **wrote in the chart**. If the notes don't support a code, the insurer can refuse to pay — or take the money back later in an audit.

**Coding vs billing:** *coding* is turning the visit into codes. *Billing* is sending those codes on a claim and getting paid. They're often done by different people, but they depend on each other.

## Hospitals use one more code set

When a patient is **admitted to a hospital** and has surgery, the hospital's claim uses a different procedure code set called **ICD-10-PCS** — 7 characters, letters and numbers. We saw one on the [sample UB-04](/blog/cms-1500-vs-ub-04/): **0DTJ4ZZ**, keyhole removal of the appendix. Beginners don't need to learn these yet — just know they exist.

## Common mistakes

- **Codes that don't match.** A test billed with a diagnosis that doesn't justify it.
- **Old codes.** Code lists change every year. Using a deleted code gets the claim rejected.
- **Too vague.** Using an "unspecified" code when the notes say exactly what's wrong. Some insurers pay less, or ask for more detail.
- **Missing characters.** Many ICD-10 codes need all their characters — leaving one off makes the code invalid.

> **How software helps:** billing software can check claims before they are sent — for example, a procedure without a matching diagnosis, or a code that's missing characters. This is called **claim scrubbing**. [eClaimPilot](https://eclaimpilot.com/features) scrubs every claim before it leaves. Step-by-step guides: [setting up procedure codes](https://help.eclaimpilot.com/billing/master/procedure-codes.html) and [claim scrubbing](https://help.eclaimpilot.com/billing/practice/claim-scrubbing.html).

## The one thing to remember

**ICD-10 says *why*. CPT and HCPCS say *what*.** Every *what* on a claim needs a matching *why* — and both must be backed up by the doctor's notes.

## Words you'll hear

| Word | Meaning |
|---|---|
| **Diagnosis code / Dx** | An ICD-10 code for what was wrong |
| **Procedure code** | A CPT or HCPCS code for what was done |
| **ICD-10-CM** | The full name of the US diagnosis code set |
| **CPT** | Procedure codes for doctors' services (owned by the AMA) |
| **HCPCS** | Codes for supplies, equipment, ambulance and medicines |
| **ICD-10-PCS** | Procedure codes for hospital inpatient stays |
| **Medical necessity** | The rule that every service must be justified by a diagnosis |
| **Diagnosis pointer** | The link from a service line to its diagnosis on the claim |
| **Medical coder** | A trained person who assigns codes from the doctor's notes |

<!-- Senthil: optional — add a short real story, e.g. a denial caused by a diagnosis/procedure mismatch, or an annual code update that broke claims. -->

## Next in this series

- **Previous:** [Billing Entities: Who's Who on a Claim](/blog/billing-entities/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- **Next:** [CPT Modifiers Explained](/blog/cpt-modifiers/) — small add-ons that change the meaning of a code

*Building code checks into your billing software, or training new coders and billers? [Get in touch](/#contact) — I offer beginner-friendly training and consulting.*
