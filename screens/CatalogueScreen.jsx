import { ScrollView, StyleSheet } from 'react-native';
import { CatalogueItem } from '../components/CatalogueItem';
import { products } from '../products';

export function CatalogueScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {products.map(({ id, image, title, price }) => (
                <CatalogueItem
                    key={id}
                    image={image}
                    title={title}
                    price={price}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        padding: 8
    }
});