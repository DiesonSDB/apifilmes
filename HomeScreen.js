import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://sujeitoprogramador.com/r-api/?api=filmes');
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const saveMovie = (movie) => {
    setSavedMovies([...savedMovies, movie]);
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { movie: item })}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Image source={{ uri: item.foto }} style={{ width: 50, height: 70, marginRight: 10 }} />
        <Text style={{ fontSize: 18 }}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Filmes</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovieItem}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Salvos')}>
        <Text style={{ fontSize: 18, marginTop: 20 }}>Filmes Salvos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
