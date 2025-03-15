// MBTI类型定义
export type MBTIType = {
  type: string;
  name: string;
  description: string;
  group: string;
  groupName: string;
  traits: {
    extraversion: number;
    sensing: number;
    thinking: number;
    judging: number;
  };
  fullDescription: string;
  characteristics: Array<{
    title: string;
    description: string;
  }>;
  strengths: string[];
  weaknesses: string[];
  careers: Array<{
    category: string;
    jobs: string[];
  }>;
  relationships: {
    strengths: string[];
    challenges: string[];
    compatibleTypes: Array<{
      type: string;
      name: string;
      compatibility: string;
      description: string;
    }>;
    communicationTips: string[];
  };
}; 