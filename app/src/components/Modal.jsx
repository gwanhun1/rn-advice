import React from "react";
import { Modal as RNModal } from "react-native";

const CustomModal = ({ modalVisible, children }) => {
  return (
    <RNModal visible={modalVisible} animationType="slide" transparent={true}>
      {children}
    </RNModal>
  );
};

export default CustomModal;
