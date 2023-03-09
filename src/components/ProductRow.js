export default function ProductRow({ product }) { 
    const { name , price, stocked } = product;
    
    return (
        <tr>
            <td style={{color: !stocked ? 'purple' : 'initial'}}>{name}</td> 
            <td>{price}</td>
        </tr>
    );
}