
import { GoogleGenAI } from "@google/genai";

const MODEL_NAME = 'gemini-3-flash-preview';

export async function getConsultationResponse(prompt: string, history: { role: 'user' | 'model'; text: string }[]) {
  // Always use the required named parameter and direct environment variable for API key initialization
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are an expert Independent Building Consultant AI. 
    Your goal is to provide preliminary advice on construction projects, feasibility, planning permissions, cost engineering, and regulatory compliance.
    Be professional, concise, and accurate. 
    If you don't know a specific local regulation, suggest consulting with a local licensed professional.
    Structure your answers using markdown for readability.
  `;

  try {
    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    // sendMessage call handles the current prompt context
    const response = await chat.sendMessage({ message: prompt });
    // Correctly extract text output by accessing the .text property (not a method) as per guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again or contact our human experts directly.";
  }
}
