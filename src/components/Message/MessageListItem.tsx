import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MessageInterface} from '../../types';
import TextElement from '../utils/TextElement';

export interface MessageListItemProp {
  message: MessageInterface;
  owner: boolean;
}

const MessageListItem: React.FC<MessageListItemProp> = ({
  message,
  owner,
}: MessageListItemProp) => {
  var style;
  if (owner) {
    style = styles.right;
  } else {
    style = styles.left;
  }

  return (
    <>
      <View style={style.messageBubbleContainer}>
        <View style={style.messageBubble}>
          <TextElement
            text={message.authorName}
            style={style.userMessage}
            size={5}
          />
          <TextElement text={message.textMessage} style={style.textMessage} />
        </View>
      </View>
    </>
  );
};

const styles = {
  left: StyleSheet.create({
    messageBubbleContainer: {
      marginBottom: 10,
      alignItems: 'flex-start',
    },
    messageBubble: {
      backgroundColor: '#ffffff',
      borderRadius: 15,
      paddingHorizontal: 10,
      paddingVertical: 10,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    textMessage: {
      color: '#5CBACB',
    },
    userMessage: {
      color: '#5CBACB',
    },
  }),
  right: StyleSheet.create({
    messageBubbleContainer: {
      marginBottom: 10,
      alignItems: 'flex-end',
    },
    messageBubble: {
      backgroundColor: '#5CBACB',
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    textMessage: {},
    userMessage: {},
  }),
};
export default MessageListItem;
