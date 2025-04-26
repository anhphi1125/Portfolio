import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Linking,
} from 'react-native';
import CustomButton from '@/app/Components/CustomButton';

export default function HomeScreen({ onNavigate }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 780;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.rowSpaceContainer,
          { flexDirection: isMobile ? 'column' : 'row' },
        ]}
      >
        <View
          style={[
            styles.leftContainer,
            {
              width: isMobile ? '100%' : '60%',
              paddingHorizontal: isMobile ? 24 : 120,
              alignItems: isMobile ? 'center' : 'flex-start',
              marginTop: isMobile ? 24 : 66,
            },
          ]}
        >
          <Text style={[styles.textPosition, isMobile && { textAlign: 'center' }]}>
            Fontend Developer Intern
          </Text>
          <Text
            style={[
              styles.textWelcome,
              isMobile && { fontSize: 36, textAlign: 'center' },
            ]}
          >
            Hello, my name is {'\n'}Đào Thị Ánh Phi
          </Text>
          <Text
            style={[
              styles.textDes,
              isMobile && { fontSize: 18, textAlign: 'center' },
            ]}
          >
            I'm a second-year Mobile Development student at FPT Polytechnic College, with a strong interest in frontend development. I'm currently learning to build modern, responsive user interfaces using technologies like React and React Native, and I'm working towards becoming a skilled frontend developer.
          </Text>
          <View
            style={[
              styles.rowContainer,
              {
                justifyContent: isMobile ? 'center' : 'flex-start',
                flexWrap: 'wrap',
              },
            ]}
          >
            <CustomButton
              label={'Projects'}
              bg={'#FDC435'}
              radius={8}
              borderW={2}
              borderColor={'#FDC435'}
              onPress={() => onNavigate('Projects')}
            />
            <CustomButton
              label={'LinkedIn'}
              radius={8}
              borderW={2}
              borderColor={'#25282B'}
              onPress={() => Linking.openURL("https://www.linkedin.com/in/th%E1%BB%8B-%C3%A1nh-phi-%C4%91%C3%A0o-b0a669360/")}
            />
          </View>
        </View>

        {/* Ẩn ảnh nếu là mobile */}
        {!isMobile && (
          <Image
            source={require('@/assets/images/yellow.png')}
            style={styles.imgPerson}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  textPosition: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FDC435',
    marginBottom: 12,
  },
  textWelcome: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#25282B',
  },
  textDes: {
    fontSize: 24,
    fontWeight: '400',
    color: '#828282',
    marginVertical: 32,
  },
  imgPerson: {
    resizeMode: 'cover',
    width: 720,
    alignSelf: 'flex-end',
  },
  leftContainer: {},
  rowSpaceContainer: {
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
});