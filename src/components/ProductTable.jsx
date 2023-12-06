import Row from "./Row";


function ProductTable ({filteredProducts}) {



return (
  <div>
   <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          </tr>
        </thead>

        <tbody>
   {filteredProducts.map(p => {
    return (
      <Row key= {p.id} product={p} />
    )

  })}
        </tbody>
      </table>
   
   
   
  </div>
);
}


export default ProductTable;