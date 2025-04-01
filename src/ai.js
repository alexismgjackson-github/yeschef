import { HfInference } from "@huggingface/inference";

const hf = new HfInference(import.meta.env.VITE_YESCHEF_API_KEY); // sending a request to the Mistral AI model

const SYSTEM_PROMPT = `
 You are an assistant that receives a list of ingredients that a user has and suggests a recipe
 they could make with all of those ingredients. The recipe can include additional ingredients they 
 didn't mention, but try not to include too many extra ingredients. Format your response in 
 grammatically correct markdown to make it easier to render to a web page.
`; //  defines the behavior of the model

export async function getRecipeFromMistral( //  asynchronous function, which means it returns a Promise
  ingredientsArr,
  restrictionsArr,
  cookingTime,
  servingSize
) {
  const ingredientsString = ingredientsArr.join(", "); // array of ingredients to include in the recipe
  const restrictionsString = restrictionsArr.join(", "); // array of dietary restrictions to avoid in the recipe
  const cookingTimeNumber = cookingTime; // maximum cooking time for the recipe (in minutes)
  const servingSizeNumber = servingSize; // number of servings needed for the recipe

  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1", // sending a request to this specific Hugging Face API model
      messages: [
        { role: "system", content: SYSTEM_PROMPT }, // sets the context
        {
          role: "user", // dynamically incorporates the formatted ingredient list, restrictions, cooking time, serving size
          content: `I have ${ingredientsString}. Please recommend a recipe that can be cooked 
          in ${cookingTimeNumber} minutes. Please do not include ${restrictionsString} in this recipe. 
          Please make sure the recipe has a serving size of ${servingSizeNumber}.`,
        },
      ],
      max_tokens: 1024, // response should not exceed 1024 tokens but I updated my Hugging Face plan to increase the tokens
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}
