/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
  title2: string;
  with2: boolean;
}>;

function Section({children, title, title2, with2}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
        <Text style={[styles.highlight]}>{title2}</Text>
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            width: with2 ? 200 : 300,
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={styles.rowContainer}>
            <Section title="Hello i'm" title2=" Vu Manh Tu" with2>
              Tôi là{' '}
              <Text style={styles.highlightDescription}>developer mobile </Text>
              welcome to the app me.
            </Section>
            <Image source={require('./image/aeon.jpeg')} style={styles.image} />
          </View>
          <Section title="I come from" title2=" Tuyen Quang" with2={true}>
            <Text>I love here</Text>
          </Section>
          <Section title="favorite sayings" title2="" with2={false}>
            <Text style={(styles.highlightDescription, {color: '#f0f'})}>
              Genius is one percent inspiration and ninety-nine percent
              perspiration.
            </Text>
          </Section>
          <Section title="Learn More" title2="" with2={false}>
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row', // Set flexDirection to 'row' for horizontal layout
    justifyContent: 'center', // Center items horizontally within the row
    alignItems: 'center', // Center items vertically within the row
    height: 100, // Set a fixed height for the row
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    width: 250,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    width: 200,
  },
  highlight: {
    fontWeight: '600',
    color: '#8DEEEE',
  },
  highlightDescription: {
    fontWeight: '700',
    color: '#FF0000',
  },
  image: {
    top: 40,
    right: 20,
    width: 100,
    height: 150,
    resizeMode: 'contain',
  },
});

export default App;
