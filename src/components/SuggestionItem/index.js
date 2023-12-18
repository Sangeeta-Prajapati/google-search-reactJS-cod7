// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchResult, displaySuggestion} = props
  const {suggestion} = searchResult

  const onClickSuggestion = () => {
    displaySuggestion(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button className="button" type="button" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
