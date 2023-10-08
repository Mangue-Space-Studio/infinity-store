
export interface ImagePromptParams {
    age: number;
    characterDescription: string;
    character: string;
}

export interface StoryPromptParams {
    age: number;
    subject: string;
    character: string;
}

export interface AiAPIResponse {
    imageUrl: string;
    story: string;
}