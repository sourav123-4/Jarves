import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounerSlice';

const Home = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <View>
      <Text>Number : {count}</Text>
      <Button title='Increment' onPress={()=> dispatch(increment())}/>
      <Button title='Decrement' onPress={()=> dispatch(decrement())}/>
    </View>
  )
}

export default Home