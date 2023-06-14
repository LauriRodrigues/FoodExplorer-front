import { Container } from './styles'
import MinusIcon from '../../assets/minus.svg'
import PlusIcon from '../../assets/plus.svg'
import { useRef } from 'react'

export function QuantitySelector({ setValue = null, value = 0}) {
  const quantityInput = useRef()

  function increment() {
    const value = Number(quantityInput.current.value)
    quantityInput.current.value = value + 1
    if (setValue) setValue(prev => (prev + 1))
  }

  function decrement() {
    const value = Number(quantityInput.current.value)
    if (value > 0) {
      quantityInput.current.value = value - 1
      if (setValue) setValue(prev => (prev - 1))
    }
  }

  return (
    <Container>

      <button onClick={decrement}>
        <img src={MinusIcon}/>
      </button>

      <input 
        type="text" 
        defaultValue={value}  
        ref={quantityInput}
      />

      <button onClick={increment}>
        <img src={PlusIcon} />
      </button>

    </Container>
  )
}