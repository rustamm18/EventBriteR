import React from 'react'
import { Row, Col } from 'react-bootstrap'
import events from '../events'
import Event from '../components/Event'


const HomeScreen = () => {
  return (
  <>
    <h1>Latest Events</h1>
    <Row>
      {events.map((variablenameshittyconfusingbutmeansadesireditem) => (
        <Col sm={12} md={6} lg={4} xl={3}>
          <Event product={variablenameshittyconfusingbutmeansadesireditem} />
          </Col>
      ))}
    </Row>
    </>
  )
}

export default HomeScreen