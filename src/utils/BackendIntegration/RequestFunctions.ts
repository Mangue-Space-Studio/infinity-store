import axios, { AxiosResponse } from 'axios';
import { AiAPIResponse, ImagePromptParams, StoryPromptParams } from './Interfaces';
import dotenv from 'dotenv';

// dotenv.config();

const rootUri = "https://infinite.keycore.com.br";

export const getImageRequest = async (url: string, params: ImagePromptParams): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.post(url, params);
    return response.data;
  }

  catch (error) {
    throw new Error(`Erro ao fazer HTTP GET: ${error}`);
  }
}

export const getStoryRequest = async (url: string, params: StoryPromptParams): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.post(url, params);
    return response.data;
  }
  catch (error) {
    throw new Error(`Erro ao fazer HTTP GET: ${error}`);
  }
}

export const submitForm = async (imageParams: ImagePromptParams, storyParams: StoryPromptParams): Promise<AiAPIResponse | any> => {
  try {
    const storyResponseData = await getStoryRequest(`${rootUri}/ai-stories`, storyParams);
    const imageResponseData = await getImageRequest(`${rootUri}/ai-images`, imageParams);

    console.log('Dados da resposta:', storyResponseData, imageResponseData);

    if (storyResponseData.story && imageResponseData.url) {
      return {
        imageUrl: imageResponseData.url,
        story: storyResponseData.story,
      } as AiAPIResponse;
    }
    else {
      throw new Error('Dados de resposta inválidos');
    }
  }
  catch (error) {
    console.error(error);
    throw new Error('Ocorreu um erro ao processar a solicitação');
  }
};
