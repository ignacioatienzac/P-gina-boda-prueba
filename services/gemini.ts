
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

  async generateRSVPMessage(name: string, attendance: string): Promise<string> {
    try {
      const prompt = `Escribe un mensaje corto, elegante y emocional para una pareja de novios (Vicky e Ignacio) de parte de un invitado llamado ${name}. La respuesta es que ${attendance === 'yes' ? 'SÍ asistirá' : 'NO podrá asistir'}. El tono debe ser cálido y respetuoso. Responde solo con el texto del mensaje en español.`;
      
      const response = await this.getAI().models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      return response.text || "¡Felicidades por su gran día!";
    } catch (error) {
      console.error("Error generating AI message:", error);
      return "¡Muchísimas felicidades! Estamos muy emocionados por ustedes.";
    }
  }

  async generateOurStory(): Promise<string> {
    try {
      const prompt = "Escribe una historia de amor corta (máximo 150 palabras) sobre una pareja llamada Vicky e Ignacio. Se conocieron en un café en otoño, les encanta viajar y decidieron casarse en una hermosa finca al atardecer. El tono debe ser romántico y poético.";
      
      const response = await this.getAI().models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      return response.text || "Nuestra historia comenzó con una mirada y hoy escribimos el capítulo más importante.";
    } catch (error) {
      return "Nuestra historia es el viaje más hermoso de nuestras vidas.";
    }
  }
}

export const geminiService = new GeminiService();
