import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS, EDUCATION, ACHIEVEMENTS } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const RESUME_CONTEXT = `
You are an AI assistant for the portfolio of ${PERSONAL_INFO.name}.
Your goal is to answer visitor questions specifically about Kaushlendra's professional background, skills, and projects using the data below.

About: ${PERSONAL_INFO.about}
Contact: Email: ${PERSONAL_INFO.email}, Phone: ${PERSONAL_INFO.phone}, LinkedIn: ${PERSONAL_INFO.linkedin}, GitHub: ${PERSONAL_INFO.github}

Skills:
${SKILLS.map(s => `- ${s.title}: ${s.skills.join(', ')}`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.duration}): ${e.points.join('. ')}`).join('\n')}

Education:
${EDUCATION.map(e => `- ${e.degree} from ${e.institution} (${e.year}). ${e.details || ''}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.year}) using ${p.tech.join(', ')}: ${p.description}`).join('\n')}

Achievements:
${ACHIEVEMENTS.map(a => `- ${a.title}`).join('\n')}

Instructions:
1. Be polite, professional, and enthusiastic.
2. Only answer based on the provided resume context. If asked about something not in the resume, say you don't have that information but can discuss his known skills.
3. Keep answers concise (under 3 sentences) unless asked for details.
4. If asked "Who are you?", say you are Kaushlendra's Portfolio Assistant.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my AI brain is missing its API Key. Please tell the developer to add it to the environment variables!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: RESUME_CONTEXT,
        maxOutputTokens: 200,
      }
    });

    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};