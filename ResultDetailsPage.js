'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

export default class ResultDetails extends Component {
  render(){
    const listing = this.props.listing;
    var imageHeight = listing.img_height;
    var imageWidth = listing.img_width;
    const title = listing.title;
    const listingResults = {
      title: listing.title,
      number_of_bed_rooms: listing.bedroom_number,
      price_formatted: listing.price_formatted,
      summary: listing.summary,
      number_of_bathrooms: listing.bathroom_number
    }
    return (
      <View style={styles.container}>

        <Text style={styles.title}>{listingResults.title}</Text>
        <Text style={styles.price}>{listingResults.price_formatted}</Text>
        <Text style={styles.summary}></Text>

        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <ResponsiveImage source={{ uri: listing.img_url}} initWidth={imageWidth} initHeight={imageHeight}/>
        </View>

        <View style={styles.separator}></View>

        <Text style={styles.header}>Property Info</Text>

        <ScrollView contentContainerStyle={styles.contentContainer}>

          <Text style={styles.summary}>Number of bedrooms: {listingResults.number_of_bed_rooms}</Text>
          <Text style={styles.summary}>Number of bathrooms: {listingResults.number_of_bathrooms}</Text>

        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 60,
    alignItems: 'center',
  },
  imgcontainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  summary: {
    fontSize: 16,
    color: '#656565'
  },
  contentContainer: {
    padding: 10,
    marginTop: -20,
  },
  header: {
    marginTop: 30,
    fontSize: 28,
    color: '#656565'
  }
})
