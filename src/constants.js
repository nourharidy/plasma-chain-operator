// Constants
const INIT_METHOD = 'init'
const DEPOSIT_METHOD = 'deposit'
const ADD_TX_METHOD = 'addTransaction'
const NEW_BLOCK_METHOD = 'newBlock'
const START_BYTE_SIZE = 12
const TYPE_BYTE_SIZE = 4
const COIN_ID_BYTE_SIZE = START_BYTE_SIZE + TYPE_BYTE_SIZE
const BLOCKNUMBER_BYTE_SIZE = 12

module.exports = {
  INIT_METHOD,
  DEPOSIT_METHOD,
  NEW_BLOCK_METHOD,
  ADD_TX_METHOD,
  START_BYTE_SIZE,
  TYPE_BYTE_SIZE,
  COIN_ID_BYTE_SIZE,
  BLOCKNUMBER_BYTE_SIZE
}