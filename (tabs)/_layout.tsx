import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'


export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'red' ,
        tabBarStyle: {
            backgroundColor: '#fff',
            borderTopColor: 'red',
            borderTopWidth: 1,
            height: 60,
            paddingBottom: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarIconStyle: {
            marginBottom: -3,
          },
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="donate"
                options={{
                    title: 'Donate',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} />,
                }}
            />
            <Tabs.Screen
                name="need"
                options={{
                    title: 'Blood Needed',
                    tabBarIcon: ({ color }) => <MaterialIcons name='water-drop' size={28} color={color} />,
                    headerStyle: {
                        backgroundColor: 'red',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                      headerTitleAlign: 'center',
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}
