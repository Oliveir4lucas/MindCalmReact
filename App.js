import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import Checkbox from 'expo-checkbox';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import api from './src/services/api';





const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { id: 1, icon: <Entypo name="emoji-happy" size={34} color="#9978A7" />, label: 'Animado' },
    { id: 2, icon: <Entypo name="emoji-happy" size={34} color="#9978A7" />, label: 'Feliz' },
    { id: 3, icon: <Entypo name="emoji-sad" size={34} color="#9978A7" />, label: 'Triste' },
    { id: 4, icon: <MaterialCommunityIcons name="emoticon-angry-outline" size={34} color="#9978A7" />, label: 'Irritado' },
    { id: 5, icon: <Entypo name="emoji-neutral" size={34} color="#9978A7" />, label: 'Normal' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={[styles.greeting, styles.fontShadowsIntoLight]}>Olá, <Text id="nomeUsuario"></Text></Text>
          <Text style={styles.sectionTitle}>Como você está se sentindo hoje?</Text>
          
          <ScrollView horizontal contentContainerStyle={styles.moodBoxes} showsHorizontalScrollIndicator={false}>
            {moods.map(mood => (
              <TouchableOpacity 
                key={mood.id} 
                style={[
                  styles.moodBox, 
                  selectedMood === mood.id && styles.selectedMoodBox
                ]} 
                onPress={() => setSelectedMood(mood.id)}
              >
                {mood.icon}
                <Text>{mood.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.sectionTitleVid}>Videos de meditação guiada</Text>
          <ScrollView horizontal contentContainerStyle={styles.videoList} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.videoBox}>
              <Image source={require('./assets/video1.png')} style={{ width: 180, height: 105 }}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.videoBox}>
              <Image source={require('./assets/video2.png')} style={{ width: 180, height: 105 }}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.videoBox}>
              <Image source={require('./assets/video3.png')} style={{ width: 180, height: 105 }}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.videoBox}>
              <Image source={require('./assets/video4.png')} style={{ width: 180, height: 105 }}/>
            </TouchableOpacity>
          </ScrollView>

          <Text style={styles.sectionTitlePod}>Podcast para ajudar você</Text>
          <ScrollView horizontal contentContainerStyle={styles.podcastList} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.podcastBox} onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/img/podcast1.png')} style={{ width: 152, height: 152 }}/>
              <Text style={styles.podcastTitle}>EP.114 Razão vs Emoção</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.podcastBox} onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/img/podcast1.png')} style={{ width: 152, height: 152 }}/>
              <Text style={styles.podcastTitle}>EP.114 Mundo Corporativo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.podcastBox} onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/img/podcast2.png')} style={{ width: 152, height: 152 }}/>
              <Text style={styles.podcastTitle}>O que são habilidades sociais..</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.podcastBox} onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/img/podcast3.png')} style={{ width: 152, height: 152 }}/>
              <Text style={styles.podcastTitle}>5 Comportamentos para ter mais..</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.podcastBox} onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/img/podcast4.png')} style={{ width: 152, height: 152 }}/>
              <Text style={styles.podcastTitle}>Como melhorar o seu foco...</Text>
            </TouchableOpacity>
          </ScrollView>

          <Text style={styles.sectionTitle}>Saiba mais sobre saúde mental</Text>
          <TouchableOpacity style={styles.learnMoreBox} onPress={() => navigation.navigate('Home')}>
            <Image source={require('./assets/img/noticia.png')} style={{ width: 352, height: 243 }}/>
            <Text>Tudo Sobre Saúde Mental - CNN Brasil</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={28} color="white" />
          <Text style={styles.navbarText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
          <Ionicons name="map-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Diario')}>
          <Ionicons name="book-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Diário</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Ionicons name="chatbubble-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

          <View style={styles.moodBoxes}>
            <View style={styles.moodBox}>
              <Entypo name="emoji-happy" size={48} color="#9978A7" />
              <Text>Animado</Text>
            </View>
            <View style={styles.moodBox}>
              <Entypo name="emoji-happy" size={48} color="#9978A7" />
              <Text>Feliz</Text>
            </View>
            <View style={styles.moodBox}>
              <Entypo name="emoji-sad" size={48} color="#9978A7" />
              <Text>Triste</Text>
            </View>
            <View style={styles.moodBox}>
              <MaterialCommunityIcons name="emoticon-angry-outline" size={50} color="#9978A7" />
              <Text>Irritado</Text>
            </View>
            <View style={styles.moodBox}>
              <Entypo name="emoji-neutral" size={48} color="#9978A7" />
              <Text>Normal</Text>
            </View>
          </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
          <Ionicons name="map" size={28} color="white" />
          <Text style={styles.navbarText}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
          <Ionicons name="book-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Diário</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Ionicons name="chatbubble-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const DiaryScreen = ({ navigation }) => {
  const [text, setText] = useState('');

  const mostrarPopup = () => {
    // Aqui você pode adicionar a lógica para mostrar o popup
    console.log("Texto salvo:", text);
  };

  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.titulos}>
        <Text style={styles.title}>Diário de emoções</Text>
        <Text style={styles.subtitle}>Registre suas emoções ao longo do dia</Text>
      </View>
      <View horizontal style={styles.emocoes}>
        <MaterialCommunityIcons name="emoticon-outline" size={70} style={[styles.icon, styles.anim]} />
        <MaterialCommunityIcons name="emoticon-happy-outline" size={70} style={[styles.icon, styles.fel]} />
        <MaterialCommunityIcons name="emoticon-sad-outline" size={70} style={[styles.icon, styles.tris]} />
        <MaterialCommunityIcons name="emoticon-angry-outline" size={70} style={[styles.icon, styles.irrt]} />
        <MaterialCommunityIcons name="emoticon-neutral-outline" size={70} style={[styles.icon, styles.norm]} />
      </View>
      <View style={styles.respostaDiaria}>
        <TextInput
          style={styles.textarea}
          placeholder="Como você está se sentindo agora?"
          multiline
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.saveButton} onPress={mostrarPopup}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
          <Ionicons name="map-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Diario')}>
          <Ionicons name="book" size={28} color="white" />
          <Text style={styles.navbarText}>Diário</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Ionicons name="chatbubble-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const ChatScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const generateWhatsAppLink = () => {
    const phoneNumber = '+5511999999999'; // Substitua pelo número de telefone desejado
    const textMessage = `Nome: ${name}, Mensagem: ${message}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(textMessage)}`;
    Linking.openURL(url)
      .catch((err) => console.error('Erro ao abrir WhatsApp:', err));
  };

  return (
    <View style={styles.containerchat}>
      <View style={styles.titulos}>
        <Text style={styles.title}>Psicóloga Disponível</Text>
        <Text style={styles.subtitle}>Mande uma mensagem, você não está só!</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Seu Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Sua Mensagem"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.button} onPress={generateWhatsAppLink}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
          <Ionicons name="map-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Diario')}>
          <Ionicons name="book-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Diário</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Ionicons name="chatbubble" size={28} color="white" />
          <Text style={styles.navbarText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
          <Ionicons name="map-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
          <Ionicons name="book-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Diário</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Ionicons name="chatbubble-outline" size={28} color="white" />
          <Text style={styles.navbarText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={28} color="white" />
          <Text style={styles.navbarText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const LoginScreen = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await  api.post('/usuario/tela1', {
        email: email,
        senha: senha
      });

      console.log('Resposta da API:', response.data);
    } catch (error) {
      console.log('ERRO:', error.response ? error.response.data : error.message);
    }
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerlogin}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollViewLogin}>
        <View style={styles.tituloCadastro}>
          <Text style={styles.tituloCadastroTitulo}>Seja Bem-Vindo(a)!</Text>
          <Image source={require('./assets/img/mindcalm.png')} style={{ width: 140, height: 160 }}/>
        </View>
        
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.inputLogin} value={email}/>

        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.inputLogin} secureTextEntry={true}value={senha} />

        <View style={styles.confirmacao}>
          <Checkbox
            style={styles.checkboxLogin}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#5D4966' : undefined}
          />
          <Text style={styles.checkboxLembrar}>Lembrar senha</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.botaoContinuar}>
          <View>
            <Text>Entrar</Text>
          </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.textoChamando}>
            Ainda não tem conta? <Text style={styles.textoCadastrese}>Cadastre-se Agora</Text>
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const CadastroScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/register', {
        email,
        password,
      });
      Alert.alert('Info', response.data);
      if (response.data === 'User registered') {
        navigation.navigate('Login');
      }
    } catch (error) {
      Alert.alert('Error', 'Falha ao se registrar');
    }
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerCad}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollViewCad}>
      <View style={styles.tituloLogin}>
          <Text style={styles.tituloLoginTitulo}>Cadastre-se</Text>
        </View>
        <View style={styles.containerPassos}>
          <View style={styles.passos}>
            <View style={styles.retanguloLogin}></View>
            <View style={styles.bolaLogin}></View>
            <View style={styles.bolaLogin}></View>
          </View>
        </View>
        
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.inputLogin} value={email} />

        <Text style={styles.label}>Digite novamente seu e-mail</Text>
        <TextInput style={styles.inputLogin} value={email} />

        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.inputLogin} secureTextEntry={true} value={senha}/>

        <Text style={styles.label}>Digite novamente sua senha</Text>
        <TextInput style={styles.inputLogin} secureTextEntry={true} value={senha}/>

        <View style={styles.confirmacao}>
          <Checkbox
            style={styles.checkboxLogin}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#5D4966' : undefined}
            boxType="circle"
          />
          <Text style={styles.checkboxLabel}>*ao marcar você concorda com os termos de privcacidade e segurança do MindCalm.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro Dois')} style={styles.botaoLogin}>
          <View>
            <Text>IR</Text>
          </View>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.logoTexto}>MindCalm</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const Cadastro2Screen = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerCad}
      keyboardVerticalOffset={0}
    >
      <ScrollView contentContainerStyle={styles.scrollViewCad}>
        <View style={styles.containerPassos}>
          <View style={styles.passos}>
            <View style={styles.bolaLogin}></View>
            <View style={styles.retanguloLogin}></View>
            <View style={styles.bolaLogin}></View>
          </View>
        </View>
        <View style={styles.tituloCadastro}>
          <Text style={styles.tituloCadastroTitulo}>Gostaríamos de conhecer mais sobre você!</Text>
        </View>
        <View style={styles.textoCadastro}>
          <Text style={styles.tituloCadastroTexto}>Como você gostaria de ser chamado(a)?</Text>
        </View>

        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.inputLogin} />

        <View style={styles.containerInputs}>
          <View style={styles.tamanho}>
            <Text style={styles.label}>Data de Nascimento</Text>
            <TextInput style={styles.inputLogin2} />
          </View>
          <View style={styles.tamanho}>
            <Text style={styles.label}>Gênero</Text>
            <TextInput style={styles.inputLogin2} />
          </View>
        </View>

        <View style={styles.containerInputs}>
          <View style={styles.tamanho}>
            <Text style={styles.label}>UF</Text>
            <TextInput style={styles.inputLogin2} />
          </View>
          <View style={styles.tamanho}>
            <Text style={styles.label}>Cidade</Text>
            <TextInput style={styles.inputLogin2} />
          </View>
        </View>

        <View style={styles.containerInputs}>
          <View style={styles.tamanho}>
            <Text style={styles.label}>Telefone</Text>
            <TextInput style={styles.inputLogin2} placeholder="(00) 00000-0000" />
          </View>
          <View style={styles.tamanho}>
            <Text style={styles.label}>CID</Text>
            <TextInput style={styles.inputLogin2} />
          </View>
        </View>


        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.botaoContinuar2}>
        <View>
          <Text>Continuar</Text>
        </View>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mapa" component={MapScreen} />
        <Stack.Screen name="Diario" component={DiaryScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name='Cadastro' component={CadastroScreen}/>
        <Stack.Screen name='Cadastro Dois' component={Cadastro2Screen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




/*Login*/
const styles = StyleSheet.create({
containerlogin: {
  flex: 1,
  backgroundColor: '#9978A7',
},
scrollViewLogin: {
  flexGrow: 1,
  justifyContent: 'center',
},
inputLogin: {
  marginLeft: '10%',
  width: "80%",
  backgroundColor: '#fff',
  height: 50,
  borderRadius: 30,
  paddingLeft: 10,
  marginBottom: 20,
},
label: {
  color: '#fff',
  marginLeft: '10%',
  marginBottom: '2%',
},
confirmacao: {
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: '10%',
  marginTop: 10,
},
checkboxLembrar: {
  color: '#fff',
  marginLeft: 10,
 
},
checkboxLogin: {
  color: '#000',
  backgroundColor: '#fff',
  borderColor: '#5D4966',
},
botaoContinuar: {
  backgroundColor: '#fff',
  width: 120,
  height: 40,
  borderRadius: 30,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 'auto',
  marginRight: '-180%',
},
tituloCadastro: {
  alignItems: 'center',
  marginBottom: 10,
},
tituloCadastroTitulo: {
  color: '#fff',
  fontSize: 20,
  marginBottom: 20,
  fontWeight: '600',
},
textoCadastrese: {
  color: '#DAD5D4',
  textDecorationLine: "underline",
},
textoChamando: {
  color: '#fff',
  alignSelf: 'center',
  marginTop:20,
},


/*Cadastro*/
containerCad: {
  flex: 1,
  backgroundColor: '#9978A7',
  justifyContent: 'center',
},
scrollViewCad: {
  flexGrow: 1,
  justifyContent: 'center',
},
tituloLogin: {
  alignItems: 'center',
  marginBottom: 10,
},
tituloLoginTitulo: {
  color: '#fff',
  fontSize: 20,
  marginTop:40,
  fontWeight: '600',
  marginBottom: -90
},

inputLogin: {
  marginLeft: '5%',
  width: "90%",
  backgroundColor: '#fff',
  height: 50,
  borderRadius: 30,
  paddingLeft: 10,
  marginBottom: 20,
},
label: {
  color: '#fff',
  marginTop: '5%',
  marginLeft: '10%',
  marginBottom: '2%',
},
confirmacao: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '5%',
  marginLeft: '10%',
  width: '30%',
},
checkboxLabel: {
  textDecorationLine: "underline",
  color: '#fff',
  marginLeft: 5,
},
checkboxLogin: {
  color: '#000',
  backgroundColor: '#fff',
  borderColor: '#5D4966',
},
botaoLogin: {
  backgroundColor: '#fff',
  width: 50,
  height: 50,
  borderRadius: 30,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '130%',
},
logoTexto: {
  color: '#fff',
  alignSelf: 'center',
  fontSize: 20,
  marginTop: 40,
},
retanguloLogin: {
  backgroundColor: '#fff',
  width: 40,
  height: 10,
  borderRadius: 20,
},
bolaLogin: {
  backgroundColor: '#fff',
  width: 10,
  height: 10,
  borderRadius: 20,
},
passos: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: 80,
},
containerPassos: {
  flexDirection: 'column',
  alignSelf: 'flex-end',
  marginRight: '5%',
  paddingTop:100,
},
inputLogin: {
  marginLeft: '5%',
  width: "87%",
  backgroundColor: '#fff',
  height: 50,
  borderRadius: 30,
  marginBottom: 20,
},
inputLogin2: {
  marginLeft: '5%',
  backgroundColor: '#fff',
  height: 50,
  borderRadius: 30,
  paddingLeft: 10,
},
label: {
  color: '#fff',
  marginTop: 20,
  marginLeft: '10%',
  marginBottom: 10,
},
botaoContinuar2: {
  backgroundColor: '#fff',
  width: 120,
  height: 40,
  borderRadius: 30,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  marginTop: 30,
  marginLeft: '50%',
  marginBottom: 50,
},
retanguloLogin: {
  backgroundColor: '#fff',
  width: 40,
  height: 10,
  borderRadius: 20,
},
bolaLogin: {
  backgroundColor: '#fff',
  width: 10,
  height: 10,
  borderRadius: 20,
},
passos: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: 80,
},
textoPassos: {
  color: '#fff',
},
containerPassos2: {
  flexDirection: 'column',
  alignSelf: 'flex-end',
  marginRight: '5%',
  marginBottom: 20,
  marginTop: 40,
},
containerInputs: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
},
tamanho: {
  width: '41%',
  marginRight: '5%',
},
tituloCadastro: {
  alignItems: 'center',
  width: 'auto',
  marginBottom: 10,
},
textoCadastro: {
  alignItems: 'center',
  width: '50%',
  marginBottom: 20,
  marginLeft:'1%'
},
tituloCadastroTitulo: {
  color: '#fff',
  fontSize: 20,
},
tituloCadastroTexto: {
  color: '#fff',
  fontSize:16,
},






 /*Home*/
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 60, // Espaço extra para a barra de navegação
  },
  content: {
    padding: 20,
  },
  greeting: {
    fontSize: 18,
    marginVertical: 10,
  },
  moodBoxes: {
    flexDirection: 'row',
    marginVertical: 20,
    marginTop: -2,
    
  },
  moodBox: {
    width: 80,   // Largura do card (30x30 com margem)
    height: 100,  // Altura do card (30x30 com margem)
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,  // Margem horizontal entre os cards
    backgroundColor: 'white',  // Cor de fundo do card
    borderRadius: 15,   // Metade da largura e altura para fazer um card circular
    elevation: 5,   // Elevação para dar uma sombra ao card
    marginBottom: 10,
    marginTop: 5,
  },
  selectedMoodBox: {
    backgroundColor: '#D3C4E3',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
    marginTop: -5,
  },
  sectionTitlePod: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
    marginBottom: -5,
  },
  sectionTitleVid: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
    marginBottom: -5,
  
  },
  videoList: {
    flexDirection: 'row',
    marginVertical: 10,
    marginBottom: 20,
  },
  videoBox: {
    width: 180,
    height: 105,
    borderRadius: 20,
    marginRight: 15,
  },
  podcastList: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 0, // adicionado para evitar padding indesejado
  },
  podcastBox: {
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 8, // ajustado para espaço entre os itens
    width: 150, // largura fixa para cada podcast
  },
  podcastThumbnail: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    borderRadius: 20,
  },
  podcastTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  learnMoreBox: {
    backgroundColor: '#E8E1EB',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  fontShadowsIntoLight: {
    fontFamily: 'ShadowsIntoLight',
  },
  bottomNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#9978A7',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navbarText: {
    color: 'white',
    fontSize: 12,
  },



