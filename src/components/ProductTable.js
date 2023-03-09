import { Fragment } from 'react';
import ProductCategoryRow from './ProductCategoryRow.js';
import ProductRow from './ProductRow'; 
import { products } from '../models/products';

function isUniqueCategory(category, categorySet) {
    let isUniqueCategory = !categorySet.has(category);
    categorySet.add(category);
    return isUniqueCategory;
}

function productSucceedFilter(product, filterText, stocked) {
    const isLabelMatch = product.name.toLowerCase().includes(filterText.toLowerCase());
    if (stocked && !product.stocked) 
        return false;
    if (!isLabelMatch) 
        return false; 
    return true;
}

export function ProductTable({ filterText, stocked }) { 
    const categorySet = new Set([]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => {
                    const showProduct = productSucceedFilter(product, filterText, stocked)
                    return (
                        <Fragment key={index}>
                            {isUniqueCategory(product.category, categorySet) && 
                                <ProductCategoryRow category={product.category} />}
                            {showProduct && <ProductRow product={product} />}
                        </Fragment>
                    )
                })}
            </tbody>
        </table>
    );
}