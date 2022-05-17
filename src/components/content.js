import { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Context from '../context/Context'
import './content.css'


function Content() {
  const {
    chosenId,
    setChosenId,
    similarIds,
  } = useContext(Context)


  const imagePreview = () => {
    if (chosenId) {
      return (
      <div id='mainImage'>
        <img  
          className='img-fluid'
          style={{width: 'auto', height: '70vh'}}
          alt={ chosenId } 
          src={`https://myceliademo.blob.core.windows.net/fashion-imgs/images/${chosenId}.jpg`} 
        />
      </div>
      )
    }
  }

  const handleImageSwitch = (id) => {
    setChosenId(id)
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            { imagePreview() }
          </Col>
        </Row>
        <Row>
          { similarIds.map((item) => {
            if (item.id !== chosenId) {
            return (
              <Col 
                md='2'
                key={ item.id } 
              >
                <img
                  onClick={ () => handleImageSwitch(item.id) }
                  style={{width: 'auto', height: '20vh', borderRadius: '100%'}}
                  alt={ item.id } 
                  src={`https://myceliademo.blob.core.windows.net/fashion-imgs/images/${item.id}.jpg`} 
                />
              </Col>
            
            )}
              return ''
          }) 
          } 
        </Row>
      </Container>
    </>
)
  
}

export default Content;