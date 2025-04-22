# Doctor Appointment Booking App

This application allows users to book appointments with doctors. Below are the setup instructions, AI use cases, known limitations, and possible next steps for improvements.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Commands](#commands)
- [AI Use Cases](#ai-use-cases)
- [Known Limitations](#known-limitations)
- [Next Steps / Improvements](#next-steps--improvements)

---

## Setup instructions

1. Clone the repository

```
git clone https://github.com/zobla-kv/Doctor-appointment-booking.git
```

2. Navigate to the project root and install dependencies

```
npm install
```

##### Commands

- Start development server

```
npm run dev
```

- Run tests

```
npm run test
```

---

## AI use cases

- App architecture ideas
- Data modeling
- Data mocking
- Code refactoring
- Different optimizations
- Accesibility improvements
- Test generation
- Readme file improvements

## Known limitations

- Doctor doesn't have unique identifier (id). **getAppointmentTimeForDoctor** finds doctor by name. This can cause bugs if 2 doctors have the same name
- Navigating with arrows in modal not implemented

## Next steps / improvements

- Make it easier to control list of filters from the parent component, it's possible, but requires changes in multiple places (parent component and model)
- Make **focusableElements** prop in modal generic. It now handles only inputs
- More strict type checking for date and time format, now it's just a string
- Limit doctor rating to range 1-10
- Utils/transform is too generic, for example capitalize could be moved to utils/text
- Filter's name is explicitly capitalized, data isn't.
- Appointments in "my appointments" section are grouped by date and sorted, they could also be sorted by time
- Use dynamic text for i18n
- Allow booked appointments to be canceled
- Add toast messages
