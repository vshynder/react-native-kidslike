import React from 'react';
import { View, StyleSheet, TextInput, Dimensions, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { COLORS, SPACING } from '../../Constants';
import { Button } from '../../components';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.l,
  },
  input: {
    width: width - SPACING.s,
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    paddingHorizontal: SPACING.s,
    paddingVertical: SPACING.s / 2,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 15,
    marginVertical: SPACING.s,
  },
  title: {
    fontFamily: 'Rubik-Black',
    fontSize: 22,
  },
});

const validationSchema = Yup.object().shape({
  email: Yup.string().email().min(4).max(256).required(),
  password: Yup.string().min(2).max(16).required(),
  name: Yup.string().min(2).max(2).required(),
});

type Values = {
  email: string;
  password: string;
  name: string;
};

const SigninForm: React.FunctionComponent = () => {
  const onSubmit = (values: Values) => {
    validationSchema
      .validate(values)
      .then((res) => console.log('should login'));
  };
  return (
    <Formik
      initialValues={{ email: '', password: '', name: '' }}
      onSubmit={(v) => onSubmit(v)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="off"
          />
          <TextInput
            style={styles.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="_______________"
            secureTextEntry
            autoCompleteType="off"
          />
          <TextInput
            style={styles.input}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder="Ім’я"
            secureTextEntry
            autoCompleteType="off"
          />
          <Button
            label="Зареєструватись"
            onPress={() => handleSubmit()}
            color={COLORS.light}
            backgroundColor="orange"
          />
        </View>
      )}
    </Formik>
  );
};

export default SigninForm;