/*Diário*/
titulos: {
  padding: 15,
  alignItems: 'center',
},
title: {
  fontSize: 20,
  fontWeight: 'bold',
},
subtitle: {
  fontSize: 16,
  color: 'gray',
},
emocoes: {
  flexDirection: 'row',
  alignItems: 'center',
  },

  anim:{
  t: '#98ce96',
  },
  
icon: {
  marginHorizontal: 5,
},
respostaDiaria: {
  paddingVertical: 10,
  paddingHorizontal: 15,
  alignItems: 'center',
},
textarea: {
  width: '100%',
  height: 200,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 10,
  padding: 10,
  textAlignVertical: 'top',
  marginBottom: 10, // Ajuste para menor espaço entre o textarea e o botão
},
saveButton: {
  backgroundColor: '#9978A7',
  padding: 10,
  borderRadius: 20,
  width: '100%',
  alignItems: 'center',
  marginBottom: 160, // Ajuste para menor espaço entre o botão e o próximo elemento
},
saveButtonText: {
  color: 'white',
  fontSize: 16,
},
bottomNavbar: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingVertical: 10,
  backgroundColor: '#9978A7',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
},
navbarText: {
  color: 'white',
  fontSize: 12,
},


/*Chat*/
containerchat: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  padding: 20,
 
},
header: {
  alignItems: 'center',
  marginBottom: 20,
},
logo: {
  fontSize: 24,
  fontWeight: 'bold',
},
titulos: {
  alignItems: 'center',
  marginBottom: 20,
},
title: {
  fontSize: 20,
  fontWeight: 'bold',
},
form: {
  marginBottom: 20,
},
input: {
  borderWidth: 1,
  borderColor: '#CCCCCC',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
},
textArea: {
  height: 100,
  textAlignVertical: 'top',
},
button: {
  backgroundColor: '#9978A7',
  padding: 10,
  borderRadius: 20,
  alignItems: 'center',
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
},


});
