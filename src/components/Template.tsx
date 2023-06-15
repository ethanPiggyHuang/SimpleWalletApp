import React from 'react';
import styled from 'styled-components/macro';
import { Skeleton } from './Skeleton';

interface Props {
  props: {
    title: string;
    datas: { name: string; value: string; unit?: string }[];
    subtitles?: string[];
    subDatas?: { name: string; value: string }[][];
  };
}

export const Template: React.FC<Props> = (props) => {
  const { title, datas, subtitles, subDatas } = props.props;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SectionData>
        {subtitles && (
          <Subtitles>
            {subtitles.map((subtitle) => (
              <Subtitle>{subtitle}</Subtitle>
            ))}
          </Subtitles>
        )}
        {datas.map((data, index) => (
          <>
            <DataRow key={data.name}>
              <DataText>{data.name}</DataText>
              {data.value === '' ? (
                <Skeleton isBlock={true} />
              ) : (
                <DataText>{data.value + (data.unit ?? '')}</DataText>
              )}

              {subDatas && (
                <>
                  <DivisionLine />
                  {subDatas[index].map((subData) => (
                    <SubDataRow>
                      <SubDataText>{subData.name}</SubDataText>
                      {subData.value === '' ? (
                        <Skeleton isBlock={false} />
                      ) : (
                        <SubDataText>{subData.value}</SubDataText>
                      )}
                    </SubDataRow>
                  ))}
                </>
              )}
            </DataRow>
          </>
        ))}
      </SectionData>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  margin: 70px 0 31px;
  text-align: left;
`;

const Subtitles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 46px 0 32px;
  height: 36px;
  transform: translateY(-8px);
`;

const Subtitle = styled.h2`
  text-align: left;
`;

const SectionData = styled.div`
  width: 774px;
  padding: 44px 34px;
  background-color: #f2f5f7;
  display: flex;
  flex-direction: column;
`;

const DataRow = styled.div`
  padding: 0 46px 0 32px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DataText = styled.h2`
  height: 22px;
  margin: 44px 0;
`;

const DivisionLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #c3cfd9;
  transform: translateY(-17px);
`;

const SubDataRow = styled.div`
  width: 100%;
  padding: 4px 0 16px;

  &:last-child {
    padding-bottom: 40px;
  }
`;

const SubDataText = styled.h3`
  display: inline;
  line-height: 18px;
`;
