const Sort = ({ setSort }) => {

  const handleSort = (e) => {
    e.preventDefault()
      const sort = e.target.value
      setSort(sort)
  };

  return (
    <div>
      <label htmlFor="sort">Sort by price: </label>
        <select id="sort" onChange={handleSort}>
          <option value="">Untidy</option>
          <option value="asc">Min to Max</option>
          <option value="desc">Max to Min</option>
        </select>
    </div>
    )
}

export default Sort;