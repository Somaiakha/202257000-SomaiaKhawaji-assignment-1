# AI Usage Report — Assignment 2

## Tools I Used

* I used **Claude AI** as my main helper throughout this assignment — for asking
  questions, getting unstuck, understanding new concepts, and reviewing my work
  before submitting.

---

## How I Used It

* When I wasn't sure how to turn the existing navbar into a working tab system,
  I asked Claude to explain the approach. I then wrote the logic myself and
  adjusted it to match my existing CSS classes.
* For the form validation, I knew what I wanted to check (empty fields, email
  format) but wasn't sure about the cleanest way to do it in JS. Claude explained
  regex patterns and I applied them in my own code.
* I asked Claude to explain how `IntersectionObserver` works for the fade-in
  animations — then I implemented and fine-tuned the thresholds myself.
* I also used Claude to review my README and documentation drafts, then rewrote
  everything in my own words.

---

## Use Cases

* **Tab Navigation**: Asked about the best way to show/hide sections on click.
  Claude explained the `display: none` toggling approach and I built it myself,
  keeping it consistent with my existing nav structure.
* **Form Validation**: Got help understanding how to use regex for email
  checking. I wrote the full validation function and chose what error messages
  to show.
* **localStorage**: Asked how to persist the dark/light theme across page
  reloads. Claude explained the concept and I integrated it into my existing
  theme toggle.
* **Animations**: Asked about `IntersectionObserver` for scroll-triggered
  effects. Claude walked me through the API and I chose which elements to
  animate and how.
* **Debugging**: When my tab switching was affecting the scroll spy feature,
  I described the conflict and Claude helped me think through the fix. I
  implemented the solution myself.
* **Documentation**: Asked for feedback on my README draft and rewrote it
  based on the suggestions.

---

## Benefits

* Having a place to ask specific questions made learning faster — instead of
  spending hours on one concept, I could get a clear explanation and keep moving.
* I discovered cleaner JS patterns (like regex for validation and
  `IntersectionObserver` for animations) that I wouldn't have found as quickly
  on my own.
* Debugging was less frustrating because I could describe what was happening
  and get pointed in the right direction instead of guessing.

---

## Challenges

* Sometimes suggestions were too general, so I had to ask follow-up questions
  to get something that actually fit my existing code structure.
* I had to be careful not to just accept the first suggestion — I made myself
  understand the logic before using anything.
* A few times the suggested approach didn't match my CSS class names, so I had
  to adapt the code rather than use it as-is.

---

## Learning Outcomes

* I learned how tab-based navigation works under the hood — it's simpler than
  I expected once I understood the show/hide pattern.
* I got comfortable writing form validation logic from scratch, including regex.
* I understand `IntersectionObserver` well enough now that I could use it again
  without looking it up.
* I learned that small conflicts between features (like tab switching vs scroll
  spy) require thinking about the overall JS flow, not just fixing one function.
* I got better at asking specific questions — describing my exact problem and
  existing code rather than asking generally.

---

## How I Modified AI Suggestions Responsibly

* I never copy-pasted anything directly — I read every suggestion, made sure
  I understood it, and then wrote my own version that fit my project.
* All personal content (bio, project descriptions, skills) is mine. Claude
  never wrote anything about me.
* I chose which features to build, how they look, and how they behave. When a
  suggestion didn't feel right for my site, I changed it.
* I tested everything manually across desktop, tablet, and mobile and fixed
  issues on my own.
* I used Claude the same way I'd use a tutor — to understand concepts and
  get unstuck, not to get the work done for me.