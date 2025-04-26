import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Linking,
  ToastAndroid,
  Platform,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-root-toast';
import emailjs from '@emailjs/browser';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text) => {
    Clipboard.setString(text);

    if (Platform.OS === 'web') {
      alert('Copied successfully!');
    } else {
      Toast.show('Copied successfully!', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }
  };

  const handleSend = () => {
    if (!name || !email || !subject || !message) {
      if (Platform.OS === 'web') {
        alert('Please complete all fields!');
      } else {
        Toast.show('Please complete all fields!', {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM,
        });
      }
      return;
    }
  
    const serviceID = 'service_jg0e0bg';
    const templateID = 'template_8j9m81l';
    const publicKey = 'NrP8T4NAgL9JxE_oI';
  
    const templateParams = {
      name: name,
      email: email,
      title: subject,
      message: `name: ${name}\n
      email: ${email}\n
      title: ${subject}\n
      message: ${message}`,
    };
  
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        if (Platform.OS === 'web') {
          alert('Sent successfully!');
        } else {
          Toast.show('Sent successfully!', {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
          });
        }
  
        // Reset form
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, (error) => {
        console.error('FAILED...', error);
        if (Platform.OS === 'web') {
          alert('Sending failed!');
        } else {
          Toast.show('Sending failed!', {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
          });
        }
      });
  };

  return (
    <View style={styles.wrapper}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        <Text style={styles.heading}>Get in touch</Text>
        <Text style={styles.subText}>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>📍 Address</Text>
          <Text style={styles.infoText}>Districts 12, Ho Chi Minh City</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>📧 Email</Text>
          <TouchableOpacity onPress={() => copyToClipboard('anhphi1125@gmail.com')}>
            <Text style={styles.linkText}>anhphi1125@gmail.com</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>📞 Call Me</Text>
          <TouchableOpacity onPress={() => copyToClipboard('0966273790')}>
            <Text style={styles.infoText}>(+84) 966 273 790</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Right Section */}
      <View style={styles.rightSection}>
        <Text style={styles.heading}>Let's discuss my project</Text>
        <Text style={styles.subText}>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alts.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Name*"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email*"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Subject*"
            value={subject}
            onChangeText={setSubject}
          />
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Message*"
            multiline
            numberOfLines={4}
            value={message}
            onChangeText={setMessage}
          />

          <TouchableOpacity style={styles.button} onPress={handleSend}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  leftSection: {
    flex: 1,
    minWidth: 300,
    paddingRight: 10,
  },
  rightSection: {
    flex: 1,
    minWidth: 300,
    paddingLeft: 10,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
  },
  infoBox: {
    marginBottom: 12,
    elevation: 4,
    boxShadow: "0px 2px 3.84px rgba(0,0,0,0.25)",
    padding: 12,
    borderRadius: 6
  },
  label: {
    fontWeight: '600',
    color: '#FDC435',
  },
  infoText: {
    fontSize: 14,
    color: '#444444',
  },
  linkText: {
    fontSize: 14,
    color: '#FDC435',
    textDecorationLine: 'underline',
  },
  socialRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  icon: {
    backgroundColor: '#FDC435',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  form: {
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#FDC435',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-end'
  },
  buttonText: {
    fontWeight: '600',
  },
});