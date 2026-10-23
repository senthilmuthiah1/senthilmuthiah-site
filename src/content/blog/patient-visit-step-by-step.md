---
title: "A Patient's Visit to the Doctor, Step by Step"
date: 2026-10-20T12:00:00
summary: "Follow one patient from booking an appointment to the doctor getting paid — who does what, which software is used, and where the billing information comes from."
tags: [Billing, EMR, PMS]
draft: false
---

*Part of my beginner series on US medical billing. No healthcare background needed.*

Before learning medical billing, it helps to see the **whole visit** from start to finish. Billing doesn't start after the patient leaves — information for the claim is collected at almost every step, by different people.

Let's follow **Anna** again. She has a sore throat and books a visit with **Dr. Lee** at Lee Family Clinic. (New to words like *copay* and *eligibility*? Read [US Health Insurance Basics](/blog/health-insurance-basics/) first.)

![The eight steps of a patient visit, from booking to payment, and who does each step](/images/posts/patient-visit-steps.svg)

## Step 1 — Book the appointment

**Who:** front desk · **Software:** practice management system (PMS)

Anna calls the clinic or books online. The front desk records her name, date of birth, phone number and the reason for the visit. If she's a **new patient**, they also ask for her insurance details now, so they can check them before she arrives.

**For billing:** a wrong date of birth or a misspelt name here can cause a claim to be **rejected** weeks later. It has to match what the insurance company has on file.

## Step 2 — Check in

**Who:** front desk · **Software:** PMS

Anna arrives. The front desk:

- scans her **photo ID** and **insurance card** (both sides)
- confirms her address and phone number
- runs an **eligibility check** — is her insurance active today, and what will she owe?
- asks her to sign forms — a **privacy notice** (HIPAA), permission to bill her insurance, and agreement to pay her share
- collects her **copay** ($25)

**For billing:** this is the most important step for getting paid. Most denials can be traced back to something missed at check-in.

## Step 3 — The exam room

**Who:** medical assistant or nurse · **Software:** electronic health record (EHR)

A medical assistant takes Anna to an exam room and records:

- **vital signs** — blood pressure, temperature, height, weight
- **allergies** and **current medicines**
- the **chief complaint** — in Anna's words, why she's here ("sore throat for three days")

## Step 4 — The doctor sees the patient

**Who:** doctor · **Software:** EHR

Dr. Lee reviews Anna's history, examines her, and decides what's wrong. She suspects a strep throat infection.

## Step 5 — Orders: tests and prescriptions

**Who:** doctor · **Software:** EHR

Doctors often order things during a visit:

- **Lab tests** — Dr. Lee does a quick strep test in the office. Bigger tests are sent to an outside lab, and the order and results travel electronically between the clinic and the lab.
- **Imaging** — X-rays or scans, usually done at another facility.
- **Prescriptions** — sent electronically straight to Anna's pharmacy. This is called **ePrescribing**. Refill requests come back the same way, and the doctor approves them from the EHR.

## Step 6 — Chart notes and codes

**Who:** doctor (sometimes a coder) · **Software:** EHR

Dr. Lee writes up the visit in Anna's **chart** — her symptoms, the examination, the test result and the treatment plan. The visit is then turned into **codes**:

- a **diagnosis code** for the sore throat (ICD-10)
- **procedure codes** for the office visit and the strep test (CPT)

These codes, plus the price of each service, are the **charges**. They pass from the EHR to the billing system.

**For billing:** the chart must support the codes. If the notes don't show what was done, the insurer can refuse to pay — or ask for the money back later in an audit.

## Step 7 — Check out

**Who:** front desk · **Software:** PMS

Before Anna leaves, the front desk:

- collects anything she owes that wasn't paid at check-in
- books a **follow-up** visit if Dr. Lee asked for one
- gives her a visit summary — often through the clinic's **patient portal** online

If Anna had **no insurance**, she would usually pay for the visit now, or be sent a bill (a **statement**) later.

## Step 8 — Claim and payment

**Who:** billing team · **Software:** PMS / billing system

The billing team checks the charges, builds the **claim**, and sends it to Anna's insurance company. When the payment arrives, they record it and bill Anna for any balance.

That's the part this blog calls **medical billing** — and it's covered step by step in the [next post](/blog/medical-billing-process/).

## Two kinds of software: PMS and EHR

Most clinics use two systems, often from the same company:

| | Practice management system (PMS) | Electronic health record (EHR) |
|---|---|---|
| **Used by** | Front desk, billing team | Doctors, nurses, medical assistants |
| **Holds** | Appointments, patient details, insurance, charges, claims, payments | Medical history, vitals, notes, test results, prescriptions |
| **Main job** | Run the business and get paid | Record and support patient care |
| **Steps** | 1, 2, 7, 8 | 3, 4, 5, 6 |

The two systems must share information. If the PMS has a wrong insurance or the EHR sends the wrong codes, the claim goes wrong — no matter how good the billing team is.

## The one thing to remember

**Billing starts at the first phone call.** Every person in the visit — front desk, medical assistant, doctor — creates information the claim depends on. A clean claim is the result of a careful visit.

## Words you'll hear

| Word | Meaning |
|---|---|
| **PMS** | Practice management system — scheduling, registration and billing software |
| **EHR / EMR** | Electronic health (or medical) record — the patient's medical chart |
| **Chief complaint** | The main reason for the visit, in the patient's words |
| **Vitals** | Basic measurements — blood pressure, temperature, weight |
| **ePrescribing** | Sending prescriptions electronically to the pharmacy |
| **Charges** | The coded services and their prices, ready for billing |
| **Patient portal** | A secure website where patients see their records and bills |
| **Statement** | A bill sent to the patient for what they owe |

<!-- Senthil: optional — add a short real story, e.g. a check-in mistake that caused a denial, or a PMS–EHR mismatch you've fixed. -->

## Next in this series

- **Previous:** [US Health Insurance Basics](/blog/health-insurance-basics/)
- **Next:** [What Is the Medical Billing Process?](/blog/medical-billing-process/) — the billing steps in detail

*Building or improving a PMS, EHR or billing system? I've designed all three. [Get in touch](/#contact) — I offer consulting and beginner-friendly training.*
