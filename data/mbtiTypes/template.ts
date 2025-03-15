import { MBTIType } from './index';

const TYPE_CODE: MBTIType = {
  type: 'TYPE_CODE_UPPER',
  name: 'TYPE_NAME',
  description: 'TYPE_DESCRIPTION',
  group: 'TYPE_GROUP',
  groupName: 'TYPE_GROUP_NAME',
  traits: {
    extraversion: 50,
    sensing: 50,
    thinking: 50,
    judging: 50
  },
  fullDescription: 'TYPE_FULL_DESCRIPTION',
  characteristics: [
    {
      title: 'CHARACTERISTIC_TITLE',
      description: 'CHARACTERISTIC_DESCRIPTION'
    }
    // 可以添加更多特征
  ],
  strengths: [
    'STRENGTH_1',
    'STRENGTH_2'
    // 可以添加更多优势
  ],
  weaknesses: [
    'WEAKNESS_1',
    'WEAKNESS_2'
    // 可以添加更多劣势
  ],
  careers: [
    {
      category: 'CAREER_CATEGORY',
      jobs: ['JOB_1', 'JOB_2']
    }
    // 可以添加更多职业类别
  ],
  relationships: {
    strengths: [
      'RELATIONSHIP_STRENGTH_1',
      'RELATIONSHIP_STRENGTH_2'
    ],
    challenges: [
      'RELATIONSHIP_CHALLENGE_1',
      'RELATIONSHIP_CHALLENGE_2'
    ],
    compatibleTypes: [
      {
        type: 'COMPATIBLE_TYPE_CODE',
        name: 'COMPATIBLE_TYPE_NAME',
        compatibility: 'medium',
        description: 'COMPATIBILITY_DESCRIPTION'
      }
      // 可以添加更多兼容类型
    ],
    communicationTips: [
      'COMMUNICATION_TIP_1',
      'COMMUNICATION_TIP_2'
    ]
  }
};

export default TYPE_CODE;