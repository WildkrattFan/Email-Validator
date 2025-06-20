# Email-Validator
[![CI Pipeline](https://github.com/WildkrattFan/Email-Validator/actions/workflows/CI.yml/badge.svg)](https://github.com/WildkrattFan/Email-Validator/actions/workflows/CI.yml)
Validates Email addresses for business purposes


Problem Statement:
---
Sending an email to an address that doesn't exist can damage your companies sender reputation, causing more of your messages to end up in spam folders. 

Fix:
---
A lightweight API that makes various checks to improve the chances of an email being legitimate.

Checks:
---
- Format Verification
  - verifies that the email format is valid
- MX Verification
  - Verifies that the domain the email is associated with (such as gmail.com) is registered to a mail server
- Gibberish Check
  - Verifies that the address was likely written by a real human and not randomly generated or typed

Tests:
---
This Mini Project was tested using Vitest, you may view the CI pipeline via Github Actions
