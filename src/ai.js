import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
 You are an assistant that receives a list of ingredients that a user has and suggests a recipe
 they could make with all of those ingredients. The recipe can include additional ingredients they 
 didn't mention, but try not to include too many extra ingredients. Format your response in 
 grammatically correct markdown to make it easier to render to a web page.
`;

// const hf = new HfInference(`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`);
const hf = new HfInference(import.meta.env.VITE_YESCHEF_API_KEY);

export async function getRecipeFromMistral(
  ingredientsArr,
  restrictionsArr,
  cookingTime,
  servingSize
) {
  const ingredientsString = ingredientsArr.join(", ");
  const restrictionsString = restrictionsArr.join(", ");
  const cookingTimeNumber = cookingTime;
  const servingSizeNumber = servingSize;

  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please recommend a recipe that can be cooked 
          in ${cookingTimeNumber} minutes. Please do not include ${restrictionsString} in this recipe. 
          Please make sure the recipe has a serving size of ${servingSizeNumber}.`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}
