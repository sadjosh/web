import { createSlice } from '@reduxjs/toolkit'
import { chainAdapters, ChainTypes } from '@shapeshiftoss/types'

const initialState = {} as { [key: string]: chainAdapters.SubscribeTxsMessage<ChainTypes>[] }

export const txHistory = createSlice({
  name: 'txHistory',
  initialState,
  reducers: {
    onMessage(state, { payload }: { payload: { message: chainAdapters.SubscribeTxsMessage<ChainTypes>}}) {
      state[payload.message.chain] = state[payload.message.chain] ? [...state[payload.message.chain], payload.message] : [payload.message]
    }
  }
})
