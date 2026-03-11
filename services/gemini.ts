
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI | null = null;

  private getAI(): GoogleGenAI {
    if (!this.ai) {
      const apiKey = process.env.API_KEY || '';
      if (!apiKey) throw new Error('API key not set');
      this.ai = new GoogleGenAI({ apiKey });
    }
    return this.ai;
  }

  async generateMessage(prompt: string, fallback: string): Promise<string> {
    try {
      const response = await this.getAI().models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      return response.text || fallback;
    } catch (error) {
      console.error("Error generating AI message:", error);
      return fallback;
    }
  }

  async generateOurStory(prompt: string, fallback: string): Promise<string> {
    try {
      const response = await this.getAI().models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      return response.text || fallback;
    } catch (error) {
      return fallback;
    }
  }
}

export const geminiService = new GeminiService();
