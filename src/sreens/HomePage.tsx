import { View, Text, Image } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-reanimated-carousel';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const HomePage = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <Header />
      <CarouselComponent />
      <HomeButtons />
      <View
        style={{
          flex: 1,
          margin: '5%',
          justifyContent: 'flex-end',
        }}
      >
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            marginBottom: '5%',
            fontWeight: 'bold',
          }}
        >
          We serve you the best food. Please visit
          <Text
            style={{
              color: '#0001FF',
              textAlign: 'center',
              marginBottom: '5%',
            }}
          >
            {' '}
            PizzaShop.lk{' '}
          </Text>{' '}
          to see more details about our products
        </Text>
      </View>
    </View>
  );
};

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: '5%',
        alignItems: 'center',
        marginBottom: 20,
      }}
    >
      <Image
        style={{
          width: 40,
          height: 40,
          borderRadius: 100,
        }}
        source={require('../../assets/img/logo.png')}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Lobster-Regular',
            color: 'black',
          }}
        >
          PizzaShop
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
            marginTop: -5,
          }}
        >
          Best Pizza in Anywhere
        </Text>
      </View>
      <View
        style={{
          height: 40,
          width: 40,
        }}
      >
        <Ionicons size={35} name="notifications" />
      </View>
    </View>
  );
};

const CarouselComponent = () => {
  const { width } = useWindowDimensions();
  const imgs: any[] = [
    require('../../assets/img/img1.png'),
    require('../../assets/img/img2.png'),
    require('../../assets/img/img3.png'),
  ];
  return (
    <Carousel
      loop
      autoPlay
      width={width}
      height={width / 2}
      data={imgs}
      autoPlayInterval={3000}
      onSnapToItem={index => console.log('current index:', index)}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <Image
            source={item}
            style={{
              width: width - 40,
              height: width / 2 - 20,
              borderRadius: 5,
              resizeMode: 'cover',
            }}
          />
        </View>
      )}
    />
  );
};

type Props = {
  img: any;
  text: string;
};

const MenuButton = (p: Props) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<any>();

  const routeMap: Record<string, string> = {
    'Newaly added': 'NewlyAdded',
    'Pizza Menu': 'PizzaMenu',
    Favorite: 'Favorite',
    'Food and beverage': 'FoodBeverage',
    Settings: 'Settings',
  };

  function onPress() {
    const key = p.text;
    const route = routeMap[key] || 'Item';
    navigation.navigate(route);
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        style={{
          height: width / 3.6,
          width: width / 3.6,
          backgroundColor: p.text ? '#F4F4F4' : 'transparent',
          padding: '2%',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {p.text && (
          <Image
            style={{ width: '60%', height: '60%', alignSelf: 'center' }}
            source={p.img}
          />
        )}
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 11,
            marginTop: 7,
          }}
        >
          {p.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeButtons = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginHorizontal: 5,
          marginTop: 20,
        }}
      >
        <MenuButton
          img={require('../../assets/img/newly-added.png')}
          text="Newaly added"
        />
        <MenuButton
          img={require('../../assets/img/pizza-menu.png')}
          text="Pizza Menu"
        />
        <MenuButton
          img={require('../../assets/img/favorite.png')}
          text="Favorite"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginHorizontal: 5,
          marginTop: 10,
        }}
      >
        <MenuButton
          img={require('../../assets/img/food&beverage.png')}
          text="Food and beverage"
        />
        <MenuButton
          img={require('../../assets/img/settings.png')}
          text="Settings"
        />
        <MenuButton img={require('../../assets/img/logo.png')} text={''} />
      </View>
    </View>
  );
};

export default HomePage;
