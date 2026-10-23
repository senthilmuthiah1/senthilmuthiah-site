---
title: "Types of Reimbursement: How Doctors and Hospitals Get Paid"
date: 2026-10-23T23:58:20
summary: "Fee-for-service, fee schedules and RVUs, DRGs, per diem, capitation and value-based payment — the main ways US providers are paid, explained for complete beginners."
tags: [Billing, RCM, Payments]
draft: false
faq:
  - q: "What does reimbursement mean in healthcare?"
    a: "Reimbursement is the payment a doctor, hospital or other provider receives from an insurance company or government program for the care they gave."
  - q: "What is fee-for-service?"
    a: "Fee-for-service is a payment model where the provider is paid separately for each service, such as each visit, test or procedure. It is the most common model for doctors' claims."
  - q: "What is capitation?"
    a: "Capitation is a fixed payment per patient per month, paid to a provider for looking after a group of patients, no matter how many visits each patient makes. It is common in HMO plans."
  - q: "What is a DRG?"
    a: "A DRG, or diagnosis-related group, is a category used to pay hospitals one fixed price for an inpatient stay, based mainly on the patient's diagnosis and procedures rather than on each day or service."
  - q: "What is an RVU?"
    a: "A relative value unit (RVU) is a number that measures how much work, practice cost and insurance cost a service involves compared with other services. Medicare multiplies RVUs by a dollar conversion factor to set its fee schedule."
  - q: "What is value-based care?"
    a: "Value-based care pays providers partly based on the quality and results of their care — for example, keeping patients healthy and reducing unnecessary costs — rather than only on the number of services."
  - q: "Do capitated providers still send claims?"
    a: "Usually yes. They send encounter records, which look like claims but are mainly for reporting, because the payment has already been made through the monthly capitation."
---

*Part of my beginner series on US medical billing. No healthcare background needed.*

So far we've assumed a simple idea: the doctor does a service, sends a claim, and gets paid for that service. That's the most common way — but it's **not the only one**. Some providers are paid **per day**, some **per hospital stay**, and some a **fixed amount per patient each month**, whether the patient visits or not.

The way a provider is paid is called **reimbursement**. The model matters for billing, because it changes **what** is billed, **how** payment is worked out, and **what** counts as a correct payment.

## The simple idea: four ways to pay a gym

Imagine four ways a gym could charge you:

- **Pay per class** you attend. → **Fee-for-service**
- **One price for a 6-week course**, however many sessions it takes. → **Bundled / case rate**
- **A day pass** — one price per day. → **Per diem**
- **A monthly membership** — the same price whether you go once or every day. → **Capitation**

![Payment models on a scale from paid per service to paid per person, with value-based payment added on top](/images/posts/types-of-reimbursement.svg)

## 1. Fee-for-service

The provider is paid **for each service** — each visit, test or procedure. This is the model behind most of the examples in this series.

### Where does the price come from?

Each insurer has a **fee schedule** — a price list of what it will pay for each code. For an in-network provider, that's the **allowed amount**. (See [In-Network vs Out-of-Network](/blog/in-network-vs-out-of-network/).)

Many fee schedules are based on **Medicare's**. Medicare works out its prices with a points system called **RVUs** — *relative value units*:

- Each service gets points for the doctor's **work**, the **practice costs** (staff, equipment, rent) and **malpractice insurance**.
- The points are adjusted for **location** (it costs more to run a clinic in some cities).
- The total is multiplied by a dollar amount called the **conversion factor**, which Medicare updates every year.

So a complex visit with more RVUs pays more than a simple one. Commercial insurers often pay a **percentage of Medicare's price** — for example, "120% of Medicare".

**For billing:** the payment is correct if the allowed amount matches the contract's fee schedule. If it's lower, it may be an **underpayment** — or [downcoding](/blog/downcoding-and-bundling/).

## 2. Bundled payment / case rate

One price covers a **whole episode of care**, not each service in it.

### Hospital stays: DRGs

When a patient is **admitted** to a hospital, Medicare and many insurers pay **one price for the whole stay**, based on a category called a **DRG** — *diagnosis-related group*.

> **Raj** has his appendix removed at City Hospital and stays two nights. His stay falls into an appendix-surgery DRG. City Hospital is paid **one set amount** for that DRG — whether Raj stays two nights or three, and whatever medicines he needs.

The DRG is worked out from the **diagnoses**, the **procedures**, and factors like complications. That's why accurate **ICD-10** coding on the [UB-04](/blog/cms-1500-vs-ub-04/) matters so much for hospitals: a missing complication can move the stay into a lower-paying DRG.

> **Technical name:** Medicare uses **MS-DRGs** for inpatient stays. For hospital *outpatient* services it uses a different grouping called **APCs**.

### Surgery packages

A surgeon is usually paid **one fee** for an operation that also covers the routine follow-up visits for a set time afterwards — the **global period**. Billing those follow-up visits separately would be a bundling error.

