---
title: "Corrected Claims: How to Fix a Claim That's Already Been Processed"
date: 2026-10-23T23:55:00
summary: "When to send a corrected claim, a void, a brand-new claim or an appeal — and how to do each one properly. A beginner's guide to claim codes 1, 7 and 8."
tags: [Billing, RCM, EDI, Denials]
draft: false
faq:
  - q: "What is a corrected claim?"
    a: "A corrected claim is a new version of a claim the insurance company has already processed. It replaces the original, so the insurer can process it again with the right information."
  - q: "What is the difference between claim frequency codes 1, 7 and 8?"
    a: "Code 1 means an original claim, sent for the first time. Code 7 means a replacement of a claim the insurer already processed. Code 8 means void — cancel a claim the insurer already processed."
  - q: "Should I send a corrected claim for a rejected claim?"
    a: "No. A rejected claim was never processed, so there is nothing to replace. Fix the mistake and send it again as an original claim, with code 1."
  - q: "Where do I find the original claim number?"
    a: "The insurance company's claim number is shown on the EOB or in the electronic 835 payment file for the original claim. It is sometimes called the ICN or DCN."
  - q: "Does a corrected claim need to include all the service lines?"
    a: "Yes. A replacement claim replaces the whole original claim, so it must include every line — the lines you changed and the lines that were already correct."
  - q: "What happens if I send a correction as a new claim instead?"
    a: "The insurer will usually deny it as a duplicate, because it looks like the same service billed twice."
  - q: "When should I appeal instead of sending a corrected claim?"
    a: "Appeal when the claim was correct and you believe the insurance company made the wrong decision. Send a corrected claim only when the claim itself had a mistake."
  - q: "Do all insurers accept corrected claims?"
    a: "Most do, but each insurer has its own rules and time limits. Some, including Medicare for doctors' claims, use a different process called a reopening instead."
---

*Part of my beginner series on US medical billing. No healthcare background needed.*

In the [previous post](/blog/rejection-vs-denial/), we saw that a **rejected** claim never got into the insurer's system, while a **denied** claim was processed and not paid.

Now the practical question: **how do you fix a claim?** The answer depends on what happened to it. Use the wrong fix, and you'll get another denial — often for being a "duplicate".

## The simple idea

Think of sending a document to a colleague:

- **The email bounced** — it never arrived. You just **send it again**. → That's a **rejected** claim: send it again as a **new** claim.
- **It arrived, but you made a mistake in it.** You send a new version that says **"Please replace the earlier one."** → That's a **corrected** (replacement) claim.
- **You sent it to the wrong person.** You write: **"Please delete the email I sent you."** Then you send it to the right person. → That's a **void**.
- **It arrived, it was correct, but your colleague misunderstood it.** You don't resend it — you **explain why it's right**. → That's an **appeal**.

## Four situations, four fixes

![A decision chart: rejected claims are sent again as new; processed claims with a mistake get a replacement; claims sent to the wrong insurer are voided; correct claims decided wrongly are appealed](/images/posts/corrected-claim-decision.svg)

Every claim carries a small **claim code** that tells the insurer what kind of claim it is:

| Code | Name | Means | Needs the original claim number? |
|---|---|---|---|
| **1** | Original | "This is a new claim." | No |
| **7** | Replacement | "Replace a claim you already processed with this one." | **Yes** |
| **8** | Void | "Cancel a claim you already processed." | **Yes** |

> **Technical name:** this is called the **claim frequency code**. On the [CMS-1500](/blog/cms-1500-vs-ub-04/), it goes in **box 22** (*Resubmission code*), next to the **original reference number**. In the electronic **837**, it's in the claim's **CLM** line, and the original claim number goes in a **REF\*F8** line. On a UB-04, it's the last digit of the **type of bill** — for example 011**7** for a hospital replacement claim.

## 1 — Rejected claim: send it again as new

A rejected claim was never processed, so the insurer has **no record** of it. There's nothing to replace.

- Fix the mistake — a wrong member ID, a missing code, an invalid NPI.
- Send it again with code **1** (original).
- Do it **quickly** — the filing deadline is still running.

> **Example:** Anna's claim is rejected because her member ID was typed with a digit missing. The biller fixes the ID and sends it again the same day, as an original claim.

## 7 — Processed with a mistake: send a replacement

If the insurer **processed** the claim — paid it, partly paid it, or denied it — and the clinic made a mistake, send a **replacement claim**.

Common reasons:

- a wrong or missing **procedure code**, **diagnosis code** or **modifier**
- the wrong **number of units**
- the wrong **date of service**
- missing information, such as an authorization number or a CLIA number
- a service that was left off the claim

### Example: Anna's missing modifier

Remember Anna's diabetes check-up and wart removal on the same day, from the [modifiers post](/blog/cpt-modifiers/)? Suppose the clinic forgot modifier 25.

**The original claim (code 1):**

| Line | Code | Result |
|---|---|---|
| 1 | 99213 — diabetes visit | ❌ Denied — included in the procedure |
| 2 | 17110 — wart removal | ✅ Paid |

