import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client safely.
// In a real app, you might want to handle missing keys more gracefully in the UI.
const ai = new GoogleGenAI({ apiKey });

export const askAITutor = async (question: string, context: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert Chartered Accountant (CA) tutor. 
      The student asks: "${question}".
      Context: ${context}.
      Provide a clear, concise, and professional explanation suitable for a CA student. 
      If it involves a calculation, show the steps clearly.`,
    });
    
    return response.text || "I couldn't generate an answer at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while trying to answer your question. Please try again later.";
  }
};

export const generatePracticeQuestion = async (subject: string): Promise<string> => {
    if (!apiKey) return "API Key missing.";
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Generate a challenging multiple-choice practice question for CA ${subject}. 
            Include the question, 4 options, and the correct answer with a brief explanation at the end.`
        });
        return response.text || "Could not generate question.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Error generating question.";
    }
}