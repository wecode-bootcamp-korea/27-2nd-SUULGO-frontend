import { FaWineBottle } from 'react-icons/fa';
import { GiBeerStein } from 'react-icons/gi';
import { FaWineGlassAlt } from 'react-icons/fa';
import { CgGlassAlt } from 'react-icons/cg';
import { ImMug } from 'react-icons/im';
import { FaGlassWhiskey } from 'react-icons/fa';
import { ImGlass2 } from 'react-icons/im';
import { ImGlass } from 'react-icons/im';
import { FaPrescriptionBottleAlt } from 'react-icons/fa';
import { GiHeartBottle } from 'react-icons/gi';

const ICONDATA_LIST = [
  {
    id: 1,
    name: '소주',
    icon_name: <FaWineBottle />,
  },
  {
    id: 2,
    name: '맥주',
    icon_name: <GiBeerStein />,
  },
  {
    id: 3,
    name: '와인',
    icon_name: <FaWineGlassAlt />,
  },
  {
    id: 4,
    name: '사케',
    icon_name: <CgGlassAlt />,
  },
  {
    id: 5,
    name: '막걸리',
    icon_name: <ImMug />,
  },
  {
    id: 6,
    name: '위스키',
    icon_name: <FaGlassWhiskey />,
  },
  {
    id: 7,
    name: '데킬라',
    icon_name: <ImGlass2 />,
  },
  {
    id: 8,
    name: '진',
    icon_name: <ImGlass />,
  },
  {
    id: 9,
    name: '보드카',
    icon_name: <FaPrescriptionBottleAlt />,
  },
  {
    id: 10,
    name: '무알콜',
    icon_name: <GiHeartBottle />,
  },
];

export default ICONDATA_LIST;
