import { useRouter } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { HOTELS } from '@/constants/hotels';

export default function BookingScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.headerRow}>
        <ThemedText type="title" style={styles.headerTitle}>
          Book Your Stay
        </ThemedText>
      </View>

      <View style={styles.grid}>
        {HOTELS.map((hotel) => (
          <View key={hotel.id} style={styles.card}>
            <Pressable onPress={() => router.push({ pathname: '/hotel/[id]', params: { id: hotel.id } })}>
              <Image source={{ uri: hotel.image }} style={styles.cardImage} />
              <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
                {hotel.name}
              </ThemedText>
              <ThemedText style={styles.cardSub}>{hotel.location}</ThemedText>
              <ThemedText style={styles.cardSub}>{hotel.nights}</ThemedText>
              <ThemedText style={styles.price}>{hotel.price}</ThemedText>
            </Pressable>

            <Pressable
              style={styles.button}
              onPress={() => router.push({ pathname: '/hotel/[id]', params: { id: hotel.id } })}>
              <ThemedText type="defaultSemiBold" style={styles.buttonText}>
                Book Now
              </ThemedText>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f4f5',
  },
  content: {
    paddingHorizontal: 14,
    paddingBottom: 18,
  },
  headerRow: {
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 14,
  },
  headerTitle: {
    color: '#101010',
    fontSize: 50,
    lineHeight: 56,
  },
  grid: {
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
    marginBottom: 8,
  },
  cardTitle: {
    color: '#161616',
    fontSize: 17,
    lineHeight: 22,
  },
  cardSub: {
    color: '#6b6b6b',
    fontSize: 15,
    lineHeight: 20,
  },
  price: {
    marginTop: 2,
    marginBottom: 6,
    color: '#1c1c1c',
    fontSize: 16,
    fontWeight: '700',
  },
  button: {
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#e30016',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
  },
});
