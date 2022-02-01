import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Card, Avatar, Title, Paragraph, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
const LeftContent = (props) => <Avatar.Icon {...props} icon='folder' />;
export default function About() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.headingStyle}>
            MAXHYPECHANNEL COMPANY PROFILE
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            <View>
              <Icon
                name='diamond'
                size={30}
                color='#005294'
                style={{ marginTop: 10, marginBottom: 10 }}
              />
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          </View>
          <Text style={styles.content}>
            Themaxhype.com is a referral company registered in 2017.
            Themaxhype.com was formed out of necessity to meet the needs of
            teeming tourists and residents of the city. Everyone faces the
            dilemma of where to eat, where to grab drink or where to simply have
            some fun when they are in a new city or when they just want to
            unwind after a hard day’s work. So, it doesn’t matter if you are a
            tourist or a resident, we are set up just to meet your needs. If you
            are in search of specific restaurants, clubs or bars that suit your
            unique tastes, we have got you covered as our guide contains all the
            exotic and unique spots that resonates with the kind of ambience you
            desire to enjoy. Our list contains the best restaurants, bars,
            lounges, clubs.movie theaters,yatch/boats,stores,spas, luxury car
            locations, atv rental locations s to meet your every need.
          </Text>
          {/* what to do */}
          <Text style={styles.headingStyle}>WHAT WE DO</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            <View>
              <Icon
                name='diamond'
                size={30}
                color='#005294'
                style={{ marginTop: 10, marginBottom: 10 }}
              />
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          </View>
          <Text style={styles.content}>
            We offer premium referral services to the best and most exotic
            restaurants, the best restaurants, bars, lounges, clubs.movie
            theaters, luxury car locations, atv rental locations, movie
            theaters,Jetski/boats/yatch,Events locations and more. Our services
            are provided though our website which provides access to view and
            make reservations to the best restaurants, bars, lounges,
            clubs.movie theaters, luxury car locations, adventures, atv rental
            locations and pubs of your choice. Once a registration is made,
            customers receive email notifications and the discount codes to be
            redeemed when a customer gets to the venue. With the e-tickets or
            Discount code, customers can redeem the discount that the location
            is offering. The primary purpose of Themaxhype.com is to link people
            with needed services by identifying their needs, Finding the most
            appropriate services to meet their needs, and linking them to the
            most appropriate service providers.#thingstodo in every city.
          </Text>
          {/* Why Choose us */}
          <Text style={styles.headingStyle}>WHY CHOOSE US?</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            <View>
              <Icon
                name='diamond'
                size={30}
                color='#005294'
                style={{ marginTop: 10, marginBottom: 10 }}
              />
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          </View>
        </View>
        <View>
          <Card>
            <Card.Content>
              <Title style={styles.cardTitle}>Our Goals</Title>
              <View style={{ alignItems: 'center' }}>
                <Icon
                  name='check-circle'
                  size={30}
                  color='#005294'
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
              </View>
              <Paragraph>
                To provide people with the best experience ever when it comes to
                finding the best restaurants, bars, lounges, clubs.movie
                theaters, luxury car locations, atv rental
                locations,boats/yatch,spas,stores that suits their needs
                whenever they are looking for things to do.
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
        <View style={{ marginTop: 10 }}>
          <Card>
            <Card.Content>
              <Title style={styles.cardTitle}>Our Mission</Title>
              <View style={{ alignItems: 'center' }}>
                <Icon
                  name='paw'
                  size={30}
                  color='#005294'
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
              </View>
              <Paragraph>
                To effectively communicate with people, accurately identify
                their needs, locate needed services and resources, and help them
                make good choices when accessing our services.
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
        <View style={{ marginTop: 10 }}>
          <Card>
            <Card.Content>
              <Title style={styles.cardTitle}>Our Ethics</Title>
              <View style={{ alignItems: 'center' }}>
                <Icon
                  name='fire'
                  size={30}
                  color='#005294'
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
              </View>
              <Paragraph>
                Professional ethics are designed to protect the dignity and
                rights of people who are being served. At Themaxhype.com we
                ensure that the confidentiality of people we serve is preserved.
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
    lineHeight: 20,
  },
  cardTitle: { textAlign: 'center', fontWeight: 'bold', fontSize: 24 },
});
