import {useState} from 'react'
import {MainContainer, Container, Heading, Image} from './styledComponents'

const ReadMore = ({reactHooksDescription}) => {
  const [show, setShow] = useState(false)
  const handleBtn = () => {
    setShow(prevState => !prevState)
  }

  const displayText = show
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  return (
    <MainContainer>
      <Container>
        <Heading>React Hooks</Heading>
        <p>Hooks are a new addition to React</p>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <p>{displayText}</p>
        <button onClick={handleBtn} type="button">
          {show ? 'Read Less' : 'Read More'}
        </button>
      </Container>
    </MainContainer>
  )
}
export default ReadMore
