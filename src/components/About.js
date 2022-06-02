import React from 'react'
import {Card} from 'react-bootstrap';
import about from '../images/about.jpg';

function About() {
  return (
    <div className='hero'>
        <Card className="bg-dark text-white">
  <Card.Img src={about}alt="Card image"  height={"877px"}/>
  <Card.ImgOverlay>
      <div className='about'>
    <Card.Title className='card-tile display-3 fw-bolder mb-0 '>Ramzus Store </Card.Title>
    <p className='card-text lead fs-2'>The Best of the Best</p>
    </div>
  </Card.ImgOverlay>
</Card>
    </div>
  )
}

export default About;