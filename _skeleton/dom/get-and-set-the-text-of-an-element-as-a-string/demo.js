/**
 * Get and set the text of an element (and omit the markup) as a string.
 * The Node.textContent property gets all of the text content,
 * including CSS properties inside of a style element and hidden UI elements.
 * Any HTML elements included in a string when setting content
 * with the Node.textContent property are automatically encoded and rendered as-is.
 */

let greeting = document.querySelector(".greeting");

// Get text content
// returns "p {color: rebeccapurple;} This is not rendered. Hello world!"
let text = greeting.textContent;

// Set text content
// This completely replaces whats there, including any HTML elements
greeting.textContent = "We can dynamically change the content.";

// Add text to the end of an element's existing content
greeting.textContent += " Add this after what is already there.";

// Add text to the beginning of an element's existing content
greeting.textContent =
  "We can add this to the beginning. " + greeting.textContent;

// HTML elements are automatically encoded and rendered as-is
greeting.textContent = "<p>See you later!</p>";
