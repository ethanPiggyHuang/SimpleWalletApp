import React from 'react';
import styled from 'styled-components/macro';
import { Skeleton } from './Skeleton';
import { saveToClipboard } from '../utils/common';

interface Props {
  props: {
    title: string;
    datas: {
      name: string;
      value: string;
      unit?: string;
      expandedName?: string;
      expandedValue?: string;
    }[];
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
              <Subtitle key={subtitle}>{subtitle}</Subtitle>
            ))}
          </Subtitles>
        )}
        {datas.map((data, index) => (
          <DataRow key={data.name}>
            <DataText
              expandData={data?.expandedName}
              onClick={() =>
                data?.expandedName && saveToClipboard(data?.expandedName)
              }
            >
              {data.name}
            </DataText>
            {data.value === '' ? (
              <Skeleton isBlock={true} />
            ) : (
              <DataText
                expandData={data?.expandedValue}
                onClick={() =>
                  data?.expandedValue && saveToClipboard(data?.expandedValue)
                }
              >
                {data.value + (data.unit ?? '')}
              </DataText>
            )}
            {subDatas && (
              <>
                <DivisionLine />
                {subDatas[index].map((subData, index) => (
                  <SubDataRow key={index}>
                    <SubDataText>{`${subData.name} `}</SubDataText>
                    {subData.value === '' ? (
                      <Skeleton isBlock={false} />
                    ) : (
                      <SubDataText>{` ${subData.value}`}</SubDataText>
                    )}
                  </SubDataRow>
                ))}
              </>
            )}
          </DataRow>
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
  padding: 44px 34px;
  background-color: #f2f5f7;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    padding: 24px 14px;
  }
`;

const DataRow = styled.div`
  padding: 40px 46px 40px 32px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 18px;
  gap: 6px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 500px) {
    padding: 10px 16px 10px 6px;
  }
`;

interface DataTextProps {
  expandData: string | undefined;
}

const DataText = styled.h2<DataTextProps>`
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;

  &:hover::before {
    content: ${({ expandData }) => `"${expandData}"`};
    border: 2px #f2f5f7 solid;
    position: absolute;
    padding: 8px 10px;
    background-color: #ffffff;
    font-size: 0.6em;
    word-break: keep-all;
    max-width: calc(100vw - 162px);
    z-index: ${({ expandData }) => (expandData ? '2' : '-2')};
    cursor: pointer;
  }
  &:last-child:hover::before {
    right: 0;
    text-align: right;
  }

  @media screen and (max-width: 752px) {
    &:hover::before {
      width: calc(100vw - 268px);
      word-break: break-all;
    }
  }
`;

const DivisionLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #c3cfd9;
  margin: 24px 0 4px;
`;

const SubDataRow = styled.div`
  width: 100%;
  padding-top: 25px;
  @media screen and (max-width: 500px) {
    padding-top: 10px;
  }
`;

const SubDataText = styled.h3`
  line-height: 18px;
  display: inline-flex;
  align-items: center;

  &:first-child {
    margin-right: 6px;
  }
`;
