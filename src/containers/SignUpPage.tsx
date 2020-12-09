import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {SignUserInterface} from '../types';
import {RootStackParamList} from '../navigation/RootNavigation';
import SignUpForm from '../components/Form/SignUpForm';

type Props = StackScreenProps<RootStackParamList, 'RoomListPage'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignUpPage: React.FC<Props> = ({route, navigation}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSignUp = (signUser: SignUserInterface) => {
    navigation.navigate('RoomListPage');
  };

  return (
    <>
      <SignUpForm onSignUp={onSignUp} />
    </>
  );
};

export default SignUpPage;
