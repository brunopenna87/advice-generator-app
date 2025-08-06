# Frontend Mentor – Advice Generator App Solution

This is my solution to the [Advice Generator App](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db) challenge on Frontend Mentor. The goal was to build a fully responsive advice card UI and wire it up to the Advice Slip JSON API using vanilla JavaScript.

---

## Table of Contents

- [Overview](#overview)
- [The Challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My Process](#my-process)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)
- [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

Users can:

- View an optimal layout for the app depending on their device’s screen size (mobile & desktop).  
- See hover states for the dice button.  
- Generate a new piece of advice by clicking the dice icon.  

I focused on clean, semantic HTML, modern CSS (Flexbox & Grid), and a minimal, readable JavaScript implementation that fetches advice from the API on load and on button click.

---

## The Challenge

- Build the UI to match the Figma design.  
- Implement responsive breakpoints so the layout adapts fluidly.  
- Fetch random advice slips from the Advice Slip API using `fetch` + `async/await`.  
- Handle loading, success, and error states gracefully.  

---

## Screenshot

advice-generator-app/screenshots/screenshots:advice-generator-screenshot.png

Links
Solution URL: https://github.com/brunopenna87/advice-generator-app

Live Site URL: https://brunopenna87.github.io/advice-generator-app/

My Process
Setup & Layout

Created semantic HTML structure.

Used CSS variables for theme colors and a mobile-first workflow.

Applied Flexbox for centering the card and Grid for optional layout patterns.

Responsive Design

Added media queries at 768px to switch between mobile and desktop typography, spacing, and divider images.

JavaScript & API Integration

Wrote a single async function to fetch advice from the API and updated the DOM.

Used try/catch for error handling and cache: "no-cache" to avoid stale advice.

Attached the function to both DOMContentLoaded and the dice button’s click event.

Polish & Debugging

Used console.log and browser DevTools to verify data flow.

Ensured hover and active states match the design.

Built With
HTML5 – Semantic markup

CSS3 – Custom properties, Flexbox, Grid, Media Queries

JavaScript (ES6+) – fetch, async/await, try/catch, template strings

Advice Slip JSON API – Random advice endpoint

Google Fonts – Manrope

What I Learned
I sharpened my skills in:

Asynchronous JavaScript: using fetch with async/await and handling errors.

Destructuring & Template Strings: writing concise code to extract and display API data.

Responsive Design: refining breakpoints and layout shifts between mobile and desktop.

Clean Code Practices: organizing a minimal script with no repetition and clear function names.

js
Copiar
Editar
// Example: concise fetching and DOM update
async function getAdvice() {
  try {
    const { slip: { id, advice } } = await (await fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' })).json();
    adviceIdEl.innerText = `Advice #${id}`;
    adviceTextEl.innerText = `"${advice}"`;
  } catch {
    adviceTextEl.innerText = 'Oops, something went wrong.';
  }
}
Continued Development
Explore adding a loading spinner or animation while fetching new advice.

Implement unit tests for the fetch function using a mocking library.

Experiment with localStorage to cache the last advice across page reloads.

Useful Resources
Advice Slip JSON API Documentation – Official API reference.

MDN: fetch API – Details on fetch, options, response handling.

CSS-Tricks: Flexbox Guide – Great reference for Flexbox patterns.

Author
Bruno Penna

GitHub: @brunopenna87

LinkedIn: [bruno-cesare-penna-e-costa](https://www.linkedin.com/in/bruno-cesare-penna-e-costa-77951a6a/)

Acknowledgments
Thanks to Dev em Dobro e Frontend Mentor for providing the challenge and Figma assets.
Inspired by community solutions and best practices shared on GitHub.
