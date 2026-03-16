import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { HOTELS, getHotelById } from '@/constants/hotels';

export default function HotelDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();
  const hotelId = typeof params.id === 'string' ? params.id : '';
  const hotel = getHotelById(hotelId);

  if (!hotel) {
    return (
      <View style={styles.emptyWrap}>
        <ThemedText type="title" style={styles.emptyTitle}>
          Hotel not found
        </ThemedText>
        <ThemedText style={styles.emptyText}>Please go back and choose another hotel.</ThemedText>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <ThemedText type="defaultSemiBold" style={styles.backButtonText}>
            Go Back
          </ThemedText>
        </Pressable>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: hotel.name }} />
      <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: hotel.image }} style={styles.coverImage} />

        <View style={styles.headerRow}>
          <ThemedText type="title" style={styles.name}>
            {hotel.name}
          </ThemedText>
          <ThemedText style={styles.location}>{hotel.location}</ThemedText>
        </View>

        <View style={styles.summaryRow}>
          <View style={styles.infoPill}>
            <ThemedText style={styles.infoLabel}>Stay</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.infoValue}>
              {hotel.nights}
            </ThemedText>
          </View>
          <View style={styles.infoPill}>
            <ThemedText style={styles.infoLabel}>Max Guests</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.infoValue}>
              {hotel.maxGuests} People
            </ThemedText>
          </View>
        </View>

        <View style={styles.metaCard}>
          <View style={styles.metaRow}>
            <ThemedText style={styles.metaLabel}>Room Type</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.metaValue}>
              {hotel.roomType}
            </ThemedText>
          </View>
          <View style={styles.metaRow}>
            <ThemedText style={styles.metaLabel}>Check In</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.metaValue}>
              {hotel.checkIn}
            </ThemedText>
          </View>
          <View style={styles.metaRow}>
            <ThemedText style={styles.metaLabel}>Check Out</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.metaValue}>
              {hotel.checkOut}
            </ThemedText>
          </View>
          <View style={styles.metaRow}>
            <ThemedText style={styles.metaLabel}>From</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.price}>
              {hotel.price}
            </ThemedText>
          </View>
        </View>

        <ThemedText style={styles.sectionHeading}>About this hotel</ThemedText>
        <ThemedText style={styles.description}>{hotel.description}</ThemedText>

        <ThemedText style={styles.sectionHeading}>Gallery</ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.galleryRow}>
          {hotel.gallery.map((imageUrl, index) => (
            <Image key={`${hotel.id}-${index}`} source={{ uri: imageUrl }} style={styles.galleryImage} />
          ))}
        </ScrollView>

        <ThemedText style={styles.sectionHeading}>Amenities</ThemedText>
        <View style={styles.amenitiesList}>
          {hotel.amenities.map((item) => (
            <View key={item} style={styles.amenityPill}>
              <ThemedText style={styles.amenityText}>{item}</ThemedText>
            </View>
          ))}
        </View>

        <Pressable style={styles.ctaButton} onPress={() => router.push('/(tabs)/explore')}>
          <ThemedText type="defaultSemiBold" style={styles.ctaText}>
            Continue to Booking
          </ThemedText>
        </Pressable>
      </ScrollView>
    </>
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
  coverImage: {
    width: '100%',
    height: 260,
  },
  headerRow: {
    paddingHorizontal: 18,
    paddingTop: 14,
  },
  name: {
    color: '#111111',
    fontSize: 34,
    lineHeight: 40,
  },
  location: {
    marginTop: 2,
    color: '#5d5d5d',
    fontSize: 18,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 18,
    paddingTop: 14,
  },
  infoPill: {
    flex: 1,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
  },
  infoLabel: {
    color: '#7a7a7a',
    fontSize: 14,
  },
  infoValue: {
    marginTop: 4,
    color: '#121212',
    fontSize: 16,
  },
  metaCard: {
    marginHorizontal: 18,
    marginTop: 14,
    borderRadius: 16,
    padding: 14,
    backgroundColor: '#ffffff',
    gap: 8,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaLabel: {
    color: '#666666',
    fontSize: 16,
  },
  metaValue: {
    color: '#181818',
    fontSize: 16,
  },
  price: {
    color: '#e30016',
    fontSize: 17,
  },
  sectionHeading: {
    marginTop: 18,
    marginBottom: 8,
    paddingHorizontal: 18,
    color: '#131313',
    fontSize: 26,
    fontWeight: '700',
  },
  description: {
    paddingHorizontal: 18,
    color: '#2f2f2f',
    fontSize: 16,
    lineHeight: 24,
  },
  galleryRow: {
    paddingLeft: 18,
    paddingRight: 10,
    gap: 10,
  },
  galleryImage: {
    width: 220,
    height: 150,
    borderRadius: 14,
  },
  amenitiesList: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  amenityPill: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: '#e9edf5',
  },
  amenityText: {
    color: '#263243',
    fontSize: 14,
  },
  ctaButton: {
    marginHorizontal: 18,
    marginTop: 22,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 14,
    backgroundColor: '#e30016',
  },
  ctaText: {
    color: '#ffffff',
    fontSize: 17,
  },
  emptyWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#f4f5f7',
  },
  emptyTitle: {
    fontSize: 30,
    lineHeight: 34,
    color: '#111111',
  },
  emptyText: {
    marginTop: 8,
    color: '#4c4c4c',
    fontSize: 16,
    textAlign: 'center',
  },
  backButton: {
    marginTop: 14,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '#111827',
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
