# _YES, CHEF! - RECIPE GENERATOR_

Yes, Chef! is a fully responsive app allows the user to get tailored recipes based on the ingredients they have on hand.

## FEATURES

- AI Generated Recipe
- Download PDF Button
- Share Recipe Button

## TECHNOLOGIES

- CSS
- React
- Coolors Color Tool
- Google Fonts & Icons
- Hugging Face's Mistral AI

## WHY I BUILT THIS

I wanted to build a project that generated recipes. Originally I planned on using an API but transitioned to AI when I discovered a similiar project in Scrimba's updated React 19 course. The original project's only accounted for the ingredients that the user had on hand. I took what learned from the course and created my own version - overhauling the UI design, implementing React Router and adding more complexity to the instructions (ingredients on hand, dietary restrictions, cooking time and serving size). 

## WHAT I LEARNED

### _REACT ROUTER_

- Defining and nesting Route/Routes
- Rendering the selected current route with Outlet

### _USESTATE_

- Managing state of ingredients, dietary restrictions, cooking time and serving size
- Resetting app's data after the recipe is produced

### _USEEFFECT_

- Scroll To Top of page for better user experience

### _PROMPTING_

- Crafting a clear and well-structured prompt to get best response

### _NAVIGATOR.SHARE_

- navigator.share is part of the Web Share API, which lets your web app trigger the native "share sheet" on supported devices (usually mobile phones and tablets)

### _WINDOW.PRINT_

- window.print() method is a native JavaScript function that opens the browser's print dialog, allowing users to print the current page or save it as a PDF, depending on their browser's capabilities

### _RESPONSIVE WEB DESIGN_

- Implementing media queries to add device breakpoints
- Using device breakpoints to change orientation, font size, etc
- Using CSS Grid and Flexbox

### _ACCESSIBILITY_

- Calculating the contrast ratio of text, icons and background colors using Coolors' Color Contrast Checker
- Adding aria-labels and alt tags to buttons, icons, images, etc

## MOST CHALLENGING

- Prompting

## BUGS

- Mistral-7B-Instruct-v0.1 delivers good responses 90% of the time
- Responses can take as long as 30 seconds

## FUTURE UPDATES

- Update to Mistral-7B-Instruct-v0.3
- Add cuisine specifications
