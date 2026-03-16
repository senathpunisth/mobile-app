import { Alert, ImageBackground, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function ReviewScreen() {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1542317854-646cf4a0d4a5?auto=format&fit=crop&w=1200&q=80',
      }}
      style={styles.background}
      imageStyle={styles.bgImage}>
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <ThemedText type="title" style={styles.title}>
            Leave a Review!
          </ThemedText>

          <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#e9e9e9" />
          <TextInput style={styles.input} placeholder="example@email.com" placeholderTextColor="#e9e9e9" />
          <TextInput
            style={[styles.input, styles.commentInput]}
            placeholder="Tell us about your stay"
            placeholderTextColor="#e9e9e9"
            multiline
          />

          <ThemedText style={styles.rateTitle}>Rate your stay</ThemedText>

          <View style={styles.rateRow}>
            <Pressable style={styles.rateButton}>
              <ThemedText type="defaultSemiBold" style={styles.rateButtonText}>
                Average
              </ThemedText>
            </Pressable>
            <Pressable style={styles.rateButton}>
              <ThemedText type="defaultSemiBold" style={styles.rateButtonText}>
                Great
              </ThemedText>
            </Pressable>
            <Pressable style={styles.rateButton}>
              <ThemedText type="defaultSemiBold" style={styles.rateButtonText}>
                Excellent
              </ThemedText>
            </Pressable>
          </View>

          <Pressable
            style={styles.submitButton}
            onPress={() => Alert.alert('Thank you!', 'Your hotel review was submitted successfully.')}
          >
            <ThemedText type="defaultSemiBold" style={styles.submitText}>
              Submit
            </ThemedText>
          </Pressable>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  bgImage: {
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(8, 14, 27, 0.45)',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 90,
    paddingBottom: 26,
  },
  title: {
    color: '#ffffff',
    fontSize: 50,
    lineHeight: 56,
    marginBottom: 28,
  },
  input: {
    height: 64,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    paddingHorizontal: 16,
    color: '#111111',
    fontSize: 20,
    marginBottom: 14,
  },
  commentInput: {
    minHeight: 180,
    paddingTop: 14,
    textAlignVertical: 'top',
  },
  rateTitle: {
    marginTop: 4,
    marginBottom: 12,
    color: '#ffffff',
    fontSize: 42,
  },
  rateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 8,
  },
  rateButton: {
    flex: 1,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#e30016',
  },
  rateButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  submitButton: {
    borderRadius: 14,
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#0c111b',
  },
  submitText: {
    color: '#ffffff',
    fontSize: 22,
  },
});
