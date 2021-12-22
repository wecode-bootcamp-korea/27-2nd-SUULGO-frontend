import React from 'react';
import styled from 'styled-components';
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

function Icon() {
  return (
    <div>
      <IconContainer>
        <IconList>
          <IconAlcoholBox>
            <SojuIcon />
            <ItemName>소주</ItemName>
          </IconAlcoholBox>

          <IconAlcoholBox>
            <BeerIcon />
            <ItemName>맥주</ItemName>
          </IconAlcoholBox>

          <IconAlcoholBox>
            <WineIcon />
            <ItemName>와인</ItemName>
          </IconAlcoholBox>

          <IconAlcoholBox>
            <SakeIcon />
            <ItemName>사케</ItemName>
          </IconAlcoholBox>

          <IconAlcoholBox>
            <RiceBeer />
            <ItemName>막걸리</ItemName>
          </IconAlcoholBox>
        </IconList>

        <IconOtherList>
          <IconAlcoholBox>
            <Wiskey />
            <ItemName>위스키</ItemName>
          </IconAlcoholBox>

          <IconAlcoholBox>
            <HighAlCoholIcon />
            <ItemName>데킬라</ItemName>
          </IconAlcoholBox>

          <IconAlcoholBox>
            <JinIcon />
            <ItemName>진</ItemName>
          </IconAlcoholBox>

          <IconAlcoholBox>
            <VodkaIcon />
            <ItemName>보드카</ItemName>
          </IconAlcoholBox>

          <IconAlcoholBox>
            <NoneAcoholIcon />
            <ItemName>무알콜</ItemName>
          </IconAlcoholBox>
        </IconOtherList>
      </IconContainer>
    </div>
  );
}

const IconContainer = styled.div`
  margin-top: 100px;
`;

const IconList = styled.ul`
  display: flex;
`;

const IconOtherList = styled.ul`
  display: flex;
`;

const IconAlcoholBox = styled.li`
  align-items: center;
  cursor: pointer;
`;

const ItemName = styled.p`
  padding-top: 15px;
  padding-bottom: 20px;
  text-align: center;
  color: black;
  font-weight: 600;
  font-size: 13px;
`;

const SojuIcon = styled(FaWineBottle)`
  margin: 30px 30px 10px 20px;
  color: ${({ theme }) => theme.mint};
  font-size: 40px;
`;

const BeerIcon = styled(GiBeerStein)`
  margin: 30px 30px 10px 30px;
  color: ${({ theme }) => theme.mint};
  font-size: 40px;
`;

const WineIcon = styled(FaWineGlassAlt)`
  margin: 30px 30px 10px 30px;
  color: ${({ theme }) => theme.mint};
  font-size: 40px;
`;

const SakeIcon = styled(CgGlassAlt)`
  margin: 30px 30px 10px 30px;
  color: ${({ theme }) => theme.mint};
  font-size: 40px;
`;

const RiceBeer = styled(ImMug)`
  margin: 30px 30px 10px 30px;
  color: ${({ theme }) => theme.mint};
  font-size: 40px;
`;

const Wiskey = styled(FaGlassWhiskey)`
  margin: 30px 30px 10px 20px;
  color: ${({ theme }) => theme.mint};
  font-size: 40px;
`;

const HighAlCoholIcon = styled(ImGlass2)`
  margin: 30px 30px 10px 30px;
  color: ${({ theme }) => theme.mint};
  font-size: 40px;
`;

const JinIcon = styled(ImGlass)`
  margin: 30px 30px 10px 30px;
  color: ${({ theme }) => theme.mint};
  font-size: 40px;
`;

const VodkaIcon = styled(FaPrescriptionBottleAlt)`
  margin: 30px 30px 10px 30px;
  color: ${({ theme }) => theme.mint};
  font-size: 40px;
`;

const NoneAcoholIcon = styled(GiHeartBottle)`
  margin: 30px 30px 10px 30px;
  color: ${({ theme }) => theme.mint};
  font-size: 40px;
`;

export default Icon;
