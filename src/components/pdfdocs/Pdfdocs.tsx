// import React from 'react';
import React from "react";
import {
  Document,
  Page,
  Text,
  Image,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
// import { Paragraph } from "../common/ui";

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "red",
    height: "100vh",
    paddingTop: "40px",
    paddingBottom: "20px",
    boxSizing: "border-box",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Times-Roman",
    fontWeight: "bold",
  },
  image: {
    width: 320,
    height: 250,
    margin: 10,
    padding: 10,
    alignContent: "center",
    alignSelf: "center",
  },
  description: {
    fontSize: 12,
    textAlign: "left",
    lineHeight: 1.5,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    // backgroundColor: "blue",
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

interface Props {
  title: string;
  img: string;
  description: string;
}
const Pdfdocs: React.FC<Props> = ({ title, img, description }) => {
  return (
    <Document>
      <Page wrap size="A4" style={styles.body}>
        <Text style={styles.title}>{title}</Text>

        <Image style={styles.image} src={img} />
        <View style={styles.description}>
          <Text>{description}</Text>
        </View>
        <View style={styles.description}>
          <Text>{description}</Text>
        </View>
        {/* <View style={styles.pageNumber}>
          <Text
            render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
          ></Text>
        </View> */}
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
      </Page>
    </Document>
  );
};

export default Pdfdocs;
