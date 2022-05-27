import React from 'react'
import {Card} from 'react-bootstrap';
import home from '../images/home.webp';

function Home() {
  return (
    <div className='hero'>
        <Card className="bg-dark text-white">
  <Card.Img src={home}alt="Card image"  height={"877px"}/>
  <Card.ImgOverlay>
      <div className='newseason'>
    <Card.Title className='card-tile display-3 fw-bolder mb-0'>New Season Arrivals</Card.Title>
    <p className='card-text lead fs-2'>Check Out All The Trends</p>
    </div>
  </Card.ImgOverlay>
</Card>
    </div>
  )
}

export default Home