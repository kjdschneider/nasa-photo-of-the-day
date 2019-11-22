import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import styled from 'styled-components';

const CardDiv = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    background: black;
    color: white;
`
const Title = styled.h1`
    font-size: 50px;
`

const InfoSection = styled.div`
    padding: 20px;
    text-align: left;
`

const DisplayAPOD = (props) => {
  return (
    <CardDiv>
      <Card>
        <CardBody className='title'>
          <Title>Astronomy Photo of the Day<br />{props.title}</Title>
          <CardSubtitle className='date'>{props.apodDate}</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={props.url} alt='Astronomy photograph of the day' />
        <InfoSection className='info'>
          <CardText>{props.explanation}</CardText>
            <p>{props.copyright}</p>
        </InfoSection>
      </Card>
    </CardDiv>
  );
};

export default DisplayAPOD;
