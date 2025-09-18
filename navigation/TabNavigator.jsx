import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { CatalogueScreen } from '../screens/CatalogueScreen';
import { CartScreen } from '../screens/CartScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { COLORS, FONTS, ICONS, ROUTES } from '../utils/constants';

const Tab = createBottomTabNavigator();
const tabs = [
    { name: ROUTES.CATALOGUE, icon: ICONS.CUP, component: CatalogueScreen },
    { name: ROUTES.CART, icon: ICONS.CART, component: CartScreen },
    { name: ROUTES.PROFILE, icon: ICONS.PROFILE, component: ProfileScreen }
];

export function TabNavigator() {
    return (
        <Tab.Navigator id={ROUTES.MAIN_TABS} screenOptions={{
            tabBarActiveTintColor: COLORS.PRIMARY,
            tabBarInactiveTintColor: COLORS.SECONDARY
        }}>
            {tabs.map(({ name, icon, component }) => (
                <Tab.Screen name={name} component={component} options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialDesignIcons
                            name={icon}
                            size={24}
                            color={focused ? COLORS.PRIMARY : COLORS.SECONDARY}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontFamily: FONTS.REGULAR,
                        fontSize: 12
                    }
                }} />
            ))}
        </Tab.Navigator>
    );
}

