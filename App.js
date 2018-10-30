import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            backgroundColor: '#f853bc',
            borderRadius: 96,
            flex: 1,
            height: 340,
            left: 0,
            position: 'absolute',
            top: 0,
            transform: [
              { rotate: '45deg' },
              { translateX: -65 },
              { translateY: -35 }
            ],
            width: 340,
          }}
        />
        <FlatList
          data={[
            {
              color: '#4c9ef2',
              icon: 'grid',
              key: 'General',
            }, {
              color: '#824afe',
              icon: 'navigation-2',
              key: 'Transport',
            }, {
              color: '#f83bde',
              icon: 'shopping-cart',
              key: 'Shopping',
            }, {
              color: '#f79456',
              icon: 'file-text',
              key: 'Bills',
            }, {
              color: '#5b6dfe',
              icon: 'tv',
              key: 'Entertainment',
            }, {
              color: '#4ae060',
              icon: 'box',
              key: 'Grocery',
            },
          ]}
          numColumns={2}
          renderItem={({item}) => (
            <View key={item.key} style={styles.item}>
              <View 
                style={{ 
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: item.color,
                  borderRadius: 100,
                  height: 64,
                  width: 64,
                }}
              >
                <Icon name={item.icon} size={24} color="#fff" />
              </View>
              <Text 
                style={{ 
                  color: item.color,
                  fontSize: 14, 
                  fontWeight: 'normal',
                  marginTop: 24 
                }}
              >
                {item.key}
              </Text>
            </View>
          )}
          style={styles.list}
        />
      </View>
    );
  }
}

class InsightsScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
        <StatusBar barStyle="light-content" />
        <Icon name="bar-chart-2" size={64} color="#29293b" />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
        <StatusBar barStyle="light-content" />
        <Icon name="user" size={64} color="#29293b" />
      </View>
    );
  }
}

const RootStack = createBottomTabNavigator({
  Home: HomeScreen,
  Insights: InsightsScreen,
  Settings: SettingsScreen,
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `grid`;
      } else if (routeName === 'Insights') {
        iconName = `bar-chart-2`;
      } else if (routeName === 'Settings') {
        iconName = `user`;
      }

      return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#f853bc',
    inactiveTintColor: 'gray',
    showLabel: false,
    style: {
      backgroundColor: '#3b3a56',
      borderTopColor: 'transparent',
    },
  },
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2d2c45',
    flex: 1,
    paddingTop: 22,
  },
  list: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    paddingVertical: 144,
  },
  item: {
    backgroundColor: 'rgba(64, 62, 102, .895)',
    borderRadius: 12,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    padding: 24,
    minHeight: 144,
  },
  itemIconWrapper: {
    borderRadius: 100,
    height: 40,
    width: 40,
  }
});
