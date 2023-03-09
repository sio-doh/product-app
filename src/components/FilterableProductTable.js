import { SearchBar } from './SearchBar.js';
import { ProductTable } from './ProductTable.js';
import { useState } from 'react';

export function FilterableProductTable() {
    const [filterText, setFilterText] = useState('');
    const [stocked, setStocked] = useState(false);
    
    return (
        <>
            <SearchBar 
                filterText={filterText} 
                stocked={stocked} 
                onFilterTextChange={setFilterText}
                onInStockChange={setStocked}
            />
            <ProductTable 
                filterText={filterText} 
                stocked={stocked} 
            />
        </>
    );
}

