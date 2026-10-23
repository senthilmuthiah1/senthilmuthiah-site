---
title: "The Claim Life Cycle: A Claim's Whole Journey, From Both Sides"
date: 2026-10-23T23:56:00
summary: "Follow one claim from the moment it's created until its balance is zero — first inside the clinic, then inside the insurance company. A complete beginner's guide to the claim life cycle."
tags: [Billing, RCM, Claims]
draft: false
faq:
  - q: "What is the claim life cycle?"
    a: "The claim life cycle is the full journey of a medical claim, from the moment it is created until its balance is zero — through every insurer, every payment and any patient bill."
  - q: "When is a claim finished?"
    a: "A claim is finished when its balance is zero — when every insurer has paid its share, the patient has paid theirs, and anything that can't be collected has been adjusted or written off."
  - q: "What happens to a claim inside the insurance company?"
    a: "The insurer checks the codes, looks for duplicates and the filing deadline, confirms the member is covered, checks the network and applies the agreed price, works out benefits and the patient's share, confirms medical necessity, does a final review, and then pays and sends an EOB."
  - q: "How long does the claim life cycle take?"
    a: "A simple claim with one insurer is often paid within two to four weeks. Claims with secondary insurance, patient balances, corrections or appeals can take several months."
  - q: "What is claim repricing?"
    a: "Repricing is when the insurance company replaces the provider's charge with the price agreed in its contract with that provider, called the allowed amount."
  - q: "Who gets the EOB?"
    a: "Both. The provider receives an EOB or electronic 835 explaining the payment, and the patient receives their own EOB explaining what the insurer paid and what they may owe."
---

*Part of my beginner series on US medical billing. No healthcare background needed. Based on my own claim life cycle flowcharts.*

So far in this series we've looked at the pieces: [insurance](/blog/health-insurance-basics/), [codes](/blog/icd-10-cpt-hcpcs-codes/), [claim forms](/blog/cms-1500-vs-ub-04/), [clearinghouses](/blog/what-is-a-clearinghouse/), [rejections and denials](/blog/rejection-vs-denial/). Now let's put them together and follow **one claim through its whole life**.

A claim's life has **two sides**:

1. **At the clinic** — the claim is created, sent to each insurer in turn, and finally billed to the patient.
2. **At the insurance company** — the claim is checked, priced, decided and paid.

A claim is **born** when it's created and **finished** only when its **balance is zero**.

## Part 1 — The life cycle at the clinic

Think of passing a bill around a table. The first person pays their share, then passes it on. The next person pays their share, and passes it on again. Whoever is left at the end pays the rest.

That's exactly how a claim moves: **primary insurer → secondary insurer → … → patient**.

![The claim life cycle at the clinic: create the claim, send it to each insurer in turn, post each payment, and bill the patient for any balance](/images/posts/claim-life-cycle-clinic.svg)

### Step by step

**1. Create the claim.** After the visit, the billing team builds the claim from the patient's details, insurance, codes and charges. (See [the billing process](/blog/medical-billing-process/).)

**2. Does the patient have insurance?**
- **No** → the patient is **self-pay**. Skip to step 7: send the patient a statement.
- **Yes** → send the claim to the **primary** insurer.

**3. Send the claim to the primary insurer** — usually through a clearinghouse.

**4. Post the payment.** When the insurer's payment details arrive, the billing team records what was paid and adjusted. This is called **payment posting**.

**5. Is there a balance left?**
- **No** → the claim is **closed**. Done.
- **Yes** → go to step 6.

**6. Does the patient have another insurance?**
- **Yes** → send the claim to the **next** insurer — secondary, then tertiary — and go back to step 4. (See [Primary, Secondary and Tertiary Insurance](/blog/primary-secondary-tertiary-insurance/).)
- **No** → the rest is the patient's share. Go to step 7.

**7. Send the patient a statement** — a bill for what they owe.

**8. Post the patient's payment.** When the balance reaches zero, the claim is **closed**.

### Example: Anna's visit, start to finish

Anna's visit with Dr. Lee costs **$150**. Anna has **BlueHealth** (primary) and **StarCare** (secondary, through her husband).

| Step | What happens | Balance |
|---|---|---|
| Claim created | Dr. Lee charges $150 | $150 |
| BlueHealth processes it | Agreed price is $100, so $50 is written off. BlueHealth pays $70; Anna's share is $30 | $30 |
| Claim sent to StarCare | StarCare pays $20 of Anna's share | $10 |
| No more insurance | Anna gets a statement for $10 | $10 |
| Anna pays | $10 posted | **$0 — closed** |

Notice: the claim went **three** places — two insurers and the patient — before it was finished. A billing team handles thousands of claims like this at once, each at a different step.

## Part 2 — The life cycle at the insurance company

While the claim is "with BlueHealth", a lot happens on the other side. This is the part beginners never see — but knowing it explains *why* claims get rejected, denied or paid less than expected.

![The eight stages inside the insurance company, from the claim arriving to the final review, followed by payment and the EOB](/images/posts/claim-life-cycle-payer.svg)

### Stage 1 — The claim arrives

The clearinghouse delivers the claim to BlueHealth.

### Stage 2 — The front-door check

