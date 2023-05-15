  import { StatusBar } from 'expo-status-bar';
  import React, { useRef, useState} from 'react';
  import { Animated, Image, StyleSheet, SafeAreaView,  Text, View, TouchableOpacity } from 'react-native';
  import Profile from "./assets/Eliton.jpg";
  import { createStackNavigator } from 'react-navigation-stack';
  import { NavigationContainer } from '@react-navigation/native';


  //Tab Icons...
  import iconHome from "./assets/iconHome.png";
  import iconFilmes from "./assets/iconFilmes.png";
  import iconSeries from "./assets/iconSeries.png";
  import iconDesenhos from "./assets/iconDesenhos.png";
  import iconSair from "./assets/iconSair.png";
  //Menu...
  import Menu from "./assets/iconMenu.png";
  import Fechar from "./assets/iconFechar.png";
  //Fotos...
  import fotoFilmes from "./assets/fotoFilmes.jpg";

  //telas...
  import Filmes from "./Componentes/FilmesScreen/Filmes";
  import Series from "./Componentes/SeriesScreen/Series";
  import Desenhos from "./Componentes/SeriesScreen/Series";


  export default function App() {
    const [currentTab, setCurrentTab] = useState("Home");

    //Navegações
    const Stack = createStackNavigator();

    // To get the curretn Status of menu ...
    const [showMenu, setShowMenu] = useState(false);

    // Animated Properties...

    const offsetValue = useRef(new Animated.Value(0)).current;
    // Scale Intially must be One...
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;

    return (

      <><NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Filmes" component={Filmes} />
          <Stack.Screen name="Series" component={Series} />
          <Stack.Screen name="Desenhos" component={Desenhos} />
        </Stack.Navigator>
      </NavigationContainer><SafeAreaView style={styles.container}>
          <View style={{ justifyContent: 'flex-start', padding: 15 }}>
            <Image source={Profile} style={{
              width: 60,
              height: 60,
              borderRadius: 10,
              marginTop: 30
            }}></Image>
            <Text style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#fff",
              marginTop: 20
            }}>Eliton Camargo</Text>

            <TouchableOpacity>
              <Text style={{
                marginTop: 6,
                color: "#FFF"
              }}>Ver Perfil</Text>
            </TouchableOpacity>

            <View style={{
              flexGrow: 1,
              marginTop: 30
            }}>
              {TabButton(currentTab, setCurrentTab, "Home", iconHome, navigation)}
              {TabButton(currentTab, setCurrentTab, "Filmes", iconFilmes, navigation)}
              {TabButton(currentTab, setCurrentTab, "Series", iconSeries, navigation)}
              {TabButton(currentTab, setCurrentTab, "Desenhos", iconDesenhos, navigation)}

            </View>

            <View>
              {TabButton(currentTab, setCurrentTab, "Sair", iconSair)}
            </View>

          </View>

          <Animated.View style={{
            flexGrow: 1,
            backgroundColor: "#FFF",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 15,
            paddingVertical: 20,
            borderRadius: showMenu ? 20 : 0,
            // transformando view....
            transform: [
              { scale: scaleValue },
              { translateX: offsetValue }
            ]
          }}>

            <Animated.View style={{
              transform: [
                { translateY: closeButtonOffset }
              ]
            }}>
              <TouchableOpacity onPress={() => {
                //actions...
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 600,
                  useNativeDriver: true
                })
                  .start();

                Animated.timing(offsetValue, {
                  toValue: showMenu ? 0 : 185,
                  duration: 600,
                  useNativeDriver: true
                })
                  .start();

                Animated.timing(closeButtonOffset, {
                  toValue: !showMenu ? -30 : 0,
                  duration: 600,
                  useNativeDriver: true
                })
                  .start();

                setShowMenu(!showMenu);
              } }>
                <Image source={showMenu ? Fechar : Menu} style={{
                  width: 20, height: 20,
                  tintColor: "#7c4cf5",
                  marginTop: 40,
                }}></Image>

              </TouchableOpacity>

              <Text style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "#7c4cf5",
                paddingTop: 20
              }}>{currentTab}</Text>

              <Image source={fotoFilmes} style={{
                width: '100%', height: 300,
                borderRadius: 15,
                marginTop: 20,
              }}></Image>

              <Text style={{
                fontSize: 20,
                fontWeight: "bold",
                paddingBottom: 5,
                paddingTop: 15
              }}>Filmes, Séries e Desenhos animados!</Text>
              <Text style={{
                fontWeight: "bold",
              }}>Lorem ipsum dolor sit amet. Et asperiores exercitationem est reprehenderit ratione eum distinctio saepe et voluptatem veniam in atque doloremque.</Text>

            </Animated.View>

          </Animated.View>

        </SafeAreaView></>
    );
  }

  const TabButton = (currentTab, setCurrentTab, title, image)=>{
    return(
      <TouchableOpacity onPress={()=>{
        if(title == "Sair"){

        }
        else{
          setCurrentTab(title);
          navigation.navigate(title);
        }
      }}>
        <View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 8,
            backgroundColor: currentTab == title ? 'white' : 'transparent',
            borderRadius: 8,
            paddingRight: 45,
            paddingLeft: 13,
            marginTop: 10
          }}>
            <Image source={image} style={{
              width: 25, height: 25,
              tintColor: currentTab == title ? "#7c4cf5" : "white"
            }}></Image>
            <Text style={{
              fontSize: 15,
              fontWeight: "bold",
              paddingLeft: 15,
              color: currentTab == title ? "#7c4cf5" : "white"
            }}>{title}</Text>
          </View>
        </View>
        </TouchableOpacity>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7c4cf5',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  });