## 3. Per diem

The provider is paid a **fixed amount per day**, whatever services are given that day. It's common for **nursing homes**, **rehabilitation** and some **psychiatric** and hospital stays under certain contracts.

**For billing:** the number of **days** is what matters most — admission and discharge dates must be exact.

## 4. Capitation

The provider is paid a **fixed amount per patient, per month** — called **PMPM** (*per member per month*) — to look after a group of patients, **no matter how many visits** they make.

> **Dr. Brown** is the main doctor for **250** members of an HMO. The HMO pays him **$25 per member per month**:
>
> 250 × $25 = **$6,250 every month**
>
> If his patients are healthy and rarely visit, he keeps the difference. If many are ill and need lots of care, he still gets $6,250.

So the provider takes on **risk**. Capitation rewards keeping patients healthy, but can lose money if patients need a lot of care.

**For billing:** capitated providers usually still send claim-like records called **encounters**, so the insurer knows what care was given. These are paid **$0** on the EOB, because the payment was already made through capitation — that's not a denial. Services **outside** the capitation agreement are billed as normal claims.

## 5. Cost-based payment

Some providers are paid based on their **actual costs** of giving care, often as a fixed **rate per visit** (an *encounter rate*). This is used for certain community clinics, rural health clinics, critical-access hospitals and hospices, mainly in Medicare and Medicaid.

## 6. Value-based payment

All the models above pay for **activity** — services, days, stays or members. **Value-based payment** adds something different: paying for **results**.

- **Bonuses** (or penalties) for **quality** — for example, how many diabetic patients have their blood sugar under control.
- **Shared savings** — a group of providers that keeps total costs **below** a target shares the savings with the insurer.
- **Quality reporting programs** — Medicare, for example, adjusts many doctors' payments up or down based on reported quality measures.

Value-based payment is usually **added on top** of one of the other models, and it's growing every year.

## Side by side

| Model | Paid for | Common for | Billing focus |
|---|---|---|---|
| **Fee-for-service** | Each service | Doctors' claims | Correct codes and fee schedule |
| **Bundled / DRG** | A whole episode or stay | Hospital stays, surgery | Accurate diagnosis and procedure coding |
| **Per diem** | Each day | Nursing homes, some stays | Exact dates and days |
| **Capitation** | Each patient, each month | HMO primary care | Encounter reporting; billing what's outside the agreement |
| **Cost-based** | The provider's costs | Community and rural clinics | Encounter rates and cost reports |
| **Value-based** | Quality and results | Added to other models | Quality data and reporting |

## Why it matters for billing

- **What "correct payment" means depends on the model.** A $0 encounter is fine under capitation; it would be a problem under fee-for-service.
- **Coding drives payment** under DRGs — not just individual line items.
- **Contracts set the rules.** Billing teams should know which model, and which fee schedule, each insurer contract uses — and check payments against it.

> **How software helps:** billing software can store each insurer's fee schedule, show expected payments, and report RVUs by provider — so underpayments stand out. [eClaimPilot](https://eclaimpilot.com/features) includes RVU and financial reports. Step-by-step guides: [RVU reports](https://help.eclaimpilot.com/billing/reports/rvu.html), [procedure codes and fees](https://help.eclaimpilot.com/billing/master/procedure-codes.html) and [financial reports](https://help.eclaimpilot.com/billing/reports/financial.html).

## The one thing to remember

**Providers can be paid per service, per episode, per day, or per person — with quality bonuses on top.** Know which model each contract uses; it decides what a correct payment looks like.

## Words you'll hear

| Word | Meaning |
|---|---|
| **Reimbursement** | Payment to a provider for care given |
| **Fee-for-service** | Payment for each separate service |
| **Fee schedule** | An insurer's price list for each code |
| **RVU** | Relative value unit — the points Medicare uses to set prices |
| **Conversion factor** | Medicare's dollars-per-RVU amount, updated yearly |
| **DRG** | Diagnosis-related group — a category for paying a hospital stay as one price |
| **Global period** | Days after surgery when follow-up care is included in the surgery's fee |
| **Per diem** | A fixed payment per day |
| **Capitation / PMPM** | A fixed payment per member per month |
| **Encounter** | A claim-like record sent for reporting, often under capitation |
| **Value-based payment** | Payment linked to quality and results |
| **Shared savings** | Providers sharing in the money saved by lowering costs |

<!-- Senthil: optional — add a short real story, e.g. a client confused by $0 capitation encounters, or how a fee-schedule check caught a payer underpaying. -->

## Next in this series

- **Previous:** [X12 EDI Transactions](/blog/x12-edi-transactions/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- **Next:** [Denials and A/R Follow-Up](/blog/denials-and-ar-follow-up/)

*Checking payments against contracts and fee schedules finds money most practices don't know they're missing. Need help setting that up? [Get in touch](/#contact).*
