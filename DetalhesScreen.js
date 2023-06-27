import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const DetalhesScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: movie.foto }} style={{ width: 200, height: 300, marginBottom: 20 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>{movie.nome}</Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>{`Duração: ${movie.duracao}`}</Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>{`Sinopse: ${movie.sinopse}`}</Text>
      <TouchableOpacity onPress={() => console.log('Abrir trailer')}>
        <Text style={{ fontSize: 18, color: 'blue' }}>Assistir Trailer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Salvar filme')}>
        <Text style={{ fontSize: 18, marginTop: 20 }}>Salvar Filme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetalhesScreen;
