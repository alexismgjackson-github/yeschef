# _YES, CHEF! - RECIPE GENERATOR_

Yes, Chef! is a fully responsive app allows the user to get tailored recipes based on the ingredients they have on hand.

## FEATURES

- AI Generated Recipe

## TECHNOLOGIES

- CSS
- React
- Coolors Color Tool
- Google Fonts & Icons
- Hugging Face's Mistral AI

## WHY I BUILT THIS

I wanted to build project that generate recipes. Originally I planned on using an API but transitioned to AI when I discovered a similiar project in Scrimba's updated React 19 course. The original project's only accounted for ingredients the user inputs. I took what learned from the course and created my own version - overhauling the UI design, implementing React Router and adding more complexity to the instructions (ingredients, dietary restrictions, cooking time and serving size).

## WHAT I LEARNED

### _REACT ROUTER_

- Defining and nesting Route/Routes
- Rendering the selected current route with Outlet

### _USESTATE_

- Managings state of ingredients, dietary restrictions, cooking time and serving size
- Form validation
- Resetting app's data after the recipe is produced

### _USEEFFECT_

- Scroll To Top of page for better user experience
- Clear form inputs of values when the user navigates

### _PROMPTING_

- Crafting clear and well-structure prompt to get best response

### _RESPONSIVE WEB DESIGN_

- Implementing media queries to add device breakpoints
- Using device breakpoints to change orientation, font size, etc
- Using CSS Position, Grid and Flexbox

### _ACCESSIBILITY_

- Calculating the contrast ratio of text, icons and background colors using Coolors' Color Contrast Checker
- Adding aria-labels and alt tags to buttons, icons, images, etc

## MOST CHALLENGING

- Prompting

## BUGS

- Mistral-7B-Instruct-v0.1 delivers good responses 80% of the time
- Responses can take as long as 30 seconds

## FUTURE UPDATES

- Update to Mistral-7B-Instruct-v0.3
- Add cuisine specifications
- Add ability to produce more than one recipe at a time
- Add a "Download PDF" button to recipe page
