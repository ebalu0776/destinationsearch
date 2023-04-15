import './index.css'

const DestinationSearch = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="list-container">
      <div>
        <img src={imgUrl} alt={imgUrl} className="temple-details" />
        <div>
          <paragraph className="p">{name}</paragraph>
        </div>
      </div>
    </li>
  )
}
export default DestinationSearch
