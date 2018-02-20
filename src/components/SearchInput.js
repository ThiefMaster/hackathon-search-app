import React from 'react'
// import { connect } from 'react-redux'
// import { searchInput } from '../actions'

let SearchInput = ({ dispatch }) => {
  let searchText;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!searchText.value.trim()) {
            return
          }
          // dispatch(searchInput(searchText.value))
          console.log(`Submitted searched for: ${searchText.value}`)
          searchText.value = ''
        }}
      >
        <input
          ref={node => {
            searchText = node
          }}
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  )
}
// SearchInput = connect()(SearchInput)

export default SearchInput
