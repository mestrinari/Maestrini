import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Pdf from 'react-native-pdf';


// Dados de exemplo das partituras (pode ser substituído por seus próprios dados)
const partituras = [
  { id: 1, titulo: 'Partitura 1', arquivo: 'assets/PDF/1.pdf' },
  { id: 2, titulo: 'Partitura 2', arquivo: 'assets/PDF/2.pdf' },
];

const [pdfVisible, setPdfVisible] = useState(false);
const abrirPartitura = (arquivo) => {
    setPdfVisible(true);
  };
  

const Partituras = () => {
  // Função para renderizar cada item da lista
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => abrirPartitura(item.arquivo)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.titulo}</Text>
      </View>
    </TouchableOpacity>
  );

  // Função para abrir a partitura (a implementação depende da biblioteca que você estiver usando para visualizar PDFs)
  const abrirPartitura = (arquivo) => {
    // Implementação para abrir o PDF
    // Exemplo: utilizar uma biblioteca como react-native-pdf para visualizar o PDF
  };

  return (
  <View style={styles.container}>
    {pdfVisible ? (
      <Pdf
        source={{ uri: 'path/to/pdf/file' }} // Substitua 'path/to/pdf/file' pelo caminho do arquivo PDF a ser exibido
        style={styles.pdfContainer}
      />
    ) : (
      <FlatList
        data={partituras}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    )}
  </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    marginBottom: 8,
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
};

export default Partituras;
