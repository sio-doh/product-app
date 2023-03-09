export function SearchBar(props) {
    const { filterText, stocked, setFilterText, setStocked } = props; 
    const handleFilterTextChange = (e) => { setFilterText(e.target.value) };
    const handleStockChange = (e) => { setStocked(e.target.value) };

    return (
        <form>
            <input type='text' placeholder='Search...' value={filterText} onChange={handleFilterTextChange} required/> 
            <label>
                <input type='checkbox' checked={stocked} onChange={handleStockChange} /> 
                Only show products in stock
            </label>
        </form>
    );
}