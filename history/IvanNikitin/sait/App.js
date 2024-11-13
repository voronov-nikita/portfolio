import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

// Массив с изображениями и их заголовками
const images = [
  { source: require('./assets/test.jpg'), title: 'Работа 1' },
  { source: require('./assets/test.jpg'), title: 'Работа 2' },
  { source: require('./assets/test.jpg'), title: 'Работа 3' },
  { source: require('./assets/test.jpg'), title: 'Работа 4' }
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Заголовок */}
      <View style={styles.header}>
        <Text style={styles.title}>Иван Никитин — Художник XVIII века</Text>
      </View>

      {/* Раздел биографии */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Краткая биография</Text>
        <Text style={styles.text}>
          Иван Никитин (около 1680 — 1742) — российский художник, один из первых русских портретистов XVIII века, чьи работы стали важным этапом в развитии русской портретной живописи. Никитин был мастером, который сумел передать не только внешность своих моделей, но и их внутреннее состояние, что было редкостью для портретной живописи того времени.
        </Text>
        <Text style={styles.text}>
          Родился Иван Никитин в Москве, в семье, которая не имела отношения к искусству, и потому, как и многие художники того времени, он был самобытным самоуком. Несмотря на это, он добился признания в художественных кругах. В юности он познакомился с европейскими мастерами и начал обучаться живописи, изучая технику европейских портретистов.
        </Text>
        <Text style={styles.text}>
          В своей карьере Никитин работал с высокопрофильными личностями того времени, создавая портреты аристократов, чиновников и военных. Он обучался у западноевропейских мастеров, что отразилось на высоком уровне исполнения его работ. Художник использовал передовые техники, такие как реалистичная передача текстур тканей, проработка деталей лиц и фонов, что делало его портреты отличными от традиционных изображений той эпохи.
        </Text>
        <Image 
          source={require('./assets/test.jpg')} 
          style={styles.image}
        />
      </View>

      {/* Галерея работ */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Галерея работ</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {images.map((image, index) => (
            <TouchableOpacity key={index}>
              <Image 
                source={image.source} 
                style={styles.galleryImage} 
                accessibilityLabel={image.title}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Значение для истории */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Значение для современной истории</Text>
        <Text style={styles.text}>
          Вклад Ивана Никитина в развитие российской портретной живописи сложно переоценить. Его работы оказали влияние на весь последующий путь русской живописи, сформировав целый стиль, который затем развивали такие великие художники как Дмитрий Левицкий и Фёдор Рокотов.
        </Text>
        <Text style={styles.text}>
          Никитин был не просто художником — он был создателем нового языка изображения, который позволял изображать не только внешность, но и дух времени. Его портреты стали важными артефактами для историков, поскольку они не только показывают, как выглядели люди той эпохи, но и раскрывают их социальный статус и личные качества.
        </Text>
        <Text style={styles.text}>
          Сегодня работы Ивана Никитина хранятся в крупнейших российских музеях, таких как Государственная Третьяковская галерея в Москве и Русский музей в Санкт-Петербурге. Он считается основателем традиций русского реалистичного портрета, который продолжали развивать последующие поколения художников.
        </Text>
        <Image 
          source={require('./assets/test.jpg')} 
          style={styles.image}
        />
      </View>

      {/* Подвал */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Все права защищены.</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
  },
  header: {
    backgroundColor: '#003366',
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginTop: 15,
  },
  galleryImage: {
    width: 250,
    height: 180,
    borderRadius: 8,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  footer: {
    backgroundColor: '#003366',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});
