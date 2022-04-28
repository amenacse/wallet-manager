import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Fonts} from '../../utils/fonts';
import {SafeAreaView} from 'react-native-safe-area-context';

import DetailsIcon from '../../components/common/icons/details.svg';
import TicketsIcon from '../../components/common/icons/tickets.svg';
import SettingsIcon from '../../components/common/icons/settings-icon.svg';
const DrawerContentFunction = ({navigation, eventDetails, ...props}) => {
  const [selectedEventType] = useState('');
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <SafeAreaView style={{marginTop: -10, flex: 1}}>
          <View style={styles.drawerContent}>
            <View style={styles.drawerSection}>
              <DrawerItem
                  style={styles.drawerItem}
                  label="Dashboard"
                  labelStyle={styles.drawerItemLabel}
                  onPress={() => {
                    navigation.toggleDrawer();
                    navigation.navigate('Dashboard', {
                      pageSource: 'eventOverview',
                    });
                  }}
              />
              <DrawerItem
                  style={styles.drawerItem}
                  label="Categories"
                  labelStyle={styles.drawerItemLabel}
                  onPress={() => {
                    navigation.toggleDrawer();
                    navigation.navigate('Categories', {
                      pageSource: 'eventOverview',
                    });
                  }}
              />
              <DrawerItem
                  style={styles.drawerItem}
                  label="Expenses"
                  labelStyle={styles.drawerItemLabel}
                  onPress={() => {
                    navigation.toggleDrawer();
                    navigation.navigate('Expenses', {
                      pageSource: 'eventOverview',
                    });
                  }}
              />
            </View>
          </View>
        </SafeAreaView>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingBottom: 25,
    marginLeft: 20,
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 22,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 15,
    marginTop: 10,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  drawerItem: {
    marginBottom: -5,
  },
  drawerItemLabel: {
    fontSize: 14,
    fontFamily: Fonts.PoppinsRegular,
    // marginLeft: -15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  avatarWrap: {
    height: 64,
    width: 64,
    overflow: 'hidden',
    borderRadius: 100,
  },
  accButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingLeft: 11,
  },
  noBorder: {
    borderWidth: 0,
    borderBottomWidth: 0,
  },
  txtParagraph: {
    paddingLeft: 8,
    marginBottom: 0,
    fontSize: 14,
    fontWeight: '400',
  },
  txtParagraphActive: {
    paddingLeft: 8,
    marginBottom: 0,
    fontSize: 14,
    fontWeight: '500',
  },
});


const DrawerContent = (DrawerContentFunction);
export {DrawerContent};
