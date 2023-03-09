export default function ProductCategoryRow(props) {
    const { category } = props;
    return (
        <tr>
            <th colSpan='2'>{category}</th>
        </tr>
    );
}