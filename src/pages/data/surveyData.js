const SURVEY_DATA = [
  {
    id: 1,
    type: 'gender',
    title: '당신의 성별을 알려주세요.',
    question: ['남', '여'],
  },
  {
    id: 2,
    type: 'stack',
    title: '당신의 스텍을 알려주세요',
    question: ['프론트 엔드', '백 엔드'],
  },
  {
    id: 3,
    type: 'mbti',
    title: 'MBTI는?',
    question: [
      'INTJ',
      'INTP',
      'INFJ',
      'INFP',
      'ISTJ',
      'ISFJ',
      'ISTP',
      'ENTJ',
      'ENTP',
      'ENFJ',
      'ENFP',
      'ESTJ',
      'ESFJ',
    ],
  },
  {
    id: 4,
    type: '',
    title: '선호하는 술 종류를 알려주세요!',
    question: [
      '소주',
      '맥주',
      '와인',
      '사케',
      '막걸리',
      '위스키',
      '데킬라',
      '진',
      '보드카',
      '무알콜',
    ],
  },
  {
    id: 5,
    type: '',
    title: '선호하는 술 종류를 알려주세요!',
    question: ['끝이다'],
  },
];

export default SURVEY_DATA;
