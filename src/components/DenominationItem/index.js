const DenominationItem = props => {
  const {details, minusAmount} = props
  const {value} = details
  const onDelete = () => {
    minusAmount(value)
  }
  return (
    <li className="li">
      <button type="button" className="button" onClick={onDelete}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
