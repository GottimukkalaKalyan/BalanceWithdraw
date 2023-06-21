import './index.css'

const DenominationItem = props => {
  const {makeButton, withDrawFunction} = props
  const {id, value} = makeButton
  const ClickedAmount = () => {
    console.log(id)
    withDrawFunction(parseInt(value))
  }
  return (
    <li className="itemMake">
      <button type="button" className="button" onClick={ClickedAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
