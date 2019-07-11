import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Linking,
} from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import BookAttribute from '@/components/BookAttribute';

const propTypes = {
  item: PropTypes.object,
};

const BookPreview = ({ item }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1 }}>
        <View style={styles.infoContainer}>
          <Image
            source={{
              uri: `http://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=2`,
            }}
            style={styles.thumbnail}
            resizeMode="cover"
          />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.authors}>
              {item.authors.reduce(
                (str, name, index) =>
                  index !== item.authors.length - 1
                    ? str.concat(name + ', ')
                    : str.concat(name),
                ''
              )}
            </Text>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.attributesWrapper}>
            <View style={styles.attributesBox}>
              <BookAttribute name="Pages" value={item.pageCount} />
              <BookAttribute name="Categories" value={item.categories} />
              <BookAttribute name="Language" value={item.language} />
              <BookAttribute name="Published Date" value={item.publishedDate} />
              <BookAttribute name="Publisher" value={item.publisher} />
            </View>
          </View>
          <View style={styles.footerContainer}>
            <Button
              style={{
                ...styles.footerButton,
                backgroundColor: '#2e86de',
              }}
            >
              <Icon name="ios-chatbubbles" color="#fff" size={25} />
              <Text style={styles.footerButtonText}>Reviews</Text>
            </Button>
            <Button
              style={{
                ...styles.footerButton,
                backgroundColor: '#d63031',
              }}
              onPress={() =>
                Linking.openURL(
                  `https://play.google.com/store/books/details?id=${item.id}`
                )
              }
            >
              <Icon name="md-appstore" color="#fff" size={25} />
              <Text style={styles.footerButtonText}>Buy Online</Text>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

BookPreview.propTypes = propTypes;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  infoContainer: {
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: 180,
    height: 280,
    alignSelf: 'center',
    marginTop: 30,
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  authors: {
    fontWeight: 'bold',
    color: '#7f8c8d',
    fontSize: 15,
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 30,
  },
  description: {
    paddingHorizontal: 25,
    fontSize: 15,
  },
  attributesWrapper: {
    paddingHorizontal: 25,
    paddingVertical: 50,
  },
  attributesBox: {
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#fff',
    borderColor: '#dfe4ea',
    padding: 20,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 25,
  },
  footerButton: {
    flex: 1,
    backgroundColor: '#2e86de',
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginHorizontal: 5,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default BookPreview;