export function formatCurrency(num) {
    if (num !== undefined) {
        return parseFloat(num)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
    }
}

export function getColletionBySlug(collections, slug) {
    console.log('collect -> ', collections);
    console.log('slug ', slug);
    // if (collections.length > 0) {
    //     console.log('ini collect ', collections);
    //     // const result = collections.find(item => item.slug === slug.toString());
    //     // if (result !== undefined) {
    //     //     return result.products;
    //     // } else {
    //     //     return [];
    //     // }
    // } else {
    //     return [];
    // }
    return collections
}

export function getListOfProductId(products) {
    let queries = [];
    products.forEach(item => {
        queries.push(item.id);
    });
    if (queries.length > 0) {
        return queries
    }
    else {
        return [];
    }
}