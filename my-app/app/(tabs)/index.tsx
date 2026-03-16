import { useRouter } from 'expo-router';
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { HOTELS } from '@/constants/hotels';

export default function HomeScreen() {
  const router = useRouter();
  const featuredHotels = HOTELS.slice(0, 4);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        }}
        imageStyle={styles.heroImage}
        style={styles.hero}>
        <View style={styles.heroOverlay}>
          <ThemedText type="title" style={styles.heroTitle}>
            FIND YOUR DREAM STAY IN SRI LANKA
          </ThemedText>
        </View>
      </ImageBackground>

      <View style={styles.sectionHeader}>
        <ThemedText type="title" style={styles.sectionTitle}>
          Top Stays
        </ThemedText>
      </View>

      <View style={styles.grid}>
        {featuredHotels.map((hotel) => (
          <Pressable
            key={hotel.id}
            style={styles.card}
            onPress={() => router.push({ pathname: '/hotel/[id]', params: { id: hotel.id } })}>
            <Image source={{ uri: hotel.image }} style={styles.cardImage} />
            <ThemedText type="defaultSemiBold" style={styles.cardName}>
              {hotel.name}
            </ThemedText>
            <ThemedText style={styles.cardLocation}>{hotel.location}</ThemedText>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f5f7',
  },
  content: {
    paddingBottom: 28,
  },
  hero: {
    height: 300,
    justifyContent: 'center',
  },
  heroImage: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  heroOverlay: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 38,
    lineHeight: 46,
    fontWeight: '800',
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginTop: 22,
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#111111',
    fontSize: 44,
    lineHeight: 46,
  },
  grid: {
    paddingHorizontal: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    width: '50%',
    paddingHorizontal: 6,
    marginBottom: 14,
  },
  cardImage: {
    width: '100%',
    height: 170,
    borderRadius: 18,
  },
  cardName: {
    marginTop: 8,
    color: '#101010',
    fontSize: 18,
    lineHeight: 22,
  },
  cardLocation: {
    marginTop: 2,
    color: '#5f5f5f',
    fontSize: 16,
  },
});
