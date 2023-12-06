



function SearchBar(prop) {

const handleSearch = (event) => {
    const searchTerm = event.target.value;
    console.log(searchTerm)
    prop.filterProducts(searchTerm);
}

const handleCheckbox = (event) => {
  const checked = event.target.checked;
  console.log(checked)
  prop.stockedProducts(checked);
}

return (
  <div>
    <input 
    type="text" placeholder="Search..." onChange={handleSearch}
    >

    </input>
    <label htmlFor="check">
    <input 
    name="check" type="checkbox" onChange={handleCheckbox}
    >
    
    </input>
    Only show products in stock
    </label>
  </div>
);
}

export default SearchBar;