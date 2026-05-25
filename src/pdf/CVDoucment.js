// src/pdf/CVDocument.jsx
import React from "react";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

const S = StyleSheet.create({
  page: { padding: 24, fontSize: 12, fontFamily: "Times-Roman" },
});

export default function CVDocument() {
  return (
    <Document title="CV - Smoke Test">
      <Page size="A4" style={S.page}>
        <View>
          <Text>Hello PDF — pipeline OK ✅</Text>
        </View>
      </Page>
    </Document>
  );
}