BlueHealth checks the claim's basic contents: Are the **diagnosis codes** valid and current? Are the **procedure codes** valid? Is a **modifier** wrong or missing where one is required?

If something fails here, the claim is **rejected** and sent back — it never reaches the next stages. (See [Rejected vs Denied](/blog/rejection-vs-denial/).) Claims that pass are **accepted** into processing.

> **Technical name:** the accepted/rejected reply is the **277CA**.

### Stage 3 — Initial review

- Is this a **duplicate** of a claim already received?
- Was it sent **within the filing deadline**?

### Stage 4 — Member check

- Can BlueHealth find **Anna** in its system?
- Was her plan **active** on the date of the visit?

### Stage 5 — Network check and pricing

- Is **Dr. Lee in-network**? BlueHealth checks her NPI — and the facility's — against its contracts.
- If yes, BlueHealth applies the **agreed price** from the contract. This is called **repricing**: Dr. Lee's $150 charge becomes the $100 **allowed amount**.

### Stage 6 — Benefits

- Is the service **covered** by Anna's plan?
- What is **Anna's share** — copay, deductible, coinsurance?

### Stage 7 — Medical necessity

Does the **diagnosis justify the service**, according to generally accepted medical standards? A strep test for a sore throat — yes. An ankle X-ray for a sore throat — no.

### Stage 8 — Final review

Is everything accurate? Are there any **warning signs of fraud** — for example, a service billed far more often than normal?

### The result

BlueHealth decides: **paid**, **partly paid**, or **denied**. Then:

- the **money** goes straight to Dr. Lee's bank
- an **EOB** (or electronic **835**) goes to the clinic, explaining every line
- an **EOB** goes to **Anna**, showing what BlueHealth paid and what she may owe

Now the claim is back at the clinic — at step 4 of Part 1.

## Where things go wrong — and which post explains it

| Where | What can go wrong | Read more |
|---|---|---|
| Clinic: creating the claim | Wrong patient, insurance or provider details | [Insurance Verification](/blog/insurance-verification/), [NPI and Tax ID](/blog/npi-tax-id-provider-numbers/) |
| Clinic → clearinghouse | Format errors, missing fields — rejected | [What Is a Clearinghouse?](/blog/what-is-a-clearinghouse/) |
| Insurer stage 2 | Invalid codes or modifiers — rejected | [Codes](/blog/icd-10-cpt-hcpcs-codes/), [Modifiers](/blog/cpt-modifiers/) |
| Insurer stages 3–8 | Duplicate, late, not covered, no authorization, not necessary — denied | [Rejected vs Denied](/blog/rejection-vs-denial/), [Prior Authorization](/blog/prior-authorization-and-referrals/) |
| Clinic: after payment | Wrong insurer order, balance never billed | [Primary and Secondary](/blog/primary-secondary-tertiary-insurance/) |
| Clinic: fixing mistakes | Wrong type of resubmission | [Corrected Claims](/blog/corrected-claims/) |

## Why the life cycle matters

- **A claim isn't done when it's sent.** It's done when the **balance is zero**. Many lost dollars come from claims that were sent once and then forgotten.
- **Every step has an owner.** Someone must send it, someone must post the payment, someone must bill the next payer, someone must follow up.
- **Time is money.** The longer a claim stays open, the harder it is to collect. Billing teams track how long claims have been open — this is called **aging** — and chase the oldest first.

> **How software helps:** billing software tracks every claim through its life cycle — which payer has it, what's been paid, what's still open and for how long — and moves it to the next payer or the patient automatically. [eClaimPilot](https://eclaimpilot.com/features) keeps a full history of every claim and shows open balances by age. Step-by-step guides: [managing a claim](https://help.eclaimpilot.com/billing/claims/manage-claim.html), [insurance aging follow-up](https://help.eclaimpilot.com/billing/followup/insurance-aging.html) and [patient statements](https://help.eclaimpilot.com/billing/statements/patient-statements.html).

## The one thing to remember

**A claim moves from insurer to insurer to patient until its balance is zero.** Inside each insurer, it's checked, priced and decided. Follow every claim until it closes — not just until it's sent.

## Words you'll hear

| Word | Meaning |
|---|---|
| **Claim life cycle** | A claim's full journey, from creation until its balance is zero |
| **Balance** | The amount still unpaid on a claim |
| **Payment posting** | Recording a payment against the claim |
| **Statement** | A bill sent to the patient |
| **Adjudication** | The insurer's process of reviewing and deciding a claim |
| **Repricing** | Replacing the charge with the contract's agreed price |
| **Allowed amount** | The price the insurer agreed to pay for a service |
| **Aging** | How long a claim has been open, usually in 30-day groups |
| **Closed claim** | A claim with a zero balance |

<!-- Senthil: optional — add a short real story, e.g. claims that were never sent to the secondary insurer, or a payer stage that regularly caused surprises. -->

## Next in this series

- **Previous:** [Corrected Claims](/blog/corrected-claims/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- **Next:** [Deductible, Copay and Coinsurance](/blog/deductible-copay-coinsurance/)

*Mapping a practice's claim life cycle — and finding where claims get stuck — is usually the first thing I do when I help a billing team. Want to do the same for yours? [Get in touch](/#contact).*
