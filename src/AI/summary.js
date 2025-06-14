import Groq from "groq-sdk";



const SYSTEM_PROMPT = `
    You are an assistant that receives a list of different task of user. your work is to generate the a kind of report that summarizes everything which is in that task list
`


const API_KEY = import.meta.env.VITE_GROQ_API_KEY; // Use Vite env variable

const groq = new Groq({ apiKey:API_KEY,dangerouslyAllowBrowser: true });

export async function getAiSummary(tasks) {
  try{
    const response =await groq.chat.completions.create({
      messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: ` ${tasks} These are my task list. Please give me summary` },
      ],
      model: "llama3-8b-8192",
    });
    return response.choices[0].message.content

  }catch(error){
    console.log(error)
  }
  
}


// const hf = new HfInference(VITE_HF_ACCESS_TOKEN)

// export async function getRecipeFromMistral(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ")
//     try {
//         const response = await hf.chatCompletion({
//             model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
//             messages: [
//                 { role: "system", content: SYSTEM_PROMPT },
//                 { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
//             ],
//             max_tokens: 1024,
//         })
//         return response.choices[0].message.content
//     } catch (err) {
//         console.error(err.message)
//     }
// }