BlueHealth's EOB shows the claim number **BH-2026-0001187**.

**The replacement claim (code 7):**

| Line | Code |
|---|---|
| 1 | 99213-**25** — diabetes visit, separate service |
| 2 | 17110 — wart removal |

With the original claim number **BH-2026-0001187** in box 22.

Notice two things:

1. The replacement includes **both lines** — not only the line that changed. A replacement **replaces the whole claim**. If you send only line 1, the insurer may think line 2 was removed and take back its payment.
2. It includes the **insurer's claim number**, so the insurer knows *which* claim to replace. Without it, the replacement looks like a duplicate.

BlueHealth processes the replacement, pays the visit, and leaves the wart removal payment as it was.

## 8 — Wrong insurer or wrong patient: void it

Sometimes a claim **should never have been sent** — at least not to that insurer:

- it was sent to the **wrong insurance company**
- it was billed under the **wrong patient**
- the service **never happened**, or was billed twice by mistake

If the insurer already processed it, you **void** it with code **8** and the original claim number. The insurer cancels it — and if it had paid, it **takes the money back**.

> **Example:** John's visit was billed to BlueHealth, but John's insurance is actually his HMO. BlueHealth paid $70 by mistake. The clinic sends a **void (code 8)** to BlueHealth, which takes back the $70. Then it sends a **new claim (code 1)** to John's HMO.

A void is better than waiting for the insurer to find the mistake. Insurers do find these, and an unexplained overpayment can become a much bigger problem in an audit.

## Appeal: the claim was right, the decision was wrong

If the claim was **correct** and the insurer denied it anyway, **don't** send a corrected claim. There's nothing to correct. Instead, **appeal**:

- Write a short letter explaining why the claim should be paid.
- Attach proof — the doctor's notes, the authorization approval, the referral.
- Send it within the insurer's **appeal time limit**.

> **Example:** BlueHealth denied Anna's MRI for "no authorization" — but the clinic did get approval, number BH-PA-77812, and it was on the claim. That's the insurer's mistake. The clinic appeals and attaches the approval.

## The rules that trip people up

- **Always include the original claim number** with a replacement or void. You'll find it on the EOB or in the 835 payment file.
- **A replacement replaces everything.** Send the complete claim, every line.
- **Never send a correction as a new claim.** It will be denied as a **duplicate** (reason code 18).
- **Don't correct a rejected claim** — it was never processed. Send it as new.
- **Watch the time limits.** Each insurer sets its own deadline for corrected claims and appeals — often counted from the date of the original payment or denial.
- **Check the insurer's rules.** Most insurers follow the codes above, but some have their own forms or steps. For doctors' claims, **Medicare** doesn't accept replacements in the same way — it uses a process called a **reopening**.
- **Some insurers want "Corrected claim" written on paper claims.** Electronically, the code does this job.

## Side by side

| Situation | What to send | Code | Original claim number? |
|---|---|---|---|
| Claim was **rejected** | Fixed claim, as new | 1 | No |
| Processed, **our mistake** | Replacement claim | 7 | Yes |
| Sent to the **wrong insurer or patient** | Void, then a new claim to the right one | 8, then 1 | Yes (for the void) |
| Claim was **right**, decision was **wrong** | Appeal letter with proof | — | Yes (in the letter) |

> **How software helps:** good billing software keeps the insurer's claim number from every EOB, fills in the claim code and original number for you when you correct a claim, and keeps a history of every version. [eClaimPilot](https://eclaimpilot.com/features) handles claim corrections and resubmission this way. Step-by-step guides: [entering or editing a claim](https://help.eclaimpilot.com/billing/claims/enter-edit-claim.html) and [rejection follow-up](https://help.eclaimpilot.com/billing/followup/rejection-followup.html).

## The one thing to remember

**First ask: was the claim processed?** If not, send it again as new. If yes and *we* made a mistake, send a replacement with the original claim number. If it went to the wrong place, void it. If *they* made the mistake, appeal.

## Words you'll hear

| Word | Meaning |
|---|---|
| **Corrected claim** | A new version of a processed claim, sent to replace it |
| **Replacement claim** | Another name for a corrected claim — code 7 |
| **Void claim** | A request to cancel a processed claim — code 8 |
| **Claim frequency code** | The code that says whether a claim is original, a replacement or a void |
| **Original claim number** | The insurer's number for the first claim — also called ICN or DCN |
| **Resubmission** | Sending a claim again — as new, as a replacement or as a void |
| **Recoupment** | When an insurer takes back money it paid by mistake |
| **Reopening** | Medicare's process for correcting a processed claim |
| **Appeal** | A formal request asking the insurer to change its decision |

<!-- Senthil: optional — add a short real story, e.g. a replacement sent without the original claim number that came back as a duplicate, or a payer with unusual corrected-claim rules. -->

## Next in this series

- **Previous:** [Rejected vs Denied Claims](/blog/rejection-vs-denial/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- Coming next: the claim life cycle — the whole journey of a claim, from both sides

*Corrections, voids and resubmissions are where billing software either saves time or creates chaos. Need help getting yours right, or training for your team? [Get in touch](/#contact).*
