---
title: "Downcoding and Bundling: Why a Claim Is Paid Less Than Expected"
date: 2026-10-23T23:57:20
summary: "Bundling, unbundling, downcoding and upcoding explained for beginners — what each one means, how it shows on the EOB, which ones are not allowed, and what to do when an insurer pays less."
tags: [Billing, RCM, Coding, Denials]
draft: false
faq:
  - q: "What is bundling in medical billing?"
    a: "Bundling is when one service is considered part of another service done at the same time, so the insurance company pays only for the main service. For example, a short check before a minor procedure is usually included in the procedure."
  - q: "What is unbundling and why is it not allowed?"
    a: "Unbundling is billing the separate parts of a service with their own codes when one combined code exists, usually to get paid more. It breaks coding rules and can be treated as fraud."
  - q: "What is downcoding?"
    a: "Downcoding is when the insurance company pays a claim as if a lower-level, cheaper code had been billed — for example, paying a 99214 visit as a 99213."
  - q: "What is upcoding?"
    a: "Upcoding is billing a higher-level or more expensive code than the doctor's notes support. It is not allowed and can lead to audits, repayments and fraud penalties."
  - q: "What are NCCI edits?"
    a: "The National Correct Coding Initiative (NCCI) is a set of rules from CMS that lists pairs of codes that normally should not be billed together, and the maximum units of a service per day. Many insurers use similar rules."
  - q: "How does bundling show on an EOB?"
    a: "Usually with reason code 97, meaning the service is included in another service paid on the same day. Downcoding often shows with reason code 150, meaning the information does not support this level of service."
  - q: "What should I do if a claim was downcoded?"
    a: "Check the doctor's notes. If they support the code you billed, appeal and send the notes. If they don't, accept the lower code — and fix the coding for future claims."
---

*Part of my beginner series on US medical billing. No healthcare background needed.*

Sometimes an insurance company pays a claim — but **less than expected**. Nothing was "denied" in the usual sense. Two common reasons are **bundling** and **downcoding**. And on the other side of the coin are two things a clinic must **never** do: **unbundling** and **upcoding**.

These four words sound technical. The ideas behind them are simple.

## The simple idea: a combo meal

Think of a fast-food combo: a burger, fries and a drink, sold together for one price.

- **Bundling** — the restaurant says, "The fries are part of the combo. You don't pay for them separately." → The insurer says a smaller service is **included** in a bigger one.
- **Unbundling** — a cashier charges the burger, fries and drink **separately**, to make more money. → A clinic bills the **parts** of a combined service separately. **Not allowed.**
- **Downcoding** — you ordered a **large** meal, but you're refunded as if you ordered a **small** one. → The insurer pays for a **lower-level** code than the one billed.
- **Upcoding** — you ordered a small meal, but the cashier charges for a large one. → A clinic bills a **higher-level** code than the notes support. **Not allowed.**

![Four panels: bundling, unbundling, downcoding and upcoding, each with a simple code example](/images/posts/bundling-downcoding.svg)

## Bundling: "that's already included"

Many services are **included** in other services:

- A short check by the doctor right before a minor procedure is usually **part of the procedure**.
- Taking a blood sample is often part of a lab test.
- A follow-up visit within a set period after surgery is often part of the **surgery's price** — this is called the **global period**.

So when both codes appear on the same claim, the insurer pays for the main one and **refuses the smaller one** as "included".

That's fair — **when it's true.** But sometimes the two services really were **separate**. Remember Anna from the [modifiers post](/blog/cpt-modifiers/): she had a full diabetes check-up *and* a wart removed on the same day. The check-up had nothing to do with the wart. Without modifier **25**, the insurer bundled the visit into the wart removal and paid only for the wart.

**The fix:** when two services truly are separate, add the right **modifier** (25 for a separate visit; 59 or its more specific versions for a separate procedure) and send a [corrected claim](/blog/corrected-claims/). The doctor's notes must clearly show the separate work.

### The rule book: NCCI edits

How does the insurer know which services "go together"? Many follow a public rule book from Medicare called the **National Correct Coding Initiative** — **NCCI** for short. It includes:

- **Code pairs** that normally **shouldn't be billed together** on the same day. For some pairs, a modifier can show they were truly separate; for others, never.
- **Unit limits** — the most units of a service that make sense for one patient on one day. For example, you can't remove someone's appendix twice.

Commercial insurers often use similar rules in their own claim-checking software — and some add rules of their own.

## Unbundling: never bill the parts separately

**Unbundling** is the opposite: billing the **separate parts** of a service with their own codes, when **one combined code** exists.

> **Example:** a common blood test panel checks many things at once — glucose, kidney function, salts and more. There's **one code** for the whole panel: **80053**. Billing glucose (**82947**), creatinine (**82565**) and each other test **separately** would usually earn more money — and it's **unbundling**.

