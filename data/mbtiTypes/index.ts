// 导入类型定义
import { MBTIType } from './types';

// 导入所有MBTI类型数据
import intj from './intj';
import intp from './intp';
import entj from './entj';
import entp from './entp';
import infj from './infj';
import infp from './infp';
import enfj from './enfj';
import enfp from './enfp';
import istj from './istj';
import isfj from './isfj';
import estj from './estj';
import esfj from './esfj';
import istp from './istp';
import isfp from './isfp';
import estp from './estp';
import esfp from './esfp';

// 创建MBTI类型数据对象
const mbtiTypes = {
  intj,
  intp,
  entj,
  entp,
  infj,
  infp,
  enfj,
  enfp,
  istj,
  isfj,
  estj,
  esfj,
  istp,
  isfp,
  estp,
  esfp
};

export default mbtiTypes;

// 重新导出类型定义，方便其他文件导入
export type { MBTIType }; 