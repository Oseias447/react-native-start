import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import { StyleSheet } from 'react-native';
import {
    Container,
    Header,
    Content,
    ListItem,
    Text,
    Left,
    Body,
    Icon,
    Right,
    Button,
 } from 'native-base';

import { AsyncStorage } from 'react-native';

class SideBar extends Component {

  signOut = () => {
    const { navigation } = this.props;

    AsyncStorage.clear();

    navigation.navigate('Login');

  }

  chatBox = () => {
    const { navigation } = this.props;

    navigation.navigate('Messages')
  }

  render() {
    return (
    <Container>
      <Header style={styles.header}>
        <Text>Seja Bem Vindo!</Text>
      </Header>
      <Content>
        <ListItem icon>
          <Left>
            <Button
            onPress={()=> this.chatBox()}
            style={{ backgroundColor: "#FF9501", top: 4 }}>
              <Icon name="chatboxes" size={25} color="#fff" />
            </Button>
          </Left>
          <Body>
            <Text>Menssagens</Text>
          </Body>
          <Right>
            <FontAwesome name="angle-right" size={25} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#44b909", top: 4 }}>
              <FontAwesome name="cog" size={25} color="#fff" />
            </Button>
          </Left>
          <Body>
            <Text>Ajuda e suporte</Text>
          </Body>
          <Right>
            <FontAwesome name="angle-right" size={25} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button onPress={()=> this.signOut()} style={{ backgroundColor: "#007AFF", top: 4 }}>
              <FontAwesome name="sign-out" size={20} color="#fff" />
            </Button>
          </Left>
          <Body>
            <Text>Sair</Text>
          </Body>
        </ListItem>
      </Content>
    </Container>
    );
  }
}
export default withNavigation(SideBar);

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    backgroundColor: "#FFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});
