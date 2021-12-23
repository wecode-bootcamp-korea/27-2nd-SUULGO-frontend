import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RequestModal from '../../components/RequestModal/RequestModal';
import MatchTagWrapper from '../../components/MatchTagWrapper/MatchTagWrapper';
import API from '../../config';
import styled from 'styled-components';

function Detail() {
  const aboutRef = useRef(null);
  const goToInfo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tagRef = useRef(null);
  const goToTag = () => {
    tagRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [userData, setUserData] = useState({});

  const { id } = useParams();
  useEffect(() => {
    fetch(`${API.users}/${id}`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(data => setUserData(data.result));
  }, [id]);

  const {
    text_name,
    profile_image_url,
    text_gender,
    text_mbti_title,
    text_mbti_description,
    text_class_number,
    text_stack,
    text_comment,
    text_favorite_place,
    text_favorite_food,
    text_favorite_hobby,
  } = userData;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="detail">
      {userData && (
        <Container>
          <ProfileSection>
            <ProfileOverview>
              <Thumbnail>
                <img src={profile_image_url} alt="내 사진" />
              </Thumbnail>
              <InfoOverview>
                <UserName>{text_name}</UserName>
                <UserGender>{text_gender}</UserGender>
                <YearFrontBack>
                  <span>
                    {text_class_number === 1004
                      ? '사랑하는 멘토님^^'
                      : `${text_class_number}기`}
                  </span>
                  <span>/</span>
                  <span>{text_stack}</span>
                </YearFrontBack>
              </InfoOverview>
            </ProfileOverview>
            <StickyNav>
              <NavElement onClick={goToInfo}>위코더 정보</NavElement>
              <NavElement onClick={goToTag}>관심 태그</NavElement>
            </StickyNav>
            <section ref={aboutRef}>
              <IntroduceWrapper>
                <IntroTitle>나에게 술이란 ?</IntroTitle>
                <OneLineIntro>" {text_comment} "</OneLineIntro>
              </IntroduceWrapper>
              <ProfileInfo>
                <InfoWrapper>
                  <Info>{text_mbti_title}</Info>
                  <Info>{text_mbti_description}</Info>
                </InfoWrapper>
                <InfoWrapper>
                  <Info>선호 장소</Info>
                  <Info>{text_favorite_place}</Info>
                </InfoWrapper>
                <InfoWrapper>
                  <Info>취미</Info>
                  <Info>{text_favorite_hobby}</Info>
                </InfoWrapper>
                <InfoWrapper>
                  <Info>선호 안주</Info>
                  <Info ref={tagRef}>{text_favorite_food}</Info>
                </InfoWrapper>
              </ProfileInfo>
            </section>
            <MatchTagContainer>
              <MatchTagWrapper userData={userData} />
            </MatchTagContainer>
          </ProfileSection>
          <AsideSection>
            <UserProfileAside>
              <RequestBanner>
                <RequestText>
                  코드치다가 지친 USER 님! <br /> {userData.text_name} 님과
                  코드말고 술잔 부딪치시는 건 어떠세요 ?
                </RequestText>
                <RequestBtn onClick={openModal}>술고!</RequestBtn>
              </RequestBanner>
            </UserProfileAside>
          </AsideSection>
          <RequestModal
            isOpen={isModalOpen}
            close={closeModal}
            id={userData.id}
          />
        </Container>
      )}
    </div>
  );
}

export default Detail;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: 73.125rem;
  background-color: #fff;
`;

const ProfileSection = styled.div`
  flex: 1 1 auto;
  max-width: 42rem;
`;

const ProfileOverview = styled.section`
  display: flex;
  padding: 2rem 0;
  width: 100%;
`;

const Thumbnail = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  margin-right: 1.5625rem;
  border-radius: 0.75rem;
  overflow: hidden;
`;

const InfoOverview = styled.div`
  max-width: 40.625rem;
  padding-top: 0.625rem;
`;

const UserName = styled.h1`
  margin-bottom: 0.125rem;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2.5625rem;
  letter-spacing: -0.6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const UserGender = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: -0.3px;
  color: #737373;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const YearFrontBack = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.375rem;
  font-size: 1rem;
  font-weight: 600;
  gap: 4px;
  color: #737373;
`;

const StickyNav = styled.ul`
  position: sticky;
  top: 80px;
  display: block;
  margin: 0;
  border-bottom: 0.0625rem solid #f2f2f2;
  font-size: 0.75rem;
  background-color: #fff;
  z-index: 2;
`;

const NavElement = styled.li`
  display: inline-block;
  margin-right: 1.25rem;
  padding: 0.75rem 0;
  font-weight: 700;
  font-size: 1rem;
  color: #737373;
  cursor: pointer;
`;

const IntroduceWrapper = styled.div`
  display: inline-block;
  width: 100%;
  padding: 3.125rem 0 1.5625rem;
  border-bottom: 0.0625rem solid #f2f2f2;
  font-size: 1rem;
`;

const IntroTitle = styled.h2`
  margin-bottom: 0.875rem;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: -0.03125rem;
  color: #323232;
`;

const OneLineIntro = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #323232;
`;

const ProfileInfo = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.0625rem solid #f2f2f2;
  padding: 3rem 0;
`;

const InfoWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  padding: 1.5625rem 0;
  border: 1px solid #00c7ae;
  border-radius: 1rem;
`;

const Info = styled.div`
  text-align: center;
  margin: 10px;
  font-size: 1.2rem;
  font-weight: 600;
`;

const MatchTagContainer = styled.section`
  padding: 3rem 0;
  border-bottom: 0.0625rem solid #f2f2f2;
`;

const AsideSection = styled.div`
  flex: 1 1 auto;
  max-width: 18.625rem;
  padding-left: 2.25rem;
`;

const UserProfileAside = styled.aside`
  height: 100%;
  padding: 2rem 0;
`;

const RequestBanner = styled.div`
  position: sticky;
  top: calc(2rem + 72px);
  padding: 1.25rem;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
`;

const RequestText = styled.div`
  margin-bottom: 1rem;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.63;
  letter-spacing: -0.3px;
  word-break: break-word;
  color: #323232;
`;

const RequestBtn = styled.button`
  display: inline-block;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  padding: 0.6875rem 0.75rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #fff;
  background-color: #00c7ae;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
`;
