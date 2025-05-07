// Import the Hugging Face Inference class for API interaction
import { HfInference } from "@huggingface/inference";

// Initialize the Hugging Face Inference API with the API key from environment variables
const hf = new HfInference(import.meta.env.VITE_YESCHEF_API_KEY); // sending a request to the Mistral AI model

// System prompt that defines the assistant's behavior
const SYSTEM_PROMPT = `
 You are an assistant that receives a list of ingredients that a user has and suggests a recipe
 they could make with all of those ingredients. The recipe can include additional ingredients they 
 didn't mention, but try not to include too many extra ingredients. Format your response in 
 grammatically correct markdown to make it easier to render to a web page.
`; // This prompt tells the model how it should behave when generating a recipe

/**
 * Function to get a recipe suggestion based on user's inputs.
 * @param {Array} ingredientsArr - Array of ingredients provided by the user.
 * @param {Array} restrictionsArr - Array of dietary restrictions to avoid in the recipe.
 * @param {Number} cookingTime - Maximum cooking time (in minutes) for the recipe.
 * @param {Number} servingSize - Number of servings for the recipe.
 *
 * @returns {Promise<String>} - Returns a promise with the recipe in markdown format.
 */
export async function getRecipeFromMistral(
  ingredientsArr,
  restrictionsArr,
  cookingTime,
  servingSize
) {
  // Format the ingredient array as a comma-separated string for the model
  const ingredientsString = ingredientsArr.join(", ");

  // Format the restrictions array as a comma-separated string for the model
  const restrictionsString = restrictionsArr.join(", ");

  // Set the maximum cooking time for the recipe
  const cookingTimeNumber = cookingTime;

  // Set the number of servings for the recipe
  const servingSizeNumber = servingSize;

  try {
    // Send a request to Hugging Face's Mistral model to get the recipe suggestion
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1", // The model ID for the Mistral AI
      messages: [
        { role: "system", content: SYSTEM_PROMPT }, // Sets the system context for how the assistant should respond
        {
          role: "user", // The user's request for a recipe
          content: `I have ${ingredientsString}. Please recommend a recipe that can be cooked 
          in ${cookingTimeNumber} minutes. Please do not include ${restrictionsString} in this recipe. 
          Please make sure the recipe has a serving size of ${servingSizeNumber}.`,
        },
      ],
      max_tokens: 1024, // Maximum number of tokens in the response (controls length of the reply)
    });

    // Return the recipe content from the response, in markdown format
    return response.choices[0].message.content;
  } catch (err) {
    // Log any errors that occur during the API request
    console.error(err.message);
  }
}
