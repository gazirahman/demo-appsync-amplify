/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function TransactionItem(props) {
  const { transaction, overrides, ...rest } = props;
  return (
    <View
      width="343px"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "TransactionItem")}
    >
      <View
        width="343px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 1165")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="14px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="113px"
        height="11px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="36%"
        bottom="42%"
        left="58.89%"
        right="8.16%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"$"}${transaction?.amount}`}
        {...getOverrideProps(overrides, "$120.00")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="139px"
        height="20px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30%"
        bottom="30%"
        left="7%"
        right="52.48%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={transaction?.label}
        {...getOverrideProps(overrides, "Printing")}
      ></Text>
    </View>
  );
}
