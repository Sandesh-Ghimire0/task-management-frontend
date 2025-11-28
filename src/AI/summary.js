import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of different tasks of the user. 
Your job is to generate a summarized report describing everything in that task list.
`;

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

export async function getAiSummary(tasks) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `
${SYSTEM_PROMPT}

User's task list:
${tasks}

Please generate a summary report.
`;

        const response = await model.generateContent(prompt);

        return response.response.text();

    } catch (error) {
        console.error("Gemini Error:", error);
        return "Error generating summary";
    }
}
