import React, { FC, useEffect } from 'react';
import { Animated, View, Image, Easing } from 'react-native';
import styles from './Spinner.styles';
import GM from '../assets/GM.png';

const Spinner: FC = () => {
  const animatedValue = new Animated.Value(0);

  const bounce = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.8, 1.2, 0.8],
  });

  const animate = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 0.7,
      duration: 1500,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => animate());
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ scale: bounce }],
        }}>
        <Image style={styles.image} source={GM} />
      </Animated.View>
    </View>
  );
};

export default Spinner;
