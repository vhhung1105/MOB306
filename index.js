import { FlatList, Text, StyleSheet } from "react-native";

export default function ProductList(props) {
    const ProductList = [
        { id: 1, name: 'Nguyen Van A', price: 'PH12345' },
        { id: 2, name: 'Nguyen Van B', price: 'PH12345' },
        { id: 3, name: 'Nguyen Van C', price: 'PH12345' },
        { id: 4, name: 'Nguyen Van D', price: 'PH12345' },
        { id: 5, name: 'Nguyen Van E', price: 'PH12345' }
    ];

    return ( <
        FlatList data = { ProductList }
        //item la giao dien tra ve sau moi vong lap
        renderItem = {
            ({ item }) => ( <
                >
                <
                Text > Ho ten: { item.name } < /Text> <
                Text > MSV: { item.price } < /Text> < /
                >
            )
        }
        //key la gia tri duy nhat tra ve sau moi vong lap
        keyExtractor = {
            (item) => item.id
        }
        />
    )

}