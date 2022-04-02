import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Event from '../components/Event'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listEvents } from '../actions/eventActions'


const HomeScreen = () => {
  const dispatch = useDispatch()
  const eventList = useSelector((state) => state.
  eventList)
  const {loading, error, events} = eventList
  useEffect(() => {
    dispatch(listEvents())
  }, [dispatch])

    
  return (
  <>
    <h1>Latest Events</h1>
    {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ): (<Row>
    {events.map((variablenameshittyconfusingbutmeansadesireditem) => (
      <Col key={variablenameshittyconfusingbutmeansadesireditem._id} sm={12} md={6} lg={4} xl={3}>
        <Event product={variablenameshittyconfusingbutmeansadesireditem} />
        </Col>
    ))}
  </Row>)}
    
    </>
  )
}

export default HomeScreen