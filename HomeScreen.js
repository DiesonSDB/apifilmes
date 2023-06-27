import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Filmes</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { movie: item })}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Salvos')}>
        <Text style={{ fontSize: 18, marginTop: 20 }}>Filmes Salvos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
