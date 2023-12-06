function Row({product}) {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default Row;