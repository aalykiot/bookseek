import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const books = [
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The Queen of hearts',
    author: 'Kimmery Martin',
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The deathly hallow',
    author: 'Kimmery Martin',
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'Jeez for the win',
    author: 'Kimmery Martin',
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The vimpire diaries',
    author: 'Kimmery Martin',
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The Queen of England',
    author: 'Kimmery Martin',
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The Queen of England',
    author: 'Kimmery Martin',
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The Queen of England',
    author: 'Kimmery Martin',
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The Queen of England',
    author: 'Kimmery Martin',
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The Queen of England',
    author: 'Kimmery Martin',
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The Queen of England',
    author: 'Kimmery Martin',
  },
];

const BookCard = ({ data }) => (
  <View
    style={{
      width: '33.3%',
      display: 'flex',
      alignItems: 'center',
      padding: 10,
    }}
  >
    <Image
      source={{ uri: data.thumbnail }}
      style={{ width: '100%', height: 150, borderRadius: 10 }}
      resizeMode="cover"
    />
    <View style={{ marginTop: 10, width: '95%' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 12 }}>{data.title}</Text>
      <Text style={{ color: 'grey', fontSize: 12 }} numberOfLines={1}>
        {data.author}
      </Text>
    </View>
  </View>
);

const Library = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Library</Text>
          <Icon
            name="md-arrow-round-forward"
            style={styles.headerIcon}
            size={35}
            color="#bdc3c7"
          />
        </View>
        {books.length === 0 ? (
          <View style={styles.emptyLibrary}>
            <Icon name="ios-folder-open" color="#ecf0f1" size={150} />
            <Text style={styles.emptyLibraryTitle}>Hmmm,</Text>
            <Text style={styles.emptyLibraryText}>
              looks like your library is empty
            </Text>
          </View>
        ) : (
          <FlatList
            data={[{}]}
            keyExtractor={(_, index) => index.toString()}
            renderItem={() => (
              <View style={styles.libraryContent}>
                {books.map((item, index) => (
                  <BookCard key={index} data={item} />
                ))}
              </View>
            )}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerIcon: {
    position: 'relative',
    top: 5,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  emptyLibrary: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyLibraryTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#bdc3c7',
    marginVertical: 20,
  },
  emptyLibraryText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#bdc3c7',
  },
  libraryContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 5,
  },
});

export default Library;