Unbundling is **against the coding rules**. Done on purpose, it can be treated as **fraud**. Insurers' software catches most of it automatically, but repeated patterns can lead to audits and paying money back.

## Downcoding: paid at a lower level

Many services come in **levels**. Office visits, for example, have five levels for existing patients — **99211** to **99215** — depending on how complex the visit was. Higher levels pay more.

**Downcoding** is when the insurer pays as if a **lower** level had been billed:

| Billed | Paid as | On the EOB |
|---|---|---|
| 99214 (a more complex visit) | 99213 (a moderate visit) | Reason code **150** — information doesn't support this level |

Why does it happen?

- The insurer's software decided the **diagnosis** didn't justify a higher level.
- The insurer reviewed the **notes** and disagreed with the level.
- The insurer has a **policy** of paying certain codes at a lower level.

**What to do:**

1. **Check the doctor's notes.** Do they really support the level billed?
2. **If yes** → **appeal**, and send the notes. (See [Corrected Claims](/blog/corrected-claims/) on appeals.)
3. **If no** → accept the lower level, and **fix the coding** for future visits.
4. **Watch for patterns.** If one insurer downcodes the same code again and again, raise it with them — it may go against your contract.

Downcoding can also happen **inside** the clinic: a doctor who is unsure always picks a **lower** level "to be safe". That's not fraud, but it **loses money** that the clinic earned. Coding training helps.

## Upcoding: never bill a higher level

**Upcoding** is billing a **higher** level or a more expensive code than the notes support — for example, billing **99215** when the visit was really a **99213**.

It's **not allowed**. Even when it's a mistake, the insurer can ask for the money back. Done on purpose, it's **fraud**, and the penalties can be serious. The rule is simple: **the code must match the notes.**

## How to spot them on the EOB

(See [How to Read an EOB](/blog/how-to-read-an-eob/).)

| You see… | It probably means… |
|---|---|
| A line paid **$0** with reason code **97** | **Bundled** — included in another service that day |
| Reason code **234** | This procedure is **not paid separately** |
| Reason code **59** | Paid less because of **multiple-procedure** rules (the second procedure is often paid at a lower rate) |
| Reason code **150** | **Downcoded** — the information doesn't support this level |
| Reason code **151** | Too many units or too often |
| The paid code is **different** from the billed code | **Downcoded** or **re-coded** by the insurer |

## How to avoid problems

- **Code from the notes** — never higher, never lower than they support.
- **Use the combined code** when one exists.
- **Use modifiers only when they're true**, and make sure the notes show why.
- **Check claims before sending** against NCCI-style rules.
- **Track every bundling and downcoding reason by insurer.** Patterns show where to train staff — or where to challenge the insurer.
- **Know your contracts.** Some contracts say how bundling and levels must be handled.

> **How software helps:** billing software can check every claim against code-pair and unit rules **before** it's sent, and flag a missing modifier — so you fix it once, not after a denial. [eClaimPilot](https://eclaimpilot.com/features) includes claim scrubbing for this. Step-by-step guides: [claim scrubbing](https://help.eclaimpilot.com/billing/practice/claim-scrubbing.html) and [procedure codes](https://help.eclaimpilot.com/billing/master/procedure-codes.html).

## The one thing to remember

**The code must match the notes.** Bundling and downcoding are the insurer paying less — check whether it's right, and appeal if it isn't. Unbundling and upcoding are the clinic billing more than it should — never do either.

## Words you'll hear

| Word | Meaning |
|---|---|
| **Bundling** | One service counted as part of another, so it isn't paid separately |
| **Unbundling** | Billing parts of a service separately when one combined code exists — not allowed |
| **Downcoding** | Paying (or billing) a lower-level code than the service deserves |
| **Upcoding** | Billing a higher-level code than the notes support — not allowed |
| **NCCI** | National Correct Coding Initiative — Medicare's rules for code pairs and unit limits |
| **Global period** | A set time after surgery when follow-up visits are included in the surgery's price |
| **E/M levels** | The levels of office visits, such as 99211–99215 |
| **Multiple-procedure rule** | Paying the second and later procedures on the same day at a lower rate |

<!-- Senthil: optional — add a short real story, e.g. a payer that auto-downcoded a visit level by diagnosis, or a bundling pattern you fixed with a scrubbing rule. -->

## Next in this series

- **Previous:** [In-Network vs Out-of-Network](/blog/in-network-vs-out-of-network/)
- **Start of the series:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- **Next:** [Payment Posting](/blog/payment-posting/)

*Building code-pair and unit rules into claim checks — and spotting underpayment patterns by payer — is where billing software really earns its keep. Need help with yours? [Get in touch](/#contact).*
