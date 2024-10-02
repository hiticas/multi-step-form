# Multi Step Form Project

##### Live Demo: https://multi-step-form.mike-dev.org/

## Overview

The Multi Step Form project is a React-based application that guides users through a multi-step form process. The project is structured into several components, each responsible for a specific part of the form.

## Redux

### 1. `formSlice.js`

- The Redux slice that manages the form state.
- Located in `src/redux/formSlice.js`
- Exports:
  - `setField`
  - `setErrors`
  - `resetForm`

### 2. `stepSlice.js`

- The Redux slice that manages the step state.
- Located in `src/redux/stepSlice.js`
- Exports:
  - `setStep`
  - `nextStep`
  - `prevStep`

## Utilities

### 1. `index.css`

- The global CSS file that styles the application.
- Located in `src/index.css`

### 2. `tailwind.config.js`

- The Tailwind CSS configuration file.
- Located in `tailwind.config.js`

## Implementation

The implementation of the Multi Step Form project involves the following steps:

1. The user interacts with the `MultiStepForm` component, which renders the first step of the form.
2. The user fills out the form and clicks the "Next" button, which triggers the `handleNext` function.
3. The `handleNext` function validates the form data using the `validateStep` function and updates the form state using the `setField` function.
4. If the form data is valid, the `handleNext` function updates the step state using the `setStep` function and renders the next step of the form.
5. The user repeats steps 2-4 until they reach the final step of the form.
6. The final step of the form displays a congratulatory message and allows the user to reset the form using the `resetForm` function.
