import { FC, useState } from 'react'
import './index.scss'

const LearnEnglishTab: FC = () => {
  const [content, setContent] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi vel modi? Fugit illo excepturi aut voluptate perferendis cum ullam eveniet veritatis laborum, modi, id non, quod repellendus nemo quam.'
  )

  const removeContent = () => {
    setContent('')
  }

  return (
    <>
      <div className='learnTab'>
        <div className='showTable'>{content}</div>
        <div className='controllGroup'>
          <div className='changeSpeed'>changeSpeed</div>
          <button>Pause</button>
          <button onClick={removeContent}>Play</button>
        </div>
      </div>
    </>
  )
}

export default LearnEnglishTab
