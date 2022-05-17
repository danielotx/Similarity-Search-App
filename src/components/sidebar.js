import { useContext, useEffect } from 'react'
import { Dropdown, DropdownButton, Form, FormControl, InputGroup } from 'react-bootstrap'
import Context from '../context/Context'
import { getAll, getById } from '../service/service'
import './sidebar.css'

function SideBar() {
  const {
    data,
    setData,
    chosenId,
    setChosenId,
    topK,
    setTopK,
    setSimilarIds,
  } = useContext(Context)

  const getData = async () => {
    if (!data.length) {
      const result = await getAll()
      if (result) return setData(result)
    }
  } 
  getData()


  useEffect(() => {
    if (!topK) setTopK(0)
    const getSimilarityData = async () => {
    if (chosenId && topK) {
      const result = await getById(chosenId, (Number(topK) + 1))
      return setSimilarIds(result)
      }
    }
    getSimilarityData()
  }, [topK, chosenId, setSimilarIds, setTopK])



  const handleTopK = (value) => {
    setTopK(value)
    setSimilarIds([])
  }

  const handleInputId = (id) => {
    if (id >= data[0] && id <= data.splice(-1, 1))
    setChosenId(id)
    setSimilarIds([])
    document.getElementById("input-value").value = id
  }


  return (
  <> 
    <div 
      className="flex-shrink-0 p-3 bg-dark" 
      style={{width: 280, height: '100vh', color: 'white'}}
    >
        <h3
        style={{marginBottom: '10vh'  }}
        >Fashion Demo
        </h3>
        <Form.Label>Select an id</Form.Label>
        <InputGroup className="mb-3">
          <FormControl 
            aria-label="Text input with dropdown button"
            id='input-value'
            onChange={ ({ target }) =>  handleInputId(target.value) }
          />
        <DropdownButton
          variant="outline-secondary"
          id="input-group-dropdown-2"
          title=""
          align="end"
        >
          {data.map((item) => {
            return (
              <Dropdown.Item 
                key={ item } 
                onClick={() =>  handleInputId(item)}
                >{ item }
              </Dropdown.Item>
          )})}
        </DropdownButton> 
        </InputGroup>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Top-K Entries</Form.Label>
          <Form.Control 
            type="number" 
            onChange={ ({ target }) =>  handleTopK(target.value) }
          />
        </Form.Group>
      </div>
  </>
  )
}

export default SideBar;
